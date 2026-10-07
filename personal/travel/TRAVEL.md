---
type: index
---

# Travel

Keep plans, arrangements, and memories for each trip. Duplicate the placeholder when another trip needs its own collection.

## Collections

- [Trip placeholder](%5BTRIP%5D/TRIP.md) — A starting folder for one trip.

- Add `start_date` and optional `end_date` to the trip index when dates are known.
- The list below includes trip indices; upcoming and ongoing trips also appear in the Planner event list.

[Parent: Personal](../PERSONAL.md)

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
