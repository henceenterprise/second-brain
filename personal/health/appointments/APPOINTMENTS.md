---
type: index
---

# Appointments

- Create a NOTE for a visit.
- Record its date, purpose, questions, and useful follow-up.
- Track concrete actions in Planner.

- Add `starts_at` and optional `ends_at` through native properties for timed appointments.
- Keep arrangements in this note and related actions in Planner.
- Upcoming and ongoing records appear in the Planner event list.

[Parent: Health](../HEALTH.md)

## Files and collections

```base
filters: 'file.path != this.file.path && (file.folder == this.file.folder || (type == "index" && file.folder.startsWith(this.file.folder + "/") && file.folder.split("/").length == this.file.folder.split("/").length + 1))'
properties:
  file.name: {displayName: Name}
  note.starts_at: {displayName: Starts}
  note.ends_at: {displayName: Ends}
  file.ext: {displayName: Type}
  file.mtime: {displayName: Updated}
views:
  - type: table
    name: Files
    order: [file.name, note.starts_at, note.ends_at, file.ext, file.mtime]
```
