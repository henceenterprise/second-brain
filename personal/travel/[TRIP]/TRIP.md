---
type: index
---

# Trip placeholder

- Rename [TRIP] and this index in Obsidian.
- Replace this guidance with the trip purpose, dates, arrangements, and useful links.
- Create additional notes with NOTE; link expenses to their original records.

> [!example]- Example
> A fictional weekend visit can have an itinerary note and a note for booking details.

[Parent: Travel](../TRAVEL.md)

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
