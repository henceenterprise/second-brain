---
type: index
cssclasses:
  - second-brain-index
  - second-brain-personal
---

# Memory placeholder

[Parent: Memories](../MEMORIES.md)

A starting collection for one experience.

## Use

- Rename `[MEMORY]` and this index in Obsidian.
- Replace this guidance with the experience, known date and context.
- Link photographs and keepsakes from the note that explains them.

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
