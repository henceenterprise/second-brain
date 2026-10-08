---
type: index
cssclasses:
  - second-brain-index
  - second-brain-work
---

# Agreements

[Parent: Service placeholder](../SERVICE.md)

Scope, commitments and arrangements for this service.

## Use

- Create a NOTE naming relevant parties or roles, scope and known dates.
- Record commitments and link the original agreement.
- Track concrete follow-up actions in Planner.

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
