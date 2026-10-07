---
type: index
---

# Weekly notes

Create a weekly review when it helps choose what to do next. A review every week is optional.

## Review a chosen week

1. Click a week number in Calendar to create or open its weekly review.
2. Calendar applies the weekly layout; the heading and `week` property use the selected ISO week.
3. Link relevant daily notes, projects, and tasks.
4. Record useful results, open questions, and next actions.

At a year boundary, the ISO week-year can differ from the calendar year. The template does not assume you are reviewing the current week.

> [!example]- ISO week filenames
> - January 1, 2021 belongs to `2020-W53`.
> - December 30, 2024 belongs to `2025-W01`.
> - Calendar uses `GGGG-[W]WW` to choose the correct ISO week-year.

[Parent: Journal](../JOURNAL.md)

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
