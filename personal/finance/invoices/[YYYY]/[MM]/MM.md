---
type: index
cssclasses:
  - second-brain-index
  - second-brain-personal
---

# Month placeholder

[Parent: Yyyy](../YYYY.md)

A starting folder for one month within its year.

## Use

- Rename this folder and its index in Obsidian to a two-digit month, such as `01`.
- Save receipt notes and original invoices here.
- Link records from the note explaining the purchase or activity.
- Use known dates; record uncertainty when a date is unclear.

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
