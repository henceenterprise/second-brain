---
type: index
---

# Jobs

Keep information about a professional role, opportunity, or application. Use this collection when it is relevant to your work.

## Create a useful note

- Record the role or opportunity, its source, important dates when known, related documents, and next steps.
- Add an organization or role folder only when several notes need it.

> [!example]- Example
> An application note can link its source posting, the document version used, and a follow-up task. An existing-role note can instead record responsibilities and procedures.

Keep general development in Career, delivery outcomes in Projects, and action status on Kanban.

[Parent: Work](../WORK.md)

## Item placeholder

- The [job placeholder](%5BJOB%5D/JOB.md) demonstrates a folder for one role or opportunity.
- Rename it for your own item, or duplicate it when another item needs its own collection.

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
