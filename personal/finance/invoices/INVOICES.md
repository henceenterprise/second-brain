---
type: index
---

# Invoices

Keep purchase invoices, receipts, and the context needed to find or understand them. The starter includes `[YYYY]/[MM]/` as a generic example of filing by year and month.

## Use the placeholders

1. Rename `[YYYY]/` and its index note to the four-digit year you need, using Obsidian.
2. Rename `[MM]/` and its index note to a two-digit month, such as `01`.
3. Create additional year or month folders only when they have records to hold.
4. Save the invoice in the relevant month and link it from the purchase, budget, or project note.

If you have few invoices, keeping them directly here can be simpler. The date folders demonstrate a pattern, not a compulsory hierarchy.

**Illustrative filename:** `YYYY-MM-DD-short-description.pdf`. Use the original document date when known and preserve the original document when needed.

The automatic view includes attachments. Listing a receipt helps find it; a link from a note explains what the receipt belongs to.

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
