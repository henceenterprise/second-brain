---
type: index
cssclasses:
  - second-brain-index
  - second-brain-system
---

# Templates

[Parent: System](../SYSTEM.md)

**Create → name → insert.** Run **Templater: Open insert template modal** and choose a layout once per note.

| Layout | Use | Destination |
| --- | --- | --- |
| [NOTE](layouts/NOTE.md) | Information, studies, references and projects. | Choose a collection in the picker. |
| [TASK](layouts/TASK.md) | Outcome, actions and completion evidence. | `planner/tasks` |
| [DAILY](layouts/DAILY.md) | Review one valid day. | `planner/journal/daily` |
| [WEEKLY](layouts/WEEKLY.md) | Review one valid ISO week. | `planner/journal/weekly` |

- **Automatic:** Calendar creates journals; Kanban **New note from card** creates TASK. Authorize Templater locally as explained in the vault README.
- **Manual:** create and name a note, then insert its layout. NOTE asks where to keep it.
- **Journal periods:** an invalid name opens a picker. Escape cancels; an occupied destination is never overwritten.

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
