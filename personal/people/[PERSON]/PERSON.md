---
type: index
---

# Person placeholder

- Rename [PERSON] and this index in Obsidian.
- Keep useful context about one relationship: shared interests, conversations, and commitments.
- Add detail notes when needed.

> [!example]- Example
> A fictional collaborator can have a note about an agreed next step.

[Parent: People](../PEOPLE.md)

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
