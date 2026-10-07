---
type: index
---

# People

Keep useful context for relationships and shared commitments: how you know someone, relevant discussion topics, or agreements to follow up.

## Write a relationship note

Use a name or label appropriate for your private copy. Record relevant context, link shared projects or events, and track concrete actions on Kanban.

> [!example]- Example
> A note about a volunteer collaborator can link a shared project and record an agreed next step. The starter contains no named people or personal profiles.

Keep information only when you have a reason to retain it. Consider another person's privacy before sharing their note or attachments.

[Parent: Personal](../PERSONAL.md)

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
