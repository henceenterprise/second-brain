---
type: index
cssclasses:
  - second-brain-index
  - second-brain-personal
---

# Health records

[Parent: Health](../HEALTH.md)

Reports, results and treatment records with their original context.

## Use

- Create a NOTE stating the date, source and reason for keeping the record.
- Attach and link the original beside the note.
- Preserve the wording of professional recommendations.

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
