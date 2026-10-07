---
type: index
---

# Finance

Organize your financial plans and documents here. The collection provides a way to find records; it does not prescribe products, investments, or financial decisions.

## Collections

| Collection | Use |
| --- | --- |
| [Budgets](budgets/BUDGETS.md) | Plans and comparisons between expected and recorded amounts. |
| [Invoices](invoices/INVOICES.md) | Purchase receipts, invoices, and their supporting notes. |

## Record and retrieve

- Keep original documents when you need evidence.
- Add a note explaining the document's purpose, known date, and related activity.
- Distinguish estimates from confirmed amounts and state currency when relevant.

> [!example]- Example
> A household purchase can have its invoice here, an equipment note in [Personal](../PERSONAL.md), and a follow-up action on Kanban.

- Link documents from the note that uses them rather than keeping several copies.
- Keep access credentials in a suitable secure manager, and treat your populated financial records as private.

[Parent: Personal](../PERSONAL.md)

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
