---
type: index
---

# Journal

Use dated notes for observations, events, reflections, and review. They form a timeline linked to the relevant projects, records, and actions.

## Choose a period

- [Daily notes](daily/DAILY.md) use `YYYY-MM-DD.md` and are configured in Obsidian.
- [Weekly notes](weekly/WEEKLY.md) use `GGGG-[W]WW` (for example, `2026-W41.md`), with the ISO week-year and two-digit ISO week number.

Create daily notes with Daily notes or Calendar. Click a week number in Calendar to create or open its weekly review.

Keep lasting explanations in their own collections. A dated log can link the explanation rather than becoming its only home.

> [!example]- Example
> A daily note records a discussion and links the resulting decision in a project. A weekly note reviews the related actions.

[Parent: Planner](../PLANNER.md)

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
