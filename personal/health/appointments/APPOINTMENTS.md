---
type: index
cssclasses:
  - second-brain-index
  - second-brain-personal
---

# Appointments

[Parent: Health](../HEALTH.md)

Preparation, arrangements and follow-up for health visits.

## Use

- Create a NOTE for each visit: purpose, questions and useful outcomes.
- For a timed visit, add `starts_at` and optional `ends_at` in native properties.
- Upcoming and ongoing visits appear in Planner; keep follow-up actions there.

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
