---
type: index
cssclasses:
  - second-brain-index
  - second-brain-personal
---

# Finance

[Parent: Personal](../PERSONAL.md)

Financial plans and documents, organized for retrieval.

## Use

Keep known dates, currency and original evidence. Distinguish estimates from confirmed amounts; link records instead of duplicating them.

## Collections

| Collection | Keep here |
| --- | --- |
| [Budgets](budgets/BUDGETS.md) | Planned and actual amounts. |
| [Invoices](invoices/INVOICES.md) | Invoices, receipts and context. |

**Private records:** keep credentials in a suitable secure manager; review financial documents before sharing.

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
