---
type: index
---

# Service placeholder

- Rename [SERVICE] and this index in Obsidian.
- Replace this guidance with the service purpose and context.
- Use NOTE for additional information; track concrete actions in Planner.

## Collections

- [Procedures](procedures/PROCEDURES.md) — Instructions specific to this service.
- [Agreements](agreements/AGREEMENTS.md) — Scope, commitments, and arrangements.

[Parent: Services](../SERVICES.md)

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
