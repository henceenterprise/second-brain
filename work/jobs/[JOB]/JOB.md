---
type: index
cssclasses:
  - second-brain-index
  - second-brain-work
---

# Job placeholder

[Parent: Jobs](../JOBS.md)

A starting collection for one role or opportunity.

## Use

- Rename `[JOB]` and this index in Obsidian.
- Replace this guidance with purpose, responsibilities and useful context.
- Use NOTE for supporting information; keep concrete actions in Planner.

## Collections

- [Responsibilities](responsibilities/RESPONSIBILITIES.md)
- [Documents](documents/DOCUMENTS.md)

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
