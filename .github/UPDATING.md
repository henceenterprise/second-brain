# Updating a personal vault

A downloaded vault becomes your personal copy. **Do not extract a later release over it or replace its `.obsidian` folder.**

## Obsidian and community plugins

- **Update normally** through Obsidian and the community plugin settings. The template does not lock their versions.
- Bundled versions identify the releases tested and supplied, not a permanent requirement.
- Helpers checks required functions and board structure. A changed version number alone does not pause it.
- Missing interfaces pause only the affected automation, with a notice. Notes and plugins remain available.
- In **Settings → Second Brain Helpers**, disable individual conveniences or exclude folders used by other plugins. Resolve a reported failure, then use **Retry**.
- Back up first; check your workflows after updating. Future versions cannot be guaranteed before they exist.

## Before updating the template

1. Back up the complete vault, including hidden settings and attachments. Open a restored copy to check it.
2. Read the target template release's changelog and changed-file instructions.
3. Try the update on a separate copy, with your normal workflows, before applying it to your working vault.

## What can change

| Content | Update approach |
| --- | --- |
| Your notes, attachments, journals, drawings, tags, and custom indices | Keep your originals. Compare guidance manually; never overwrite personal content. |
| Four layouts | Compare before replacing; preserve custom properties and text. |
| Helpers `main.js` and `manifest.json` | Replace together only when the release documents compatibility. Preserve `data.json`, which stores icon inheritance and generated-index provenance. |
| Community plugins | Update through Obsidian. For manual redistribution, keep matching code, licenses, and sources together. Helpers checks interfaces rather than exact versions. |
| Plugin `data.json`, vault settings, icons, graph, bookmarks, and workspaces | Merge only the specifically documented settings. Keep personal choices; never copy all settings blindly. |

- Close the affected vault before replacing plugin files.
- Reopen it and verify notes, collection lists, templates, Tasks, icons, drawings, and recovery using fictional records.
- If the check fails, close the vault and restore the full backup rather than combining incompatible code and settings.

## v1.0.0 → v1.1.0 presentation

1. Copy the new banner/map assets from `system/assets/` and the optional CSS files into `.obsidian/snippets/`. Update image links to their new paths.
2. Install or update Style Settings through Obsidian if you want the controls. Enable **second-brain-presentation** for guidance and **hence-interface** for the native app appearance under Appearance → CSS snippets. Each layer can be disabled independently.
3. Compare README and index guidance. Keep your content and properties; add presentation classes only to guidance you want styled.
4. Compare the four layouts' instructional text; their logic and properties need no migration.
5. For theme-matching drawings, review Excalidraw's theme-match settings. Keep your other settings.

Do not replace icons, Graph, workspaces or plugin configuration wholesale. Helpers and existing plugin code need no update for this presentation.

**Style Settings → Second Brain:** Interface and Documents group the optional controls. Light/dark colors use individual native pickers with visible defaults. Keep your personal Style Settings values. Folder icon and indentation-guide accents use the area palette without changing specific icons or Graph colors. Disable this interface snippet before choosing another community theme; arbitrary theme/plugin combinations have not been tested.

## Ongoing maintenance

- The v1.0.0 release remains available.
- Compatibility changes and any migrations must be explained in each later release.
- There is no automatic template updater or guaranteed release schedule.

[Changelog](CHANGELOG.md) · [Helper maintenance](../.obsidian/plugins/second-brain-helpers/README.md) · [Maintenance index](MAINTENANCE.md)
