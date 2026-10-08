---
type: index
cssclasses:
  - second-brain-index
  - second-brain-personal
---

# Health

[Parent: Personal](../PERSONAL.md)

Health information with known dates, sources and context.

## Use

Use NOTE for each visit or record; link its original material.

## Collections

| Collection | Keep here |
| --- | --- |
| [Appointments](appointments/APPOINTMENTS.md) | Preparation, arrangements and follow-up. |
| [Records](records/RECORDS.md) | Reports, results and treatment records. |

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
