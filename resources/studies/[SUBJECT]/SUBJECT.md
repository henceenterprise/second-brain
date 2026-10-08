---
type: index
cssclasses:
  - second-brain-index
  - second-brain-resources
---

# Subject placeholder

[Parent: Studies](../STUDIES.md)

A starting collection for learning about one subject.

## Use

- Rename `[SUBJECT]` and this index in Obsidian.
- Replace this guidance with your learning question or goal.
- Create study notes with NOTE, preserving sources and open questions.

> [!example]- Example
> A language study contains vocabulary explanations, practice observations and original materials.

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
