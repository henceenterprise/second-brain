---
type: index
---

# System

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

> [!info]- Template identity
> The README and release use the official Hence symbol and name.
>
> - Original artwork: [light artwork](hence-horizontal-principal.png) · [dark artwork](hence-horizontal-reverso.png).
> - The [display signature](hence-signature.svg) keeps the original geometry readable in light and dark themes.
> - These assets belong to the template identity.

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

[Parent: Vault overview](../README.md)

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
