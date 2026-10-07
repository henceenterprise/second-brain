---
type: index
---

# Job placeholder

- Rename [JOB] and this index in Obsidian.
- Replace this guidance with the job purpose and context.
- Use NOTE for additional information; track concrete actions in Planner.

## Collections

- [Responsibilities](responsibilities/RESPONSIBILITIES.md) — Role requirements and ongoing duties.
- [Documents](documents/DOCUMENTS.md) — Role-specific supporting material.

[Parent: Jobs](../JOBS.md)

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
