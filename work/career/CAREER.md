---
type: index
---

# Career

Keep information about professional development across roles: skills, experience, qualifications, goals, and professional documents.

## Start simply

Create one note for a topic or document. Link supporting files from the note explaining their purpose and keep the current version easy to find.

> [!example]- Example
> A skills review, a professional profile, or learning goals. A resume can live here if you use one; a dedicated resume hierarchy is not required.

Information about a particular employer or application belongs in Jobs. Concrete development actions belong on Kanban.

Review a document before sharing it. Use local history only for earlier versions worth retaining.

[Parent: Work](../WORK.md)

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
