---
type: index
cssclasses:
  - second-brain-index
  - second-brain-personal
---

# Home

[Parent: Personal](../PERSONAL.md)

Information needed to look after your living space.

## Use

Use NOTE for an item or activity; link its manuals and original records.

## Collections

| Collection | Keep here |
| --- | --- |
| [Inventory](inventory/INVENTORY.md) | Items, manuals and warranties. |
| [Maintenance](maintenance/MAINTENANCE.md) | Care instructions and service history. |

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
