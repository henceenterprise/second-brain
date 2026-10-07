---
type: index
---

# Subject placeholder

- Rename [SUBJECT] and this index in Obsidian.
- Replace the guidance with your learning question or goal.
- Create study notes using NOTE and preserve source titles, links, and relevant sections.

> [!example]- Example
> A language study can contain vocabulary notes, practice observations, and links to original materials.

[Parent: Studies](../STUDIES.md)

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
