# Repository maintenance files

These documents support maintenance of the public template source. For personal use, start with the [vault guide](../README.md).

- [Changelog](CHANGELOG.md)
- [Release notes](RELEASE.md)
- [Selective updates](UPDATING.md)
- Issue forms: [bug report](ISSUE_TEMPLATE/bug.yml) · [question or suggestion](ISSUE_TEMPLATE/question.yml)
- [Contributing](CONTRIBUTING.md)
- [Security reporting](SECURITY.md)
- [Template MIT license](../LICENSE.md)
- [Third-party sources and license notices](THIRD-PARTY-NOTICES.md)
- [Repository ignore rules](../.gitignore)

## Presentation assets

Original build inputs: [white Hence logo](artwork/hence-horizontal-principal.png) · [black Hence logo](artwork/hence-horizontal-reverso.png). Editable SVGs and originals are kept here; the vault asset collection contains five display PNGs.

- Transparent banners: [light PNG](../system/assets/second-brain-cover.png) · [light SVG](artwork/second-brain-cover.svg) · [dark PNG](../system/assets/second-brain-cover-dark.png) · [dark SVG](artwork/second-brain-cover-dark.svg)
- Six-area maps: [light PNG](../system/assets/second-brain-map.png) · [light SVG](artwork/second-brain-map.svg) · [dark PNG](../system/assets/second-brain-map-dark.png) · [dark SVG](artwork/second-brain-map-dark.svg)
- [Optional native-theme interface](../.obsidian/snippets/hence-interface.css) — black/white, green accent and independent light/dark colors, advanced sizes, spacing and corners. Built for the native theme; disable this snippet before switching to another community theme. It works with defaults without Style Settings.
- [Optional presentation CSS](../.obsidian/snippets/second-brain-presentation.css) — scoped guidance, theme-aware images and the single **Second Brain** Style Settings panel.
- [Clean Windows overview](../system/assets/second-brain-overview.png) — the currently open template, without personal notes or a cursor.
- [Social preview PNG](social-preview.png) · [editable SVG](social-preview.svg) — 1280 × 640, below 1 MB; upload only after visual acceptance.

The SVGs embed the unchanged official Hence artwork. They use system fonts and have no external image or font dependency. Vault banners/maps are transparent; the social image has a solid charcoal background. Theme markers are supported by GitHub; the scoped snippet selects the matching images in Obsidian. The presentation leaves Helpers and existing plugin code unchanged. Style Settings is an additional optional personalization tool.

## Obsidian configuration and bundled plugin files

These files configure the starter vault and package the third-party plugins documented in [the notices](THIRD-PARTY-NOTICES.md).

### Vault settings

- [App](../.obsidian/app.json) · [Appearance](../.obsidian/appearance.json) · [Core plugins](../.obsidian/core-plugins.json) · [Community plugins](../.obsidian/community-plugins.json)
- [Daily notes](../.obsidian/daily-notes.json) · [Graph](../.obsidian/graph.json) · [Properties](../.obsidian/types.json) · [Workspace](../.obsidian/workspace.json)
- [Legacy core Templates settings](../.obsidian/templates.json) — retained settings for the disabled native plugin.
- [Bookmarks](../.obsidian/bookmarks.json) · [Saved workspaces](../.obsidian/workspaces.json)

### Plugin packages

- **Calendar:** [settings](../.obsidian/plugins/calendar/data.json) · [license](../.obsidian/plugins/calendar/LICENSE) · [entry point](../.obsidian/plugins/calendar/main.js) · [manifest](../.obsidian/plugins/calendar/manifest.json)
- **Iconize:** [settings](../.obsidian/plugins/obsidian-icon-folder/data.json) · [license](../.obsidian/plugins/obsidian-icon-folder/LICENSE) · [entry point](../.obsidian/plugins/obsidian-icon-folder/main.js) · [manifest](../.obsidian/plugins/obsidian-icon-folder/manifest.json) · [styles](../.obsidian/plugins/obsidian-icon-folder/styles.css)
- **Kanban:** [license](../.obsidian/plugins/obsidian-kanban/LICENSE.md) · [entry point](../.obsidian/plugins/obsidian-kanban/main.js) · [manifest](../.obsidian/plugins/obsidian-kanban/manifest.json) · [styles](../.obsidian/plugins/obsidian-kanban/styles.css)
- **Tasks:** [settings](../.obsidian/plugins/obsidian-tasks-plugin/data.json) · [license](../.obsidian/plugins/obsidian-tasks-plugin/LICENSE) · [entry point](../.obsidian/plugins/obsidian-tasks-plugin/main.js) · [manifest](../.obsidian/plugins/obsidian-tasks-plugin/manifest.json) · [styles](../.obsidian/plugins/obsidian-tasks-plugin/styles.css)
- **Templater:** [settings](../.obsidian/plugins/templater-obsidian/data.json) · [license](../.obsidian/plugins/templater-obsidian/LICENSE.TXT) · [entry point](../.obsidian/plugins/templater-obsidian/main.js) · [manifest](../.obsidian/plugins/templater-obsidian/manifest.json) · [styles](../.obsidian/plugins/templater-obsidian/styles.css)

- **Excalidraw:** [settings](../.obsidian/plugins/obsidian-excalidraw-plugin/data.json) · [license](../.obsidian/plugins/obsidian-excalidraw-plugin/LICENSE) · [entry point](../.obsidian/plugins/obsidian-excalidraw-plugin/main.js) · [manifest](../.obsidian/plugins/obsidian-excalidraw-plugin/manifest.json) · [styles](../.obsidian/plugins/obsidian-excalidraw-plugin/styles.css)

- **Style Settings:** [license](../.obsidian/plugins/obsidian-style-settings/LICENSE.md) · [entry point](../.obsidian/plugins/obsidian-style-settings/main.js) · [manifest](../.obsidian/plugins/obsidian-style-settings/manifest.json) · [styles](../.obsidian/plugins/obsidian-style-settings/styles.css). Personal values are saved locally by the plugin; no personalized data file is distributed.

### Template helper

- **Second Brain Helpers:** [usage and maintenance](../.obsidian/plugins/second-brain-helpers/README.md) · [settings](../.obsidian/plugins/second-brain-helpers/data.json) · [MIT license](../.obsidian/plugins/second-brain-helpers/LICENSE) · [source and entry point](../.obsidian/plugins/second-brain-helpers/main.js) · [manifest](../.obsidian/plugins/second-brain-helpers/manifest.json). This bundled template code is separate from the seven third-party community plugins.

- [Bundled dependency license texts](DEPENDENCY-NOTICES.md).
