---
type: index
cssclasses:
  - second-brain-index
  - second-brain-work
---

# Projects

[Parent: Work](../WORK.md)

Defined outcomes for any part of your life, professional or personal.

## Use

- Name a NOTE after the outcome; state scope and evidence of completion.
- Record decisions and link the next action from Kanban.
- Keep reusable research in Resources, linked where it supports the project.
- Use optional `due` and `priority` for the overall outcome. Action deadlines stay separate.
- Add folders only when actual material becomes easier to find.

> [!example]- Example
> Preparing an application and organizing a home move are both projects. Their decisions stay here; life records stay in Personal.

## Collections

- [project placeholder](%5BPROJECT%5D/PROJECT.md)

## Files and collections

```base
filters: 'file.path != this.file.path && (file.folder == this.file.folder || (type == "index" && file.folder.startsWith(this.file.folder + "/") && file.folder.split("/").length == this.file.folder.split("/").length + 1))'
properties:
  file.name: {displayName: Name}
  note.due: {displayName: Due}
  note.priority: {displayName: Priority}
  file.ext: {displayName: Type}
  file.mtime: {displayName: Updated}
views:
  - type: table
    name: Files
    order: [file.name, note.due, note.priority, file.ext, file.mtime]
```
