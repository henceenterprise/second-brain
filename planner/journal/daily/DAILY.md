---
type: index
cssclasses:
  - second-brain-index
  - second-brain-planner
---

# Daily notes

[Parent: Journal](../JOURNAL.md)

A dated record of focus, observations and reflection.

## Use

- Open a day in Calendar, or use **Daily notes: Open today's daily note**.
- Calendar applies DAILY; filenames use `YYYY-MM-DD.md`. Open an existing entry instead of duplicating it.
- Keep useful events and observations; link actions and lasting explanations from their originals.
- Remove sections that do not help that day.

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
