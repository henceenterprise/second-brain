---
type: index
cssclasses:
  - second-brain-index
  - second-brain-inbox
---

# Inbox

[Parent: Vault overview](../README.md)

Capture first; decide where information belongs when its purpose is clear.

## Process a capture

1. Give it a title you will recognize.
2. Record what matters and where it came from.
3. Use NOTE to choose its collection, or move it in Obsidian.
4. Add a Kanban card if it needs action; remove a disposable capture once its useful information is safely retained.

| What you captured | Home |
| --- | --- |
| A record about your life | Personal |
| A project, role or responsibility | Work |
| Learning or reusable information | Resources |
| An action or dated review | Planner |

> [!example]- One subject, different records
> A maintenance guide is reusable knowledge; your receipt is a life record; the next maintenance step is an action. Keep each original in its own context.

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
