---
type: index
cssclasses:
  - second-brain-index
  - second-brain-personal
---

# Maintenance

[Parent: Home](../HOME.md)

Care instructions and service history for your living space.

## Use

- Create a NOTE for an item or maintenance activity.
- Record known dates, work performed and useful instructions.
- Keep scheduled actions in Planner; link general instructions rather than copying them.

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
