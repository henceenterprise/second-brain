---
type: index
cssclasses:
  - second-brain-index
  - second-brain-work
---

# Procedures

[Parent: Service placeholder](../SERVICE.md)

Instructions specific to running this service.

## Use

- Create a NOTE with prerequisites, ordered steps and expected results.
- State how to check the result and relevant limits.
- Link general reusable instructions rather than copying them.

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
