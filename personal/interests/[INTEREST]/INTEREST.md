---
type: index
---

# Interest placeholder

- Rename [INTEREST] and this index in Obsidian.
- Keep personal activities, preferences, and experiences for one interest.
- Reusable learning belongs in Resources; link it when relevant.

> [!example]- Example
> A fictional gardening collection can contain a planting journal and personal observations.

[Parent: Interests](../INTERESTS.md)

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
