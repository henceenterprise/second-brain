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

## v1 baseline

- This is the first release; no upgrade from an earlier public release is provided.
- Compatibility changes and any migrations must be explained in each later release.
- There is no automatic template updater or guaranteed release schedule.

[Changelog](CHANGELOG.md) · [Helper maintenance](../.obsidian/plugins/second-brain-helpers/README.md) · [Maintenance index](MAINTENANCE.md)
