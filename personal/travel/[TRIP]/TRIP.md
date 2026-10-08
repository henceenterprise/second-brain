---
type: index
cssclasses:
  - second-brain-index
  - second-brain-personal
---

# Trip placeholder

[Parent: Travel](../TRAVEL.md)

A starting collection for one trip.

## Use

- Rename `[TRIP]` and this index in Obsidian.
- Replace this guidance with purpose, known dates and arrangements.
- Use `start_date` and optional `end_date` for the trip period.
- Use NOTE for additional details; link expenses to their original records.

> [!example]- Example
> A fictional weekend trip has a destination, dates, transport arrangements and a short packing checklist.

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
