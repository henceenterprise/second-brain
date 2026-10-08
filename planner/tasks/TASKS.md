---
type: index
cssclasses:
  - second-brain-index
  - second-brain-planner
---

# Task details

[Parent: Planner](../PLANNER.md)

Outcomes, individual actions and the context needed to finish work.

## Create and connect

**From a card:** choose **New note from card** in its menu. **From a note:** insert TASK; its destination is configured here.

Link the detail note from a Kanban card. Update the card's column for workflow status and use checkboxes for its individual actions.

> [!example]- Example
> A location-choice task can keep requirements, options, and a decision here. The related project remains the home for the overall outcome.

Keep uncommitted ideas in Inbox until their purpose is clear. A card does not need a separate detail note when it already contains enough context.

## Remove a mistaken card

| Operation | What happens |
| --- | --- |
| Delete one card | Its exclusive task note goes to trash after safety checks. |
| Note referenced elsewhere | The note stays; a notice explains why. |
| Move or archive a card; delete a column | Notes stay. |
| Attachments | Stay in the vault. |

- **Undo during the session:** use the notice or **Second Brain Helpers: Undo last card and task deletion**. Existing files are never replaced.
- **After restarting:** recover the note from trash and recreate its card.

> [!tip]- If a note is kept
> - Review the references shown in the notice.
> - Several task links, a missing index, a save failure, or permanent deletion settings also keep notes.
> - Remove a note manually only when you have checked its remaining uses.

## Open actions

- These lists show open actions (to do, in progress, or on hold) in task notes, not the note's overall deadline.
- Use **Tasks: Create or edit** to set an action's dates, priority, and recurrence.

### Overdue

```tasks
not done
path regex matches /^planner\/tasks\//
due before today
sort by due
sort by priority
```

### Today

```tasks
not done
path regex matches /^planner\/tasks\//
due today
sort by due
sort by priority
```

### Future deadlines

```tasks
not done
path regex matches /^planner\/tasks\//
due after today
sort by due
sort by priority
```

### No deadline

```tasks
not done
path regex matches /^planner\/tasks\//
no due date
sort by due
sort by priority
```

Moving a card to CANCELED or ARCHIVED does not change its actions. Review outstanding actions: complete them, cancel them with `- [-]`, or deliberately keep them open.

> [!tip]- Cancelled and recurring actions
> - Use `- [-]` for an action that will not be carried out.
> - Cancelled actions stay in the note and leave these lists.
> - Archive only when outstanding commitments have been resolved or deliberately retained.
>
> | Repeat | Example |
> | --- | --- |
> | Calendar rhythm | `🔁 every month on the last` + a due date. |
> | Delay after completion | `🔁 every month when done`. |
>
> Completing an occurrence creates the next action, not a new card state. Use DONE only when the overall work is finished.
>
> Sources: [Tasks statuses](https://github.com/obsidian-tasks-group/obsidian-tasks/blob/8.4.0/docs/Getting%20Started/Statuses.md), [recurring tasks](https://github.com/obsidian-tasks-group/obsidian-tasks/blob/8.4.0/docs/Getting%20Started/Recurring%20Tasks.md).


## Files and collections

```base
filters: 'file.path != this.file.path && (file.folder == this.file.folder || (type == "index" && file.folder.startsWith(this.file.folder + "/") && file.folder.split("/").length == this.file.folder.split("/").length + 1))'
properties:
  file.name: {displayName: Name}
  note.due: {displayName: Outcome due}
  note.priority: {displayName: Outcome priority}
  file.ext: {displayName: Type}
  file.mtime: {displayName: Updated}
views:
  - type: table
    name: Files
    order: [file.name, note.due, note.priority, file.ext, file.mtime]
```
