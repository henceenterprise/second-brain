---
type: index
cssclasses:
  - second-brain-index
  - second-brain-planner
---

# Journal

[Parent: Planner](../PLANNER.md)

Dated observations and reviews, linked to their original context.

## Use

- Use Calendar for a daily entry or click a week number for a weekly review.
- Daily filenames use `YYYY-MM-DD`; weekly filenames use ISO `GGGG-[W]WW`.
- Keep lasting explanations in their own collections; link them from the timeline.

## Collections

- [Daily notes](daily/DAILY.md)
- [Weekly notes](weekly/WEEKLY.md)

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
