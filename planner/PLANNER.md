---
type: index
---

# Planner

Keep actions, task context, and dated reviews here. Planning supports Personal, Work, and Resources without replacing their information.

## Tools

| Tool | Purpose |
| --- | --- |
| [Kanban](KANBAN.md) | Track outcomes through a visible workflow. |
| [White board](WHITE%20BOARD.md) | Sketch ideas, relationships, and plans with Excalidraw. |
| [Task details](tasks/TASKS.md) | Keep context, next actions, and completion evidence. |
| [Journal](journal/JOURNAL.md) | Record days and review a chosen week. |

> [!tip]- Using the white board
> - Open WHITE BOARD in Excalidraw view to sketch a plan or connect ideas.
> - Keep lasting explanations in their own notes and link them from the drawing when useful.
> - A drawing does not update Kanban cards or task status.
>
> Source: [Excalidraw documentation](https://github.com/zsviczian/obsidian-excalidraw-plugin/blob/2.28.1/README.md).

## Upcoming and ongoing events

- Dates describe an event; tasks describe actions needed for it.
- Keep the event in its own collection.
- Calendar continues to create journal entries.

```base
filters:
  and:
    - 'file.ext == "md" && !file.inFolder("system")'
    - '(start_date && if(end_date, end_date, start_date) >= today()) || (starts_at && if(ends_at, ends_at, starts_at) >= now())'
formulas:
  begins: 'if(starts_at, starts_at, start_date)'
  finishes: 'if(ends_at, ends_at, end_date)'
properties:
  file.name: {displayName: Event}
  formula.begins: {displayName: Starts}
  formula.finishes: {displayName: Ends}
views:
  - type: table
    name: Events
    order: [file.name, formula.begins, formula.finishes]
    sort:
      - property: formula.begins
        direction: ASC
```

## Planning loop

1. Clarify an outcome and one next action.
2. Add a card and link its project or task note when useful.
3. Update its column as the situation changes.
4. Record a result or evidence before marking it done.
5. Review unfinished work and choose the next useful action.

| Item | Meaning |
| --- | --- |
| Card column | Workflow status of the overall work. |
| Checkbox | One action; completing it does not move the card. |
| Note `due` | Deadline for the overall outcome. |
| Event dates | When something happens; not an action deadline. |

> [!example]- Example
> A project can link a location-choice task and a daily conversation note. Each holds the information appropriate to its purpose.

[Parent: Vault overview](../README.md)

> [!info]- Kanban columns
> | Column | Meaning |
> | --- | --- |
> | INBOX | Clarify the work. |
> | TODO | Chosen work. |
> | DOING | In progress. |
> | VALIDATION | Awaiting review. |
> | BLOCKED | Waiting for a dependency. |
> | DONE | Completed outcome. |
> | CANCELED | Stopped work. |
> | ARCHIVED | Older cards worth keeping. |
>
> Rename columns to suit your workflow.

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
