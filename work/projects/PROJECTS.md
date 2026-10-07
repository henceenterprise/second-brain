---
type: index
---

# Projects

Use a project for a defined outcome to complete. A project can fit in one note or grow into a folder as its actual material grows.

## Start a project

1. Name a note after its outcome.
2. Insert the note template and adapt its sections to the project.
3. Define the outcome, scope, decisions, and evidence of completion.
4. Link its next action from Kanban.
5. Create extra folders only when they help organize actual material.

> [!example]- Example
> Improving a recurring process can involve observations, options, decisions, and actions. It does not require pre-created assets, documentation, or study subfolders.

Reusable research belongs in Resources; project-specific decisions belong here. Link the two without duplicating content.

Add optional `due` and `priority` to a project note or project index when they describe its overall outcome. Individual action deadlines remain in Planner.

[Parent: Work](../WORK.md)

## Item placeholder

- The [project placeholder](%5BPROJECT%5D/PROJECT.md) demonstrates a folder for one project.
- Rename it for your own item, or duplicate it when another item needs its own collection.

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
