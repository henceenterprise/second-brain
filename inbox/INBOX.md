---
type: index
---

# Inbox

- Capture information here when you do not yet know where it belongs: an idea, question, document, link, or action to clarify.
- New notes created without a chosen location are configured to start here.

## Capture and process

1. Give the note a title you can recognize later.
2. Record what you need to remember and where it came from.
3. During a review, move it to the area that owns it.
4. Add a card to Kanban if it needs action.
5. Remove disposable capture once its useful information is safely kept elsewhere.

| Item | Home |
| --- | --- |
| A record about your own life | Personal |
| A role, responsibility, or project for any part of life | Work |
| Learning or reusable information | Resources |
| Actions and dated reviews | Planner |

> [!example]- Example
> A general maintenance guide belongs in Resources, your purchase receipt belongs in Personal, and the next maintenance action belongs in Planner.

[Parent: Vault overview](../README.md)

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
