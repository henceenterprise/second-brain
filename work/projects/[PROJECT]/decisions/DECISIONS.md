---
type: index
cssclasses:
  - second-brain-index
  - second-brain-work
---

# Decisions

[Parent: Project placeholder](../PROJECT.md)

Choices, their reasons and their implications for this project.

## Use

- Create a NOTE stating the question and relevant options.
- Record the choice, reason, known date and implications.
- Keep earlier decisions when their history still matters.

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
