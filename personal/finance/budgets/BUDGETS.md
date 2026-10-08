---
type: index
cssclasses:
  - second-brain-index
  - second-brain-personal
---

# Budgets

[Parent: Finance](../FINANCE.md)

Plans for income, spending, an activity or a period.

## Use

- Create a NOTE stating purpose, period and currency.
- Compare **Category · Planned · Actual · Notes** in a simple table.
- Link supporting records; distinguish estimates from confirmed amounts.
- A spreadsheet can live beside its explanatory note. Put follow-up actions in Planner.

> [!example]- Example
> A fictional event budget groups venue, food and transport. Replace categories with those you need.

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
