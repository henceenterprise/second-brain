---
type: index
cssclasses:
  - second-brain-index
  - second-brain-work
---

# Jobs

[Parent: Work](../WORK.md)

Context for a role, opportunity or application.

## Use

- Create a NOTE with role, source, known dates, documents and next steps.
- Use a folder when several records belong together.
- Keep general development in Career, delivery outcomes in Projects and actions in Planner.

> [!example]- Example
> An application note links its source posting, the document version used and a follow-up action.

## Collections

- [job placeholder](%5BJOB%5D/JOB.md)

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
