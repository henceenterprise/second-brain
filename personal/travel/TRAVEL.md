---
type: index
cssclasses:
  - second-brain-index
  - second-brain-personal
---

# Travel

[Parent: Personal](../PERSONAL.md)

Plans and records for journeys, with a folder when a trip needs one.

## Use

- Use NOTE for arrangements and link each original record.
- Add `start_date` and optional `end_date` when dates are known; use dates without invented times.
- Trip indices appear below. Upcoming and ongoing dated trips also appear in Planner.

## Collections

- [Trip placeholder](%5BTRIP%5D/TRIP.md)

## Files and collections

```base
filters: 'file.path != this.file.path && (file.folder == this.file.folder || (type == "index" && file.folder.startsWith(this.file.folder + "/") && file.folder.split("/").length == this.file.folder.split("/").length + 1))'
properties:
  file.name: {displayName: Name}
  note.start_date: {displayName: Start}
  note.end_date: {displayName: End}
  file.ext: {displayName: Type}
  file.mtime: {displayName: Updated}
views:
  - type: table
    name: Files
    order: [file.name, note.start_date, note.end_date, file.ext, file.mtime]
```
