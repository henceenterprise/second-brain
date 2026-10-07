---
type: index
---

# Health

Keep your health information together. Record dates, sources, and relevant context.

## Collections

- [Appointments](appointments/APPOINTMENTS.md) — Visits, preparation, and follow-up.
- [Records](records/RECORDS.md) — Reports, results, and treatment records.

[Parent: Personal](../PERSONAL.md)

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
