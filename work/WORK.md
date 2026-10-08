---
type: index
cssclasses:
  - second-brain-index
  - second-brain-work
---

# Work

[Parent: Vault overview](../README.md)

Projects, roles and responsibilities for any part of your life.

## Use

Projects can be personal or professional. Keep specific context here, reusable learning in Resources and actions in Planner.

## Collections

| Collection | Keep here |
| --- | --- |
| [Career](career/CAREER.md) | Development across roles. |
| [Jobs](jobs/JOBS.md) | Roles, opportunities and applications. |
| [Projects](projects/PROJECTS.md) | Defined outcomes with a completion point. |
| [Services](services/SERVICES.md) | Ongoing or repeatable delivery. |

> [!example]- Professional and everyday projects
> Preparing a job application and organizing a home move both fit Projects. Keep life records in Personal and link them only where they support the work.

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
