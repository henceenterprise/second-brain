---
type: index
---

# Memory placeholder

- Rename [MEMORY] and this index in Obsidian.
- Keep the context of one experience, with notes, photos, or other keepsakes.
- Link attachments from the note that explains them.

> [!example]- Example
> A fictional family gathering can have a short account and linked photographs.

[Parent: Memories](../MEMORIES.md)

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
