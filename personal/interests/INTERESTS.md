---
type: index
cssclasses:
  - second-brain-index
  - second-brain-personal
---

# Interests

[Parent: Personal](../PERSONAL.md)

Your experience of hobbies and subjects you follow.

## Use

- Create a NOTE for reflections, practice observations or ideas to revisit.
- Keep reusable explanations in Resources; link them when useful.
- Use the Journal for dated practice logs. Add a folder when several related notes need it.

> [!example]- Example
> A language-practice note records your experience. General vocabulary or learning methods remain reusable resources.

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
