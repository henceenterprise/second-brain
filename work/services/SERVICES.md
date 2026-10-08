---
type: index
cssclasses:
  - second-brain-index
  - second-brain-work
---

# Services

[Parent: Work](../WORK.md)

Ongoing or repeatable service delivery and its responsibilities.

## Use

- Create a NOTE: whom it supports, what it delivers and its boundaries.
- Keep specific arrangements and operating context here.
- Link reusable procedures in Resources and concrete actions in Planner.
- Keep one-time improvements with a defined end in Projects.

> [!example]- Example
> A fictional recurring support service links a general checklist, its specific agreement and active tasks.

## Collections

- [service placeholder](%5BSERVICE%5D/SERVICE.md)

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
