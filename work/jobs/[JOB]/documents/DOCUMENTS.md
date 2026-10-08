---
type: index
cssclasses:
  - second-brain-index
  - second-brain-work
---

# Documents

[Parent: Job placeholder](../JOB.md)

Original supporting material specific to this role.

## Use

- Create a NOTE describing each document's purpose, source and relevant dates.
- Link the original file from its explanatory note.
- Keep current documents easy to identify; preserve history only when useful.

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
