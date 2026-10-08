---
type: index
cssclasses:
  - second-brain-index
  - second-brain-work
---

# Service placeholder

[Parent: Services](../SERVICES.md)

A starting collection for one ongoing service.

## Use

- Rename `[SERVICE]` and this index in Obsidian.
- Replace this guidance with purpose, boundaries and operating context.
- Use NOTE for supporting information; keep concrete actions in Planner.

## Collections

- [Procedures](procedures/PROCEDURES.md)
- [Agreements](agreements/AGREEMENTS.md)

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
