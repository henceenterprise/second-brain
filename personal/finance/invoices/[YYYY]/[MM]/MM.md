---
type: index
---

# Month placeholder

This is an example month folder inside the year placeholder.

## File an invoice

- Rename the folder and index note to a two-digit month, such as `01` or `12`.
- Save invoices or receipt notes here and link them from the purchase, budget, or project note explaining their context.

Use a known invoice date. If a date is uncertain, record that uncertainty rather than inventing one.

The view includes PDFs, images, and other files saved directly here. Formats Obsidian cannot display may need another application.

[Parent: Yyyy](../YYYY.md)

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
