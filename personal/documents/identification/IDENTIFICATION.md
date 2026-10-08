---
type: index
cssclasses:
  - second-brain-index
  - second-brain-personal
---

# Identification

[Parent: Documents](../DOCUMENTS.md)

Identity and eligibility documents, with enough context to use them.

## Use

- Create a NOTE: document purpose, issuer and known dates.
- Link the original; keep sensitive information in your private copy.
- Track renewal actions in Planner.

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
