---
type: index
cssclasses:
  - second-brain-index
  - second-brain-personal
---

# Interest placeholder

[Parent: Interests](../INTERESTS.md)

A starting collection for one interest.

## Use

- Rename `[INTEREST]` and this index in Obsidian.
- Replace this guidance with the interest and useful context.
- Keep your activities and experiences here; link reusable learning in Resources.

> [!example]- Example
> A fictional gardening collection holds personal observations and a planting journal.

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
