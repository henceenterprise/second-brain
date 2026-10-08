---
type: index
cssclasses:
  - second-brain-index
  - second-brain-personal
---

# Year placeholder

[Parent: Invoices](../INVOICES.md)

A starting folder for one year of invoices. No real records are included.

## Use

- Rename this folder and its index in Obsidian to the year you need.
- Create month folders only when they contain records.
- The [month placeholder](%5BMM%5D/MM.md) demonstrates the next level.

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
