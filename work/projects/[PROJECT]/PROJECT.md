---
type: index
cssclasses:
  - second-brain-index
  - second-brain-work
---

# Project placeholder

[Parent: Projects](../PROJECTS.md)

A starting collection for one defined outcome.

## Use

- Rename `[PROJECT]` and this index in Obsidian.
- Replace this guidance with outcome, scope and completion evidence.
- Use NOTE for detail; link the work's next actions in Planner.

## Collections

- [Decisions](decisions/DECISIONS.md)
- [Deliverables](deliverables/DELIVERABLES.md)

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
