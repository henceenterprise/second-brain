# Second Brain Helpers

Small, local conveniences for this template. No network requests, system commands, startup scripts, or runtime libraries beyond Obsidian.

## Your controls

Open **Settings → Second Brain Helpers**.

- Turn note links, new-folder indices, file links, icon inheritance, task deletion, and first-opening Inbox on or off independently.
- Exclude folders used by other plugins; their subfolders are excluded too. Exclusions follow folder renames and moves.
- Turning a helper off keeps existing content and choices. Other plugins remain usable.
- If an adapter fails, that automation pauses with a notice. Fix the problem and use **Retry**, or restart Helpers.
- Helpers observers preserve original plugin operations and later wrappers. Shared or unsupported task notes are kept.

No integration can promise compatibility with every future plugin. Use exclusions or disable the relevant convenience when another plugin owns that content. Notes, tasks, drawings, and native lists remain ordinary Obsidian files; disabling Helpers stops future automation.

## Folder icons

- Folders without a custom icon inherit their immediate parent's icon.
- Inherited icons follow parent changes and moves.
- Existing assigned icons are treated as custom choices.

- When a parent changes, **Keep custom icons** preserves the listed custom descendants. **Use parent icon** switches those descendants to inheritance.
- Closing the dialog keeps custom choices.
- Choosing an icon in Iconize makes that folder custom, even when it matches the inherited icon.
- Removing its assigned icon resumes inheritance.

- Inheritance provenance and generated-index paths are stored in [settings](data.json).
- The normal Iconize package stores displayed icons.
- Disabling Helpers leaves the last assigned icons in place, but stops automatic updates.

## Collection context

- Visible folders receive a short named index with `type: index`, a Parent link and a Base for direct files and immediate subcollections.
- Root collections link to the vault README.
- The root LICENSE is repository/legal material and stays outside automatic attachment context.
- Hidden folders and the four source layouts in `system/templates/layouts` are excluded.

- Markdown notes receive one Collection link to the local index or the nearest index above.
- Moves update that link and index Parent links.
- Other content, tags and links are preserved.
- Generated index names follow folder renames; custom index names are kept.
- Name conflicts never replace existing files.
- Several ambiguous indices produce a notice instead of choosing one.

- Helpers waits for pending Templater operations, then removes duplicate Collection lines introduced by template insertion.
- Cancelling NOTE leaves the file in place with its location's minimum context.
- Task, Daily and Weekly keep their normal destinations.
- NOTE also finds new indexed collections outside the six starter areas.

- An existing index link to a drawing already supplies context and leaves its data unchanged.
- A new Excalidraw drawing otherwise receives a native `collection` property; its drawing data is not edited.
- Other Markdown notes use a short standalone Collection line.
- Links inside fenced code examples are preserved.
- Unreferenced attachments and Canvas receive fallback links in a marked section of the nearest collection index.
- A normal note or Canvas reference replaces that fallback.
- Moves, renames, and deletions refresh only this managed section.
- Binary files and Canvas contents are never rewritten.
- Do not edit between the section markers; add personal links outside them.
- An incomplete section or Canvas stops the scan with a notice, preserving existing content.

Settings store generated-index paths, inherited-icon provenance, enabled conveniences, and excluded folders. Note content for Undo stays only in memory. Renamed or moved notes remain readable when Helpers is disabled.

## Card deletion

- An individual card removed from `planner/KANBAN.md` can remove its associated `type: task` Markdown note in `planner/tasks/`.
- Helpers first confirms the board was saved and checks links from notes, other cards, and Canvas files.
- The final revision check follows all awaited reads, with no await before requesting trash.
- This guards observed concurrent changes; it is not an atomic filesystem transaction.
- Multiple task associations, an incomplete check, changes during the check, or other references preserve the note with a notice.
- Links inside examples are conservatively counted as references.

- Moving, editing, completing, or archiving a card, and deleting a whole column, do not delete notes.
- Attachments and other linked files are never deleted.
- Permanent deletion settings disable automatic note deletion.
- Obsidian's selected local or system trash is respected.

- **Undo** in the notice or **Second Brain Helpers: Undo last card and task deletion** restores both during the current session.
- Note content is held only in memory; it is never saved in plugin settings.
- Undo preserves intervening board edits and never replaces an occupied file path.
- A missing original column or conflicting path stops recovery with a message.
- After restarting, recover the note manually from the trash and recreate its card.
- A local trash copy may remain after Undo, as with restoring a copy from a backup.

## Maintenance

- [Readable source and runtime entry point](main.js)
- [Manifest](manifest.json)
- [MIT license](LICENSE)
- [Iconize API](https://florianwoelki.github.io/obsidian-iconize/api/getting-started.html)
- [Obsidian API definitions](https://github.com/obsidianmd/obsidian-api/blob/master/obsidian.d.ts)

- **Tested baseline:** Iconize **2.14.7**, Kanban **2.0.51**, and Templater **2.25.1**; these are not version locks.
- Update community plugins normally. Helpers checks required functions, data shapes, and the board without comparing version numbers.
- Missing interfaces pause only the affected automation. No community plugin code is modified.
- Iconize rendering uses its exposed API. Assignment, pending-template coordination, and Kanban observation also use internal interfaces; future semantic changes may require a Helpers update.

- The Kanban adapter recognises one card removal only when column identities, surviving cards, board data, and archive remain unchanged.
- External file edits and multi-card changes do not trigger deletion.
- Event handlers and method wrappers are removed on unload.
- Upstream interface changes require isolated retesting of the affected adapter and its capability checks.

- Windows desktop validation is recorded in Brain-Sync.
- Helpers requires desktop Obsidian 1.13.0 or newer. macOS/Linux are not yet validated; mobile is outside this release's support.
- This plugin is bundled template code, not a reviewed entry in the Obsidian community catalogue.

## First-opening Inbox

- Inbox expands once per vault/device after plugins are enabled.
- Later collapsed/expanded choices are preserved.
- Folder expansion uses a guarded desktop file-explorer adapter tested in Obsidian 1.14.4; unavailable interfaces show a notice and leave manual navigation working.
- The one-time marker is device-local and is not included in the vault ZIP.
