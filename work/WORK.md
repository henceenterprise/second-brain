---
type: index
---

# Work

Keep projects, career information, jobs, and services here.

- **Projects:** defined outcomes for any part of your life.
- **Career, Jobs, Services:** use the collections that fit your responsibilities.

## Collections

| Collection | Use |
| --- | --- |
| [Career](career/CAREER.md) | Development, experience, skills, and professional materials. |
| [Jobs](jobs/JOBS.md) | Information specific to a role, opportunity, or application. |
| [Projects](projects/PROJECTS.md) | Work with a defined outcome and completion point. |
| [Services](services/SERVICES.md) | Ongoing or repeatable service delivery. |

## Apply and connect

Keep role-specific or project-specific context here. Store reusable learning in Resources and link it when applied.

Use Planner for actions. A project note explains the work; a Kanban card records its next action and workflow status.

> [!example]- Example
> - Preparing a job application and organizing a home move are both projects here.
> - Their outcome and decisions stay with the project; personal records stay in Personal, reusable instructions in Resources, and actions in Planner.
> - Link them only where they support the work.

Start with one note per item. Add further divisions when actual work is easier to find that way.

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
