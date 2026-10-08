---
type: index
cssclasses:
  - second-brain-index
  - second-brain-planner
---

# Weekly notes

[Parent: Journal](../JOURNAL.md)

A chosen week's results, open loops and next priorities.

## Use

- Click a week number in Calendar to create or open the review.
- Calendar applies WEEKLY; its filename and `week` use the selected ISO period.
- Link relevant daily notes, projects and actions. Record useful results and next steps.
- Reviews are optional; the chosen period need not be the current week.

> [!example]- ISO year boundaries
> January 1, 2021 belongs to `2020-W53`; December 30, 2024 belongs to `2025-W01`. The format `GGGG-[W]WW` uses the ISO week-year, which can differ from the calendar year.

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
