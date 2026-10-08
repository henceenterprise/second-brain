---
type: index
cssclasses:
  - second-brain-index
  - second-brain-personal
---

# Memories

[Parent: Personal](../PERSONAL.md)

Experiences, events and milestones worth revisiting.

## Use

- Choose a recognizable title and create a NOTE.
- Record what happened, why it matters and its date when known.
- Link photographs or keepsakes from the note explaining them; keep one original.
- Use the Journal for daily logging and this collection for deliberately preserved memories.

> [!example]- Example
> A fictional weekend gathering has a short account and linked photographs.

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
