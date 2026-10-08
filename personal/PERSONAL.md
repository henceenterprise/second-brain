---
type: index
cssclasses:
  - second-brain-index
  - second-brain-personal
---

# Personal

[Parent: Vault overview](../README.md)

Records about your own life.

## Use

Keep one original; reusable explanations belong in Resources.

## Collections

| Collection | Keep here |
| --- | --- |
| [Finance](finance/FINANCE.md) | Budgets, invoices and financial records. |
| [Health](health/HEALTH.md) | Appointments and health records. |
| [Home](home/HOME.md) | Inventory and maintenance. |
| [Travel](travel/TRAVEL.md) | Trip plans and records. |
| [Documents](documents/DOCUMENTS.md) | Identification and certificates. |
| [Interests](interests/INTERESTS.md) | Personal practice and reflections. |
| [People](people/PEOPLE.md) | Relationships and commitments. |
| [Memories](memories/MEMORIES.md) | Experiences worth keeping. |

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
