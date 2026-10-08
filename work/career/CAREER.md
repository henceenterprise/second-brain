---
type: index
cssclasses:
  - second-brain-index
  - second-brain-work
---

# Career

[Parent: Work](../WORK.md)

Professional development across roles: skills, experience and goals.

## Use

- Create a NOTE for a skill review, qualification or professional document.
- Link supporting originals and keep the current version easy to find.
- Keep role-specific material in Jobs and concrete actions in Planner.
- Review documents before sharing. Preserve earlier versions locally only when useful.

> [!example]- Example
> A fictional skills review records strengths, learning goals and supporting evidence.

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
