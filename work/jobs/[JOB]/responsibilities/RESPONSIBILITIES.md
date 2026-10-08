---
type: index
cssclasses:
  - second-brain-index
  - second-brain-work
---

# Responsibilities

[Parent: Job placeholder](../JOB.md)

Ongoing duties and requirements of this role.

## Use

- Create a NOTE for each responsibility when it needs detail.
- Describe expected outcomes, boundaries and useful context.
- Link supporting records and track concrete actions in Planner.

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
