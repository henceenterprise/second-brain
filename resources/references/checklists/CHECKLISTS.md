---
type: index
---

# Checklists

- Use NOTE for reusable checks.
- State when to use the list and keep each check concrete.
- These checkboxes are reference material; create a task in Planner when using a checklist for actual work.

> [!example]- Example
> A meeting checklist can cover preparation, discussion points, and follow-up.

[Parent: References](../REFERENCES.md)

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
