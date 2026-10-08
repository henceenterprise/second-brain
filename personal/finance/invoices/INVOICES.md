---
type: index
cssclasses:
  - second-brain-index
  - second-brain-personal
---

# Invoices

[Parent: Finance](../FINANCE.md)

Purchase invoices and receipts, with the context needed to find them.

## Use

- Keep a small collection here, or organize it by year and month.
- In Obsidian, rename `[YYYY]` and its index to a four-digit year; rename `[MM]` and its index to a two-digit month.
- Create additional date folders only when they have records to hold.
- Link each original from the purchase, budget or project that explains it.

> [!example]- Example
> Filename pattern: `YYYY-MM-DD-short-description.pdf`. Use the known document date; do not invent a date.

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
