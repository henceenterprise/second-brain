<%*
const file = tp.config.target_file;
const title = file.basename;
const created = tp.file.creation_date("YYYY-MM-DD");
const choices = app.vault.getMarkdownFiles().filter(f => {
  const p = f.path;
  return !/^system(?:\/|$)/.test(p)
    && !/^planner\/(tasks|journal)(?:\/|$)/.test(p)
    && app.metadataCache.getFileCache(f)?.frontmatter?.type === "index";
}).sort((a,b) => a.path.localeCompare(b.path));
const chosen = await tp.system.suggester(f => f.path.replace(/\.md$/, ""), choices, false, "Choose a collection (Escape keeps this note here)");
let parent = "";
if (chosen) {
  const target = chosen.parent.path + "/" + file.name;
  const existing = app.vault.getAbstractFileByPath(target);
  if (existing && existing !== file) {
    new tp.obsidian.Notice("A file with this name already exists in that collection. This note has not moved. Rename it, then move it in Obsidian. Helpers updates its Collection link.");
  } else {
    if (target !== file.path) await tp.file.move(target.replace(/\.md$/, ""), file);
    parent = "\n" + "[".repeat(2) + chosen.path.replace(/\.md$/, "") + "|Collection" + "]".repeat(2) + "\n";
  }
}
tR += "---\ntype: note\ncreated: " + JSON.stringify(created) + "\ndue:\npriority:\naliases: []\ntags: []\n---\n\n# " + title + "\n" + parent + "\n## Notes\n\n## Sources\n\n> [!tip]- Using this note\n> State the purpose. Record useful information and original sources. Link related notes only when they clarify the context. Remove unused sections.\n";
%>
