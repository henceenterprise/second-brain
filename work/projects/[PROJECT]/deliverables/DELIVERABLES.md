---
type: index
cssclasses:
  - second-brain-index
  - second-brain-work
---

# Deliverables

[Parent: Project placeholder](../PROJECT.md)

Project outputs and evidence of completion.

## Use

- Create a NOTE stating the expected result.
- Link the output or evidence, retaining one original.
- Distinguish a draft, a finished result and an accepted result.

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
