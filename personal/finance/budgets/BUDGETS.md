---
type: index
---

# Budgets

Keep plans for income, spending, or a particular activity. A budget can cover a month, an event, a project, or another period that fits your situation.

## Create a budget

- Record its purpose, period, and currency when needed.
- A simple table can use **Category**, **Planned**, **Actual**, and **Notes**.
- Link source documents rather than copying full statements into the note.

A spreadsheet can live beside the budget note if you prefer a separate application for calculations. The note should explain what the file contains.

> [!example]- Example
> `event-budget.md` might group venue, food, and transport estimates. Replace those categories with ones relevant to your own activity.

Review the plan when useful. Put follow-up actions on Kanban, and preserve the distinction between a plan and a confirmed record.

[Parent: Finance](../FINANCE.md)

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
