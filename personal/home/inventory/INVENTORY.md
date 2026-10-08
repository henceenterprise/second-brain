---
type: index
cssclasses:
  - second-brain-index
  - second-brain-personal
---

# Inventory

[Parent: Home](../HOME.md)

Items worth tracking: location, manuals and warranty details.

## Use

- Create a NOTE for an item; record what it is and where it is kept.
- Link manuals, warranties and the original receipt.
- Keep one original file, even when other notes use it.

> [!example]- Example
> An appliance note links its manual and invoice, with the warranty end date when known.

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
