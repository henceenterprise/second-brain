---
type: index
cssclasses:
  - second-brain-index
  - second-brain-personal
---

# People

[Parent: Personal](../PERSONAL.md)

Useful context for relationships and shared commitments.

## Use

- Create a NOTE with a name or label suited to your private copy.
- Record how you know the person, relevant conversations and agreements.
- Link shared work only when useful; track concrete actions in Planner.
- Keep only relevant information and consider the person's privacy before sharing.

> [!example]- Example
> A fictional volunteer collaborator has a note about an agreed next step.

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
