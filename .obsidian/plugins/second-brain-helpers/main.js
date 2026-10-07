/* Second Brain Helpers â€” MIT, Copyright (c) 2026 Hence. */
const { Plugin, PluginSettingTab, Setting, Modal, Notice, TFolder, TFile, parseLinktext, getFrontMatterInfo, parseYaml } = require('obsidian');

const BOARD = 'planner/KANBAN.md';
const FILES_START = '<!-- second-brain-helpers:files:start -->';
const FILES_END = '<!-- second-brain-helpers:files:end -->';
const iconName = value => typeof value === 'string' ? value : value?.iconName;
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const FEATURES = { context: 'Note collection links', indexes: 'New-folder indices', attachments: 'Unreferenced file links', icons: 'Folder icon inheritance', kanban: 'Exclusive task deletion', inbox: 'First-opening Inbox' };

class HelpersSettings extends PluginSettingTab {
  constructor(app, plugin) { super(app, plugin); this.plugin = plugin; }
  display() {
    const { containerEl, plugin } = this;
    containerEl.empty();
    containerEl.createEl('p', { text: 'Optional conveniences. Turning them off keeps existing notes, links and icons. Other plugins continue to work.' });
    for (const [key, label] of Object.entries(FEATURES)) {
      new Setting(containerEl).setName(label).addToggle(toggle => toggle.setValue(plugin.enabled[key]).onChange(async value => {
        plugin.enabled[key] = value;
        plugin.failedIntegrations?.delete(key);
        await plugin.refreshOptions();
      }));
    }
    new Setting(containerEl).setName('Excluded folders').setDesc('No automatic changes inside these folders or their subfolders. References are still checked before task deletion.');
    for (const path of plugin.excludedFolders) {
      new Setting(containerEl).setName(path).addButton(button => button.setButtonText('Remove exclusion').onClick(async () => {
        plugin.excludedFolders = plugin.excludedFolders.filter(p => p !== path);
        await plugin.refreshOptions();
        this.display();
      }));
    }
    new Setting(containerEl).setName('Exclude a folder').addDropdown(dropdown => {
      dropdown.addOption('', 'Choose a folder');
      for (const folder of plugin.app.vault.getAllFolders().filter(f => f.path !== '/' && !f.path.split('/').some(p => p.startsWith('.'))).sort((a,b) => a.path.localeCompare(b.path))) {
        if (!plugin.excludedFolders.includes(folder.path)) dropdown.addOption(folder.path, folder.path);
      }
      dropdown.onChange(async path => {
        if (!path) return;
        plugin.excludedFolders.push(path);
        await plugin.refreshOptions();
        this.display();
      });
    });
    new Setting(containerEl).setName('Retry paused helpers').setDesc('After resolving a reported problem, retry only enabled functions.').addButton(button => button.setButtonText('Retry').onClick(async () => {
      plugin.failedIntegrations?.clear();
      plugin.warned.clear();
      await plugin.refreshOptions();
      this.display();
    }));
  }
}

class IconChoice extends Modal {
  constructor(app, paths, resolve) { super(app); this.paths = paths; this.resolve = resolve; }
  onOpen() {
    this.titleEl.setText('Custom folder icons');
    this.contentEl.createEl('p', { text: 'The parent icon changed. Keep these custom icons, or let these folders inherit their parent icon?' });
    const list = this.contentEl.createEl('ul');
    for (const path of this.paths) list.createEl('li', { text: path });
    const buttons = this.contentEl.createDiv({ cls: 'modal-button-container' });
    buttons.createEl('button', { text: 'Keep custom icons' }).onclick = () => this.finish(false);
    buttons.createEl('button', { text: 'Use parent icon', cls: 'mod-cta' }).onclick = () => this.finish(true);
  }
  finish(value) { this.answer = value; this.close(); }
  onClose() { this.contentEl.empty(); this.resolve(this.answer === true); }
}

module.exports = class SecondBrainHelpers extends Plugin {
  templaterCompatible(plugin) {
    return typeof plugin?.templater?.files_with_pending_templates?.has === 'function';
  }

  iconsCompatible(plugin) {
    const methods = ['getData', 'addFolderIcon', 'removeFolderIcon', 'saveIconFolderData', 'getRegisteredFileExplorers', 'getIconColor'];
    if (!plugin || methods.some(name => typeof plugin[name] !== 'function') ||
        typeof plugin.api?.setIconForNode !== 'function' ||
        typeof plugin.api?.removeIconInNode !== 'function' ||
        typeof plugin.api?.util?.dom?.createIconNode !== 'function') return false;
    try {
      const data = plugin.getData();
      const explorers = plugin.getRegisteredFileExplorers();
      return !!data && typeof data === 'object' && !Array.isArray(data) && !!explorers &&
        typeof explorers !== 'string' && typeof explorers[Symbol.iterator] === 'function';
    } catch { return false; }
  }

  kanbanCompatible(plugin) {
    return !!plugin && typeof plugin.getStateManager === 'function' && !!plugin.stateManagers &&
      (plugin.stateManagers instanceof Map || typeof plugin.stateManagers === 'object' && !Array.isArray(plugin.stateManagers));
  }

  boardCompatible(state) {
    if (!state || !state.data || !Array.isArray(state.data.errors) || state.data.errors.length || !Array.isArray(state.children)) return false;
    const ids = new Set();
    for (const lane of state.children) {
      if (typeof lane?.id !== 'string' || ids.has(lane.id) || typeof lane.data?.title !== 'string' || !Array.isArray(lane.children)) return false;
      ids.add(lane.id);
      for (const card of lane.children) {
        if (typeof card?.id !== 'string' || ids.has(card.id) || typeof card.data?.titleRaw !== 'string') return false;
        ids.add(card.id);
      }
    }
    return true;
  }

  managerCompatible(manager) {
    return !!manager && typeof manager.setState === 'function' && typeof manager.parser?.boardToMd === 'function' &&
      typeof manager.getNewItem === 'function' && manager.file?.path === BOARD && this.boardCompatible(manager.state);
  }

  async onload() {
    this.running = true;
    let stored;
    try { stored = await this.loadData(); }
    catch (error) {
      this.running = false;
      this.report('Settings could not be read. Helpers is paused; other plugins remain available. Restore its settings or restart after fixing the file.');
      return;
    }
    this.enabled = Object.fromEntries(Object.keys(FEATURES).map(key => [key, stored?.enabled?.[key] !== false]));
    this.excludedFolders = Array.isArray(stored?.excludedFolders) ? stored.excludedFolders.filter(p => typeof p === 'string' && p && !p.split('/').some(part => part === '..') && !/^[A-Za-z]:/.test(p)) : [];
    this.inherited = stored?.inherited || {};
    this.generatedIndices = stored?.generatedIndices || {};
    this.savedProvenance = JSON.stringify({ inherited: this.inherited, generatedIndices: this.generatedIndices, enabled: this.enabled, excludedFolders: this.excludedFolders });
    this.iconQueue = Promise.resolve();
    this.collectionQueue = Promise.resolve();
    this.collectionTimers = new Map();
    this.pendingIndexFolders = new Set();
    this.taskQueue = Promise.resolve();
    this.managerHooks = new Map();
    this.iconHooks = [];
    this.warned = new Set();
    this.addSettingTab(new HelpersSettings(this.app, this));
    this.vaultRevision = 0;
    for (const event of ['create', 'modify', 'rename', 'delete']) {
      this.registerEvent(this.app.vault.on(event, () => { this.vaultRevision++; }));
    }
    this.addCommand({ id: 'undo-task-deletion', name: 'Undo last card and task deletion', callback: () => {
      this.taskQueue = this.taskQueue.then(() => this.undo()).catch(error => this.report(error));
    } });
    this.app.workspace.onLayoutReady(() => {
      this.connect();
      for (const folder of this.app.vault.getAllFolders()) this.scheduleCollection(folder);
      for (const file of this.app.vault.getFiles()) this.scheduleCollection(file);
      this.registerEvent(this.app.metadataCache.on('resolved', () => {
        this.scheduleAttachments();
        for (const folder of this.pendingIndexFolders) this.scheduleCollection(folder);
        this.pendingIndexFolders.clear();
      }));
      this.registerInterval(setInterval(() => this.connect(), 1000));
      this.registerEvent(this.app.workspace.on('layout-change', () => this.connect()));
      this.registerEvent(this.app.vault.on('create', file => { if (file instanceof TFolder) this.scheduleIcons(); }));
      this.registerEvent(this.app.vault.on('create', file => this.scheduleCollection(file)));
      this.registerEvent(this.app.vault.on('modify', file => this.scheduleCollection(file)));
      this.registerEvent(this.app.workspace.on('templater:all-templates-executed', () => {
        for (const file of this.app.vault.getMarkdownFiles()) this.scheduleCollection(file);
      }));
      this.registerEvent(this.app.vault.on('rename', (file, oldPath) => {
        if (file instanceof TFolder) {
          const next = this.excludedFolders.map(path => path === oldPath || path.startsWith(oldPath + '/') ? file.path + path.slice(oldPath.length) : path);
          if (JSON.stringify(next) !== JSON.stringify(this.excludedFolders)) {
            this.excludedFolders = next;
            this.persist().catch(error => this.report(error));
          }
        }
        this.scheduleCollection(file);
        this.scheduleAttachments();
        if (!(file instanceof TFolder)) {
          for (const [folder, path] of Object.entries(this.generatedIndices)) {
            if (path === oldPath) this.generatedIndices[folder] = file.path;
          }
          return;
        }
        this.collectionQueue = this.collectionQueue.then(() => this.renameCollection(file, oldPath)).catch(error => this.report(error));
        for (const child of this.app.vault.getMarkdownFiles()) if (child.path.startsWith(file.path + '/')) this.scheduleCollection(child);
        for (const path of Object.keys(this.inherited)) {
          if (path === oldPath || path.startsWith(oldPath + '/')) {
            this.inherited[file.path + path.slice(oldPath.length)] = this.inherited[path];
            delete this.inherited[path];
          }
        }
        this.scheduleIcons();
      }));
      this.registerEvent(this.app.vault.on('delete', file => {
        this.scheduleAttachments();
        if (file instanceof TFile && file.extension === 'md' && file.parent) this.scheduleCollection(file.parent);
        for (const [folder, path] of Object.entries(this.generatedIndices)) {
          if (path === file.path || folder === file.path || folder.startsWith(file.path + '/')) delete this.generatedIndices[folder];
        }
        if (!(file instanceof TFolder)) return;
        for (const path of Object.keys(this.inherited)) {
          if (path === file.path || path.startsWith(file.path + '/')) delete this.inherited[path];
        }
        this.scheduleIcons();
      }));
    });
  }

  report(error) {
    const message = 'Second Brain Helpers: ' + (error?.message || error);
    try { new Notice(message, 10000); } catch { console.warn(message); }
  }
  warnOnce(key, message) { if (!this.warned.has(key)) { this.warned.add(key); this.report(message); } }

  failIntegration(name, error) {
    this.failedIntegrations ||= new Set();
    this.failedIntegrations.add(name);
    try {
      if (name === 'icons') this.disconnectIcons();
      if (name === 'kanban') this.disconnectManagers();
    } catch { /* A foreign wrapper must not prevent the original plugin operation. */ }
    this.warnOnce(name + '-failure', (FEATURES[name] || name) + ' paused: ' + (error?.message || error) + '. Other tools remain available. Resolve the problem, then use Retry in Helpers settings.');
  }

  guardIntegration(name, action) {
    if (!this.featureEnabled(name)) return;
    try { return action(); } catch (error) { this.failIntegration(name, error); }
  }

  disconnectManagers() {
    for (const [manager, hook] of this.managerHooks || []) {
      // Never overwrite a wrapper installed later by another plugin.
      if (manager.setState === hook.wrapped) manager.setState = hook.original;
    }
    this.managerHooks?.clear();
  }

  featureEnabled(name) { return this.enabled?.[name] !== false && !this.failedIntegrations?.has(name); }

  async refreshOptions() {
    try { await this.persist(); } catch (error) { this.report('Settings could not be saved: ' + (error?.message || error)); }
    try {
      if (!this.featureEnabled('icons')) this.disconnectIcons();
      if (!this.featureEnabled('kanban') || !this.collectionScope(BOARD)) this.disconnectManagers();
    } catch (error) { this.report('An observer could not be detached: ' + (error?.message || error)); }
    this.connect();
    for (const file of this.app.vault.getFiles()) this.scheduleCollection(file);
    for (const folder of this.app.vault.getAllFolders()) this.scheduleCollection(folder);
    this.scheduleIcons();
    this.scheduleAttachments();
  }
  async persist() {
    const snapshot = JSON.stringify({ inherited: this.inherited, generatedIndices: this.generatedIndices, enabled: this.enabled, excludedFolders: this.excludedFolders });
    this.settingsQueue = (this.settingsQueue || Promise.resolve()).catch(() => {}).then(async () => {
      if (snapshot === this.savedProvenance) return;
      await this.saveData(JSON.parse(snapshot));
      this.savedProvenance = snapshot;
    });
    await this.settingsQueue;
  }

  collectionScope(path) {
    return path !== '/' && path !== 'README.md' && !path.split('/').some(part => part.startsWith('.')) &&
      !(this.excludedFolders || []).some(folder => path === folder || path.startsWith(folder + '/')) &&
      !/^system\/templates\/layouts(?:\/|$)/.test(path);
  }

  indexName(folderPath) {
    return folderPath.split('/').pop().replace(/^\[|\]$/g, '').toUpperCase();
  }

  ownIndex(folder, exclude) {
    const candidates = (folder?.children || []).filter(file => file instanceof TFile && file.extension === 'md' && file !== exclude &&
      this.app.metadataCache.getFileCache(file)?.frontmatter?.type === 'index');
    const exact = candidates.filter(file => file.basename === this.indexName(folder.path));
    if (exact.length === 1) return exact[0];
    if (candidates.length > 1) throw new Error('Several collection indices exist in ' + folder.path + '. No automatic link was chosen.');
    return candidates[0] || null;
  }

  nearestIndex(folder, exclude) {
    while (folder && folder.path !== '/') {
      const index = this.ownIndex(folder, exclude);
      if (index) return index;
      folder = folder.parent;
    }
    return this.app.vault.getFileByPath('README.md');
  }

  scheduleCollection(file) {
    if (!this.running || !file || !this.collectionScope(file.path)) return;
    this.scheduleAttachments();
    if (!(file instanceof TFolder) && file.extension !== 'md') return;
    if (!this.featureEnabled(file instanceof TFolder ? 'indexes' : 'context')) return;
    const key = file.path;
    clearTimeout(this.collectionTimers.get(key));
    this.collectionTimers.set(key, setTimeout(() => {
      this.collectionTimers.delete(key);
      this.collectionQueue = this.collectionQueue.then(async () => {
        if (!this.running || this.app.vault.getAbstractFileByPath(file.path) !== file) return;
        if (file instanceof TFolder) await this.ensureIndex(file);
        else await this.linkCollection(file);
      }).catch(error => this.report(error));
    }, 600));
  }

  scheduleAttachments() {
    if (!this.running || !this.featureEnabled('attachments')) return;
    clearTimeout(this.attachmentTimer);
    this.attachmentTimer = setTimeout(() => {
      this.collectionQueue = this.collectionQueue.then(() => this.linkAttachments()).catch(error => this.failIntegration('attachments', error));
    }, 900);
  }

  fileBlock(text) {
    const start = text.indexOf(FILES_START), end = text.indexOf(FILES_END);
    if (start < 0 && end < 0) return null;
    if (start < 0 || end < start || text.indexOf(FILES_START, start + 1) >= 0 || text.indexOf(FILES_END, end + 1) >= 0) {
      throw new Error('An automatic file-link section is incomplete. Its content was preserved.');
    }
    return { start, end: end + FILES_END.length };
  }

  async linkAttachments() {
    if (!this.running || !this.featureEnabled('attachments')) return;
    const revision = this.vaultRevision;
    const files = this.app.vault.getFiles().filter(file => file.path === 'README.md' || (file.path !== 'LICENSE' && this.collectionScope(file.path)));
    const references = new Set(), indices = [], texts = new Map();
    // Ignore only our own fallback sections when deciding whether a file already has context.
    // A normal note, index or Canvas reference supplies context; never rewrite that relationship.
    for (const source of files) {
      if (!['md', 'canvas'].includes(source.extension)) continue;
      let text = await this.app.vault.read(source);
      if (source.extension === 'canvas') {
        const canvas = JSON.parse(text);
        if (!Array.isArray(canvas.nodes)) throw new Error('A Canvas could not be analysed. Automatic file links were left unchanged.');
        for (const node of canvas.nodes) {
          if (node.type === 'file' && typeof node.file === 'string') references.add(node.file);
          if (node.type === 'text') for (const link of this.extractLinks(node.text || '')) {
            const target = this.resolveLink(link, source.path);
            if (target && target !== source) references.add(target.path);
          }
        }
        continue;
      }
      const cache = this.app.metadataCache.getFileCache(source);
      if (!cache) {
        this.warnOnce('attachment-index', 'Automatic file links are waiting for the note index. Existing files were preserved.');
        return; // The metadata resolved event retries after indexing; no busy retry loop.
      }
      if (source.path === 'README.md' || cache.frontmatter?.type === 'index') { indices.push(source); texts.set(source.path, text); }
      const block = this.fileBlock(text);
      if (block) text = text.slice(0, block.start) + text.slice(block.end);
      for (const link of this.extractLinks(text)) {
        const target = this.resolveLink(link, source.path);
        if (target && target !== source) references.add(target.path);
      }
    }
    const groups = new Map();
    for (const file of files) {
      if (file.extension === 'md' || references.has(file.path)) continue;
      const target = this.nearestIndex(file.parent);
      if (!target) throw new Error('No collection index is available for ' + file.path + '.');
      if (!texts.has(target.path)) texts.set(target.path, await this.app.vault.read(target));
      if (!indices.includes(target)) indices.push(target);
      if (!groups.has(target.path)) groups.set(target.path, []);
      groups.get(target.path).push(file);
    }
    if (!this.running || this.vaultRevision !== revision) { this.scheduleAttachments(); return; }
    let expectedRevision = revision;
    for (const index of indices) {
      const before = texts.get(index.path), block = this.fileBlock(before);
      const children = (groups.get(index.path) || []).sort((a, b) => a.path.localeCompare(b.path));
      const section = children.length ? FILES_START + '\n\n## Files without a note link\n\n' +
        children.map(file => '- ' + this.app.fileManager.generateMarkdownLink(file, index.path)).join('\n') + '\n\n' + FILES_END : '';
      if (!block && !section) continue;
      const next = block ? before.slice(0, block.start) + section + before.slice(block.end) : before.trimEnd() + '\n\n' + section + '\n';
      if (next === before) continue;
      if (!this.running || !this.featureEnabled('attachments') || !this.collectionScope(index.path) && index.path !== 'README.md' || this.vaultRevision !== expectedRevision) { this.scheduleAttachments(); return; }
      let changed = false;
      await this.app.vault.process(index, current => {
        if (!this.running || !this.featureEnabled('attachments') || !this.collectionScope(index.path) && index.path !== 'README.md' || current !== before || this.vaultRevision !== expectedRevision) return current;
        changed = true;
        return next;
      });
      if (!changed) { this.scheduleAttachments(); return; }
      expectedRevision = this.vaultRevision;
    }
  }

  async ensureIndex(folder) {
    if (!this.running || !this.featureEnabled('indexes') || !this.collectionScope(folder.path)) return;
    if ((folder.children || []).some(file => file instanceof TFile && file.extension === 'md' && !this.app.metadataCache.getFileCache(file))) {
      this.pendingIndexFolders.add(folder);
      return;
    }
    if (this.ownIndex(folder)) return;
    const name = this.indexName(folder.path);
    const path = folder.path + '/' + name + '.md';
    if (this.app.vault.getAbstractFileByPath(path)) {
      this.warnOnce('index-conflict:' + path, 'Index not created: ' + path + ' already exists. Its content was preserved.');
      return;
    }
    const parent = this.nearestIndex(folder.parent);
    if (!parent) throw new Error('No parent index is available for ' + folder.path + '.');
    const title = folder.name.replace(/^\[|\]$/g, '');
    const link = this.app.fileManager.generateMarkdownLink(parent, path, '', 'Parent: ' + parent.basename);
    const text = '---\ntype: index\n---\n\n# ' + title + '\n\nNotes and files for this collection.\n\n' + link + '\n\n## Files and collections\n\n```base\n' +
      'filters: \'file.path != this.file.path && (file.folder == this.file.folder || (type == "index" && file.folder.startsWith(this.file.folder + "/") && file.folder.split("/").length == this.file.folder.split("/").length + 1))\'\n' +
      'properties:\n  file.name: {displayName: Name}\n  file.ext: {displayName: Type}\n  file.mtime: {displayName: Updated}\n' +
      'views:\n  - type: table\n    name: Files\n    order: [file.name, file.ext, file.mtime]\n```\n';
    await this.app.vault.create(path, text);
    this.generatedIndices[folder.path] = path;
    await this.persist();
    // Notes created alongside a new folder may have temporarily used its parent index.
    for (const file of this.app.vault.getMarkdownFiles()) if (file.parent === folder) this.scheduleCollection(file);
  }

  async renameCollection(folder, oldPath) {
    if (!this.featureEnabled('indexes') || !this.collectionScope(folder.path)) return;
    // Let Obsidian finish the folder rename and its native link rewrites before renaming an index.
    await delay(600);
    if (!this.running || !this.featureEnabled('indexes') || !this.collectionScope(folder.path)) return;
    if (!this.running || this.app.vault.getAbstractFileByPath(folder.path) !== folder) return;
    for (const [key, path] of Object.entries(this.generatedIndices)) {
      if (key !== oldPath && !key.startsWith(oldPath + '/')) continue;
      delete this.generatedIndices[key];
      const nextFolder = folder.path + key.slice(oldPath.length);
      let nextPath = path.startsWith(oldPath + '/') ? folder.path + path.slice(oldPath.length) : path;
      const file = this.app.vault.getFileByPath(nextPath);
      if (key === oldPath && file && file.basename === this.indexName(oldPath)) {
        const desired = nextFolder + '/' + this.indexName(nextFolder) + '.md';
        if (desired !== nextPath && !this.app.vault.getAbstractFileByPath(desired)) {
          await this.app.fileManager.renameFile(file, desired);
          nextPath = desired;
          await this.app.vault.process(file, text => text.replace('# ' + oldPath.split('/').pop().replace(/^\[|\]$/g, '') + '\n', '# ' + folder.name.replace(/^\[|\]$/g, '') + '\n'));
        } else if (desired !== nextPath) {
          this.warnOnce('rename-conflict:' + desired, 'The index name was kept because ' + desired + ' already exists. No file was replaced.');
        }
      }
      this.generatedIndices[nextFolder] = nextPath;
    }
    await this.persist();
    for (const file of this.app.vault.getMarkdownFiles()) if (file.path.startsWith(folder.path + '/')) this.scheduleCollection(file);
  }

  managedLines(text, index) {
    const lines = text.split('\n');
    const result = [];
    let fence = null;
    for (let i = 0; i < lines.length; i++) {
      const marker = lines[i].trim().match(/^(`{3,}|~{3,})/);
      if (marker) {
        if (!fence) fence = { char: marker[1][0], length: marker[1].length };
        else if (fence.char === marker[1][0] && marker[1].length >= fence.length && /^[`~]+\s*$/.test(lines[i].trim())) fence = null;
        continue;
      }
      if (fence) continue;
      const label = index ? 'Parent(?::[^\\]\\n]*)?' : 'Collection';
      const pattern = new RegExp('^(?:\\[\\[[^\\]\\n]+\\|' + label + '\\]\\]|\\[' + label + '\\]\\([^\\n]+\\))\\s*$');
      if (pattern.test(lines[i].trim())) result.push(i);
    }
    return { lines, matches: result };
  }

  async linkCollection(file) {
    if (!this.running || !this.featureEnabled('context') || !this.collectionScope(file.path) || file.extension !== 'md') return;
    const templater = this.app.plugins.plugins['templater-obsidian'];
    const pending = templater?.templater?.files_with_pending_templates;
    if (!this.templaterCompatible(templater)) {
      this.warnOnce('templater-api', 'Automatic note context is paused: enable Templater with a compatible pending-template interface. Your notes are kept.');
      return;
    }
    if (pending?.has(file.path)) { this.scheduleCollection(file); return; }
    const text = await this.app.vault.read(file);
    if (text.trimStart().startsWith('<%')) return;
    const info = getFrontMatterInfo(text);
    const properties = info.exists ? parseYaml(info.frontmatter) || {} : {};
    const isIndex = properties.type === 'index';
    const target = this.nearestIndex(isIndex ? file.parent.parent : file.parent, file);
    if (!target || target === file) return;
    const managed = this.managedLines(text, isIndex);
    // An index already linking a drawing supplies its context without touching drawing data.
    if (!managed.matches.length && this.app.metadataCache.resolvedLinks[target.path]?.[file.path]) return;
    if (properties['excalidraw-plugin']) {
      const expected = '[[' + target.path.replace(/\.md$/, '') + ']]';
      if (properties.collection !== expected) await this.app.fileManager.processFrontMatter(file, props => { props.collection = expected; });
      return;
    }
    const label = isIndex ? 'Parent: ' + target.basename : 'Collection';
    const desired = this.app.fileManager.generateMarkdownLink(target, file.path, '', label);
    if (managed.matches.length === 1) {
      const links = this.extractLinks(managed.lines[managed.matches[0]]);
      if (links.length === 1 && this.resolveLink(links[0], file.path)?.path === target.path) return;
    }
    const path = file.path;
    await this.app.vault.process(file, current => {
      if (!this.running || !this.featureEnabled('context') || !this.collectionScope(file.path) || file.path !== path || pending?.has(file.path) || current.trimStart().startsWith('<%')) return current;
      const { lines, matches } = this.managedLines(current, isIndex);
      if (!matches.length) return current.replace(/\s*$/, '') + (current.trim() ? '\n\n' : '') + desired + '\n';
      const remove = new Set(matches.slice(1));
      lines[matches[0]] = desired;
      return lines.filter((_, index) => !remove.has(index)).join('\n');
    });
  }
  scheduleIcons() {
    this.iconQueue = this.iconQueue.then(() => {
      if (this.featureEnabled('icons')) return this.syncIcons();
    }).catch(error => this.failIntegration('icons', error));
    return this.iconQueue;
  }

  connect() {
    if (!this.running) return;
    this.guardIntegration('inbox', () => this.prepareFirstInbox());
    this.guardIntegration('context', () => this.connectTemplater());
    this.guardIntegration('icons', () => this.connectIconize());
    this.guardIntegration('kanban', () => this.connectKanban());
  }

  connectTemplater() {
    const templater = this.app.plugins.plugins['templater-obsidian'];
    const ready = this.templaterCompatible(templater);
    if (ready && !this.templaterReady) for (const file of this.app.vault.getMarkdownFiles()) this.scheduleCollection(file);
    this.templaterReady = ready;
  }

  connectIconize() {
    const icons = this.app.plugins.plugins['obsidian-icon-folder'];
    if (this.icons && (icons !== this.icons || !this.iconsCompatible(icons))) this.disconnectIcons();
    if (icons && !this.iconsCompatible(icons)) {
      this.warnOnce('icons-api', 'Folder inheritance is paused: the required Iconize interfaces are unavailable. Custom icons are kept.');
    } else if (icons && !this.icons) this.connectIcons(icons);
    if (this.icons && JSON.stringify(this.icons.getData()) !== this.iconSnapshot) this.scheduleIcons();
  }

  connectKanban() {
    const kanban = this.app.plugins.plugins['obsidian-kanban'];
    const liveManagers = new Set(kanban?.stateManagers instanceof Map ? kanban.stateManagers.values() : Object.values(kanban?.stateManagers || {}));
    for (const [manager, hook] of this.managerHooks) {
      if (!this.collectionScope(BOARD) || kanban !== hook.plugin || !this.kanbanCompatible(kanban) || !this.managerCompatible(manager) || !liveManagers.has(manager)) {
        if (manager.setState === hook.wrapped) manager.setState = hook.original;
        this.managerHooks.delete(manager);
      }
    }
    if (!kanban || !this.collectionScope(BOARD)) return;
    if (!this.kanbanCompatible(kanban)) {
      this.warnOnce('kanban-api', 'Automatic task deletion is paused: the required Kanban interfaces are unavailable. Task notes are kept.');
      return;
    }
    const file = this.app.vault.getFileByPath(BOARD);
    // Avoid constructing a state manager: attach only to a board already opened by Kanban.
    const managers = kanban.stateManagers;
    const manager = managers instanceof Map ? (managers.get(file) || managers.get(file?.path)) : managers?.[file?.path];
    if (manager && !this.managerHooks.has(manager)) this.connectManager(manager, kanban);
  }

  prepareFirstInbox() {
    // Folder expansion is device-local, so it cannot be shipped in workspace.json.
    // This narrow desktop adapter runs once per vault/device and preserves later choices.
    if (this.inboxPrepared) return;
    if (typeof this.app.loadLocalStorage !== 'function' || typeof this.app.saveLocalStorage !== 'function') {
      this.inboxPrepared = true;
      this.warnOnce('initial-inbox-api', 'Open Inbox in the file explorer. Automatic first-opening expansion is unavailable on this Obsidian version.');
      return;
    }
    const key = 'second-brain-helpers-inbox-prepared-v1';
    if (this.app.loadLocalStorage(key)) { this.inboxPrepared = true; return; }
    const explorer = this.app.workspace.getLeavesOfType('file-explorer')[0]?.view;
    const inbox = explorer?.fileItems?.inbox;
    if (!inbox) return;
    if (typeof inbox.setCollapsed !== 'function') {
      this.inboxPrepared = true;
      this.warnOnce('initial-inbox-view', 'Open Inbox in the file explorer. Automatic first-opening expansion is unavailable on this Obsidian version.');
      return;
    }
    inbox.setCollapsed(false);
    this.app.saveLocalStorage(key, true);
    this.inboxPrepared = true;
  }

  connectIcons(icons) {
    if (!this.iconsCompatible(icons)) {
      this.warnOnce('icons-api', 'Folder inheritance is disabled: Iconize integration is unavailable.');
      return;
    }
    this.icons = icons;
    // A different persisted icon is a manual override, including edits made while disabled.
    for (const [path, record] of Object.entries(this.inherited)) {
      if (record.icon !== null && iconName(icons.getData()[path]) !== record.icon) delete this.inherited[path];
    }
    this.iconSnapshot = JSON.stringify(icons.getData());
    for (const name of ['addFolderIcon', 'removeFolderIcon']) {
      const original = icons[name];
      const helper = this;
      const wrapped = function(path, ...args) {
        if (!helper.running || helper.icons !== icons || !helper.iconHooks.some(hook => hook.wrapped === wrapped) || !helper.featureEnabled('icons') || !helper.collectionScope(path)) return original.call(this, path, ...args);
        let before;
        try { before = iconName(this.getData()[path]); }
        catch (error) {
          helper.failIntegration('icons', error);
          return original.call(this, path, ...args);
        }
        const result = original.call(this, path, ...args);
        helper.guardIntegration('icons', () => {
          if (helper.app.vault.getAbstractFileByPath(path) instanceof TFolder) {
            delete helper.inherited[path];
            const after = iconName(this.getData()[path]);
            helper.iconSnapshot = JSON.stringify(this.getData());
            helper.iconQueue = helper.iconQueue.then(async () => {
              if (!helper.running || !helper.featureEnabled('icons')) return;
              if (before !== after) await helper.offerCustomIcons(path);
              await helper.syncIcons();
            }).catch(error => helper.failIntegration('icons', error));
          }
        });
        return result;
      };
      icons[name] = wrapped;
      if (icons[name] !== wrapped) throw new Error('The Iconize operation cannot be observed safely.');
      this.iconHooks.push({ name, original, wrapped });
    }
    this.scheduleIcons();
  }

  disconnectIcons() {
    for (const hook of this.iconHooks || []) {
      if (this.icons?.[hook.name] === hook.wrapped) this.icons[hook.name] = hook.original;
    }
    this.iconHooks = [];
    this.icons = null;
  }

  async offerCustomIcons(parent) {
    if (!this.running || !this.featureEnabled('icons') || !this.icons || !this.collectionScope(parent)) return;
    const paths = this.app.vault.getAllFolders().map(folder => folder.path)
      .filter(path => this.collectionScope(path) && path.startsWith(parent + '/') && iconName(this.icons.getData()[path]) && !this.inherited[path]).sort();
    if (!paths.length) return;
    const useParent = await new Promise(resolve => {
      const modal = new IconChoice(this.app, paths, resolve);
      this.choiceModal = modal;
      modal.open();
    });
    this.choiceModal = null;
    if (!useParent || !this.running || !this.featureEnabled('icons') || !this.icons) return;
    // Null marks a deliberate switch to inheritance, without choosing a new category.
    for (const path of paths) if (this.collectionScope(path)) this.inherited[path] = { icon: null };
  }

  async syncIcons() {
    if (!this.running || !this.featureEnabled('icons') || !this.icons) return;
    const icons = this.icons;
    const data = icons.getData();
    const prior = this.iconSnapshot ? JSON.parse(this.iconSnapshot) : {};
    const allFolders = this.app.vault.getAllFolders();
    const folders = allFolders.filter(folder => this.collectionScope(folder.path)).sort((a, b) => a.path.split('/').length - b.path.split('/').length);
    // Catch manual settings edits, including changes made while a helper dialog was open.
    for (const folder of folders) {
      const path = folder.path;
      if (JSON.stringify(prior[path]) === JSON.stringify(data[path])) continue;
      const inherited = this.inherited[path];
      if (inherited && inherited.icon !== null && iconName(data[path]) !== inherited.icon) delete this.inherited[path];
      if (!this.inherited[path] && iconName(prior[path]) !== iconName(data[path])) await this.offerCustomIcons(path);
    }
    if (!this.running || !this.featureEnabled('icons') || icons !== this.icons) return;
    let changed = false;
    for (const folder of folders) {
      const path = folder.path;
      if (!this.collectionScope(path)) continue;
      const record = this.inherited[path];
      if (!record && iconName(data[path])) continue;
      const parentIcon = iconName(data[folder.parent?.path]);
      if (parentIcon) {
        if (iconName(data[path]) !== parentIcon || record?.icon === null) {
          data[path] = data[path] && typeof data[path] === 'object' ? { ...data[path], iconName: parentIcon } : parentIcon;
          changed = true;
        }
        this.inherited[path] = { icon: parentIcon };
      } else if (record) {
        if (data[path]) { delete data[path]; changed = true; }
        delete this.inherited[path];
      }
    }
    const livePaths = new Set(allFolders.map(folder => folder.path));
    for (const path of Object.keys(this.inherited)) if (!livePaths.has(path)) delete this.inherited[path];
    this.iconSnapshot = JSON.stringify(data);
    if (changed) await icons.saveIconFolderData();
    await this.persist();
    // Reuse Iconize's renderer; passing the container also supports secondary windows.
    for (const explorer of icons.getRegisteredFileExplorers()) {
      for (const item of Object.values(explorer.fileItems || {})) {
        if (!(item.file instanceof TFolder)) continue;
        if (!this.collectionScope(item.file.path)) continue;
        const name = iconName(data[item.file.path]);
        const container = item.selfEl;
        if (!container) continue;
        if (name) {
          icons.api.util.dom.createIconNode(icons, item.file.path, name, { container, color: icons.getIconColor(item.file.path) });
          const node = container.querySelector('.iconize-icon');
          if (node) node.setAttribute('data-icon', name);
        } else {
          const node = container.querySelector('.iconize-icon');
          if (node) icons.api.removeIconInNode(container);
        }
      }
    }
  }

  connectManager(manager, plugin) {
    if (!this.kanbanCompatible(plugin) || !this.managerCompatible(manager)) {
      this.warnOnce('kanban-api', 'Automatic task deletion is disabled: Kanban integration is unavailable.');
      return;
    }
    const original = manager.setState;
    const helper = this;
    const wrapped = function(update, save = true) {
      if (!helper.running || helper.managerHooks.get(this)?.wrapped !== wrapped || !helper.featureEnabled('kanban') || !helper.collectionScope(BOARD)) return original.call(this, update, save);
      let before;
      try { before = this.state; }
      catch (error) {
        helper.failIntegration('kanban', error);
        return original.call(this, update, save);
      }
      const result = original.call(this, update, save);
      if (helper.running && !helper.undoing && save && typeof update === 'function') {
        try {
          const removed = helper.singleRemoval(before, this.state);
          if (removed) {
            const expected = this.parser.boardToMd(this.state);
            helper.taskQueue = helper.taskQueue.then(() => helper.removeTask(this, removed, expected)).catch(error => helper.report(error));
          }
        } catch (error) { helper.failIntegration('kanban', error); }
      }
      return result;
    };
    manager.setState = wrapped;
    if (manager.setState !== wrapped) throw new Error('The Kanban operation cannot be observed safely.');
    this.managerHooks.set(manager, { plugin, original, wrapped });
  }

  singleRemoval(before, after) {
    if (!this.boardCompatible(before) || !this.boardCompatible(after) || before === after) return null;
    if (before.data !== after.data || before.children.length !== after.children.length) return null;
    let found = null;
    for (let laneIndex = 0; laneIndex < before.children.length; laneIndex++) {
      const oldLane = before.children[laneIndex], lane = after.children[laneIndex];
      if (oldLane.id !== lane.id || oldLane.data !== lane.data) return null;
      const remaining = new Set(lane.children.map(item => item.id));
      const missing = oldLane.children.filter(item => !remaining.has(item.id));
      if (missing.length > 1 || (missing.length && found)) return null;
      const survivors = oldLane.children.filter(item => remaining.has(item.id));
      if (survivors.length !== lane.children.length || survivors.some((item, index) => item !== lane.children[index])) return null;
      if (missing.length) found = { card: missing[0], laneId: lane.id, laneTitle: lane.data.title,
        index: oldLane.children.indexOf(missing[0]), laneIndex };
    }
    return found;
  }

  extractLinks(text) {
    const links = [];
    for (const match of text.matchAll(/!?\[\[([^\]\n]+)\]\]/g)) links.push(match[1].split('|')[0]);
    for (const match of text.matchAll(/!?\[[^\]\n]*\]\(\s*(<[^>]+>|[^\s)]+)(?:\s+[^)]*)?\)/g)) links.push(match[1].replace(/^<|>$/g, ''));
    return links;
  }

  resolveLink(link, source) {
    if (/^[a-z][a-z0-9+.-]*:/i.test(link) || link.startsWith('#')) return null;
    let decoded;
    try { decoded = decodeURIComponent(link); } catch { throw new Error('A link could not be analysed. The task note was kept.'); }
    return this.app.metadataCache.getFirstLinkpathDest(parseLinktext(decoded).path, source);
  }

  async references(file) {
    const references = [];
    for (const source of this.app.vault.getFiles()) {
      if (source.path === file.path || !['md', 'canvas'].includes(source.extension)) continue;
      const text = await this.app.vault.read(source);
      if (source.extension === 'canvas') {
        const canvas = JSON.parse(text);
        if (!Array.isArray(canvas.nodes)) throw new Error('A Canvas could not be analysed. The task note was kept.');
        if (canvas.nodes.some(node => node.type === 'file' && node.file === file.path ||
          node.type === 'text' && this.extractLinks(node.text || '').some(link => this.resolveLink(link, source.path)?.path === file.path))) references.push(source.path);
        continue;
      }
      const cache = this.app.metadataCache.getFileCache(source);
      if (!cache) throw new Error('The note index is not ready. The task note was kept.');
      // Raw links are conservative: a link inside an example also preserves the note.
      const links = [...this.extractLinks(text), ...(cache.links || []).map(link => link.link), ...(cache.embeds || []).map(link => link.link)];
      if (links.some(link => this.resolveLink(link, source.path)?.path === file.path)) references.push(source.path);
    }
    return [...new Set(references)];
  }

  async waitForSave(manager, expected) {
    for (let attempt = 0; attempt < 50 && this.running; attempt++) {
      if (!this.managerCompatible(manager)) return false;
      if (await this.app.vault.read(manager.file) === expected) return true;
      await delay(100);
    }
    return false;
  }

  async removeTask(manager, removed, expected) {
    if (!this.running || !this.featureEnabled('kanban') || !this.collectionScope(BOARD)) return;
    if (!this.managerCompatible(manager)) { this.report('The Kanban integration could not be verified. The task note was kept.'); return; }
    const links = this.extractLinks(removed.card.data.titleRaw || '');
    const files = [...new Set(links.map(link => this.resolveLink(link, BOARD)?.path).filter(Boolean))]
      .map(path => this.app.vault.getFileByPath(path)).filter(file => file?.path.startsWith('planner/tasks/') && this.collectionScope(file.path) &&
        file.extension === 'md' && this.app.metadataCache.getFileCache(file)?.frontmatter?.type === 'task');
    if (!files.length) {
      if (links.length) this.report('No eligible task note was identified. Linked files were kept.');
      return;
    }
    if (files.length !== 1) { this.report('This card links to several task notes. All notes were kept.'); return; }
    const file = files[0];
    if (!await this.waitForSave(manager, expected)) { this.report('The board save could not be confirmed. The task note was kept.'); return; }
    const content = await this.app.vault.read(file);
    const revision = this.vaultRevision;
    const refs = await this.references(file);
    if (refs.length) { this.report('Task note kept: still referenced by ' + refs.join(', ')); return; }
    // Recheck immediately before trashing: never act on a stale board or edited task.
    const savedBoard = await this.app.vault.read(manager.file);
    const savedTask = await this.app.vault.read(file);
    if (!this.running || !this.featureEnabled('kanban') || !this.collectionScope(BOARD) || !this.collectionScope(file.path) || !this.managerCompatible(manager) || this.vaultRevision !== revision || manager.parser.boardToMd(manager.state) !== expected ||
        savedBoard !== expected || savedTask !== content || this.app.vault.getFileByPath(file.path) !== file) {
      this.report('The board or task changed during the check. The task note was kept.'); return;
    }
    if (!['local', 'system'].includes(this.app.vault.getConfig('trashOption'))) {
      this.report('Task note kept: choose a recoverable trash option in Obsidian before using automatic deletion.'); return;
    }
    const record = { ...removed, path: file.path, content, stat: { ctime: file.stat.ctime, mtime: file.stat.mtime } };
    // No await between the final revision check and the trash request.
    if (!this.running || !this.featureEnabled('kanban') || !this.collectionScope(BOARD) || !this.collectionScope(file.path) || this.vaultRevision !== revision) {
      this.report('The vault changed during the check. The task note was kept.'); return;
    }
    await this.app.fileManager.trashFile(file);
    this.lastDeletion = record;
    const fragment = this.app.workspace.containerEl.ownerDocument.createDocumentFragment();
    fragment.createSpan({ text: 'Card and task note removed. ' });
    const button = fragment.createEl('button', { text: 'Undo' });
    button.onclick = () => { this.taskQueue = this.taskQueue.then(() => this.undo(record)).catch(error => this.report(error)); };
    new Notice(fragment, 15000);
  }

  async undo(record = this.lastDeletion) {
    if (!record) { this.report('There is no card and task deletion to undo in this session.'); return; }
    if (record.restored) { this.report('This deletion has already been undone.'); return; }
    if (!this.running) return;
    const plugin = this.app.plugins.plugins['obsidian-kanban'];
    if (!this.kanbanCompatible(plugin)) throw new Error('Undo paused: the required Kanban interfaces are unavailable. The task remains recoverable from the trash.');
    const manager = plugin.getStateManager(this.app.vault.getFileByPath(BOARD));
    if (!this.managerCompatible(manager)) throw new Error('Undo paused: the board structure could not be verified. The task remains recoverable from the trash.');
    const lanes = manager.state.children;
    const byTitle = lanes.filter(lane => lane.data.title === record.laneTitle);
    const lane = lanes.find(lane => lane.id === record.laneId) || (byTitle.length === 1 ? byTitle[0] : null);
    if (!lane) throw new Error('The original column is unavailable. Restore it before using Undo; the task remains in the trash.');
    if (this.app.vault.getAbstractFileByPath(record.path)) throw new Error('Undo stopped: the original note path is occupied. No file was replaced.');
    if (!(this.app.vault.getAbstractFileByPath(record.path.slice(0, record.path.lastIndexOf('/'))) instanceof TFolder)) throw new Error('Undo stopped: the original task folder is unavailable.');
    const alreadyRestored = lanes.some(column => column.children.some(card => card.id === record.card.id || card.data.titleRaw === record.card.data.titleRaw));
    await this.app.vault.create(record.path, record.content, record.stat);
    this.undoing = true;
    try {
      if (!alreadyRestored) {
        manager.setState(state => ({ ...state, children: state.children.map(column => {
          if (column.id !== lane.id) return column;
          const children = [...column.children];
          children.splice(Math.min(record.index, children.length), 0, record.card);
          return { ...column, children };
        }) }));
        if (!manager.state.children.some(column => column.children.some(card => card.id === record.card.id))) {
          throw new Error('The note was recovered, but the original column changed. Restore the card manually.');
        }
      }
      const expected = manager.parser.boardToMd(manager.state);
      if (!await this.waitForSave(manager, expected)) throw new Error('The note was recovered, but the board save could not be confirmed. Check the card before retrying.');
      if (this.lastDeletion === record) this.lastDeletion = null;
      record.restored = true;
      record.content = null;
      this.report('Card and task note restored.');
    } finally { this.undoing = false; }
  }

  onunload() {
    this.running = false;
    this.choiceModal?.close();
    clearTimeout(this.attachmentTimer);
    for (const timer of this.collectionTimers?.values() || []) clearTimeout(timer);
    this.collectionTimers?.clear();
    this.disconnectIcons();
    this.disconnectManagers();
    this.lastDeletion = null;
  }
};
