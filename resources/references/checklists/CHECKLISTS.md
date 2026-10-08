---
type: index
cssclasses:
  - second-brain-index
  - second-brain-resources
---

# Checklists

[Parent: References](../REFERENCES.md)

Reusable checks that prevent omissions.

## Use

- Create a NOTE stating when to use the checklist.
- Make each check concrete and observable.
- These checks are reference material. Create a Planner task when applying them to actual work.

> [!example]- Example
> A meeting checklist covers preparation, discussion points and follow-up.

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
