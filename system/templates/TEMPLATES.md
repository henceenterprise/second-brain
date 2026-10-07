---
type: index
---

# Templates

Create and name a note. Run **Templater: Open insert template modal** and choose one of the four layouts.

| Layout | Use |
| --- | --- |
| [NOTE](layouts/NOTE.md) | Information, studies, references, and projects. Choose a collection; the note moves there and links its index. |
| [TASK](layouts/TASK.md) | Outcome, actions, context, and result, kept in Planner's task collection. |
| [DAILY](layouts/DAILY.md) | Review of a valid day; an invalid filename opens a period picker. |
| [WEEKLY](layouts/WEEKLY.md) | Review of a valid ISO week; an invalid filename opens a period picker. |

- **Automatic:** Calendar creates DAILY/WEEKLY; Kanban **New note from card** creates TASK. Authorize Templater locally as explained in the vault README.
- **Manual:** create the note in its destination, then insert its layout.

| Layout | Destination |
| --- | --- |
| TASK | `planner/tasks` |
| DAILY | `planner/journal/daily` |
| WEEKLY | `planner/journal/weekly` |
| NOTE | Choose a collection in the picker. |

## Properties

| Property | Meaning |
| --- | --- |
| `type` | Kind of note, supplied by its layout. |
| `created` | File creation date; check after migrations or copies. |
| `date` / `week` | Journal period from its filename: `YYYY-MM-DD` / `GGGG-[W]WW`. |
| `due` | Optional deadline for the note's overall outcome. |
| `priority` | Optional importance: `low`, `normal`, or `high`. |
| `aliases` | Alternative names. |
| `tags` | Topics chosen for the content. |

- Leave unused properties empty or remove them.
- A renamed journal file needs its period checked.
- Priority is a text convention, not an enforced dropdown.

## Events and periods

Add properties only when useful: **Add file property**, or **Ctrl+;** on Windows. Choose one pair appropriate to the record.

| Properties | Use | Format |
| --- | --- | --- |
| `start_date`, `end_date` | A day or period without a time, such as a trip. | `YYYY-MM-DD` |
| `starts_at`, `ends_at` | A timed appointment or event. | `YYYY-MM-DDTHH:mm:ss` |

- **End:** optional; never before the start.
- **Input:** use the native date or date-and-time picker.
- **Time:** local time as recorded; explain the location or time zone when relevant.
- Calendar synchronization and reminders are not configured.

> [!example]- Two fictional records
> - A trip index can use `start_date: 2030-05-10` and `end_date: 2030-05-12`.
> - An appointment note can use `starts_at: 2030-05-10T09:30:00` and `ends_at: 2030-05-10T10:00:00`.
> - Keep its purpose and arrangements in the note.
> - The Planner event list links this original record.

> [!tip]- Choosing a collection
> - The NOTE picker shows full index paths, including new collections with `type: index`.
> - Escape leaves the file in place and inserts a blank layout.
> - If the destination already has the same filename, nothing is overwritten: rename the new note, then move it using Obsidian.
> - Helpers updates its Collection link.
> - Use a layout once per note to avoid duplicate sections.

> [!example]- Outcome deadline or action deadline?
> - YAML `due` and `priority` describe the overall note.
> - Individual actions use **Tasks: Create or edit**.
> - These values do not synchronize.
> - A fictional action can be written as `- [ ] Confirm the arrangements ⏫ 📅 2030-05-01`.
> - Keep workflow status on Kanban and avoid duplicating the same deadline at both levels.

> [!tip]- Adapt NOTE
> - For a study, record the question, findings, evidence, and uncertainty.
> - For a project, record its outcome, scope, and decisions.
> - For a reference, explain its use and limits.
> - Keep the original and add meaningful links where it is applied.

> [!info]- Sources and automatic values
> Source layouts contain Templater commands; generated notes must not. `created` comes from the destination file's creation time; the journal period comes from its filename. Invalid journal periods ask for a valid date or ISO week. Escape and occupied destinations preserve the file without inserting the layout. Date values stay distinct from action deadlines.
>
> Sources: [Properties](https://obsidian.md/help/properties), [Templater file](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html), [Templater picker](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/system-module.html), [Tasks dates](https://github.com/obsidian-tasks-group/obsidian-tasks/blob/8.4.0/docs/Getting%20Started/Dates.md).

[Parent: System](../SYSTEM.md)
