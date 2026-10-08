---
type: index
cssclasses:
  - second-brain-index
  - second-brain-system
---

# System

[Parent: Vault overview](../README.md)

Use the supplied layouts and topic catalogue to keep your notes consistent.

**Optional automation:** open **Settings → Second Brain Helpers** to disable individual conveniences or exclude folders. Existing content stays. After a failure notice, fix the issue and use **Retry**; other tools remain usable.

## Collections

- [Templates](templates/TEMPLATES.md) — Four layouts and property guidance.
- [Tags](tags/TAGS.md) — Choose useful topics from the starting catalogue.

## Add a collection

1. Create a folder in Obsidian. Helpers creates its named index, Parent link, and automatic Base. You can also duplicate a suitable placeholder folder.
2. Give the collection a clear purpose. Keep one index with `type: index`; existing index names and custom icons are preserved.
3. New notes receive one Collection link to their folder index, or the nearest index above. Moving a note or collection updates its context. Add other links only when useful.
4. Generated indices follow folder renames. Name conflicts preserve existing files and show a notice. A renamed custom index keeps its name.
5. New folders inherit the immediate parent icon. Parent changes update inherited icons; a dialog lets you keep custom descendants or switch them to inheritance.

- The new index appears in its parent's automatic list.
- NOTE finds human collection indices by their property and current path.
- Journal, task, and System folders use their own tools and instructions.

> [!tip]- A complete check
> - Create a sample note, confirm it appears in the collection, follow its Collection link, and check the parent link.
> - Renaming inside Obsidian updates file links.
> - Helpers keeps Parent and Collection links aligned with the folder hierarchy; review copied links about other subjects yourself.
> - Keep one original for each attachment.
> - Helpers links otherwise unreferenced files and Canvas from their nearest index, without changing their content.

## Make the presentation yours

Open **Settings → Style Settings → Second Brain**. One panel groups **Interface** and **Documents**. Choose **Compact**, **Balanced** or **Spacious**; extra spacing, control padding and line height remain adjustable. Use native **Appearance** for mode, theme and font choices; Graph colors remain unchanged.

**Interface** refines the native app: black/white surfaces, green accent, advanced sizes, spacing and corners. Colors have independent light/dark values. Folder icons and indentation guides use the six area colors, darkened in light mode for visibility; **Use neutral folder accents** disables them.

Use **Use native appearance** to pause the interface styling. Disable `hence-interface` in **Appearance → CSS snippets** before installing another community theme. Choose fonts and content size in native Appearance. Optional interface/code sizes remain in Style Settings.

| Control | Starting point |
| --- | --- |
| Reading width | 760 px; choose 520–1000 px. |
| Layout density | Balanced; Compact or Spacious. |
| Area accents | On or Off. |
| Area colors | Separate light and dark values for each area. |
| Heading style | Editorial or Native. |
| Table style | Subtle or Bordered. |

- **Theme:** Settings → Appearance → Base color scheme. System follows your device; Light and Dark override it.
- **Reset:** use the reset control beside a changed Style Settings value.
- **No Style Settings:** the optional presentation snippet keeps its starting values.
- **No snippet:** content and navigation still work; both theme-specific images may appear.
- **Index properties:** hidden in Reading View for a cleaner page; edit them in Live Preview.
- **Your notes:** the four layouts do not add presentation classes. Remove an index's `second-brain-index` class to keep native styling there.

[Identity and editable artwork](assets/ASSETS.md) — transparent banners, area maps, official logos and the vault overview.

## Tool paths in v1

Rename ordinary collections inside Obsidian. **Keep these tool paths unchanged:**

| Path | Used for |
| --- | --- |
| `planner/KANBAN.md` | Workflow board. |
| `planner/tasks/` | Task notes and action lists. |
| `planner/journal/daily/` | Daily entries. |
| `planner/journal/weekly/` | Weekly reviews. |
| `system/templates/layouts/` | Four layouts. |
| `resources/drawings/` | New Excalidraw drawings. |

Renaming links alone does not update plugin destinations.

Keep the supplied template filenames and the task/journal collection indices. Customize their text, not their paths.


## Files and collections

```base
filters: 'file.path != this.file.path && (file.folder == this.file.folder || (type == "index" && file.folder.startsWith(this.file.folder + "/") && file.folder.split("/").length == this.file.folder.split("/").length + 1))'
properties:
  file.name: {displayName: Name}
  file.ext: {displayName: Type}
  file.mtime: {displayName: Updated}
views:
  - type: table
    name: Files
    order: [file.name, file.ext, file.mtime]
```
