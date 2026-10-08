---
type: index
cssclasses:
  - second-brain-index
  - second-brain-resources
---

# Resources

[Parent: Vault overview](../README.md)

Learning and reusable knowledge about any subject.

## Use

Explore questions in Studies; keep stable explanations in References. Bookmarks point to sources; drawings explain visually. Keep one primary explanation and link it where applied.

## Collections

| Collection | Keep here |
| --- | --- |
| [Studies](studies/STUDIES.md) | Learning questions, evidence and findings. |
| [References](references/REFERENCES.md) | Reusable concepts, procedures and checks. |
| [Bookmarks](bookmarks/BOOKMARKS.md) | Outside sources with a reason to keep them. |
| [Drawings](drawings/DRAWINGS.md) | Sketches, diagrams and explanations. |

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
