---
type: index
---

# Year placeholder

This is an example year folder containing guidance only. It has no invoices or real dates.

## Make it your own

Rename the folder and its index note to the four-digit year you need. Use Obsidian so that configured note-link updates can run.

Create month folders only for months with records. The [month placeholder](%5BMM%5D/MM.md) demonstrates the next level.

The automatic view uses the location of its own index instead of a fixed path. Its filter therefore follows the index when moved or renamed.

[Parent: Invoices](../INVOICES.md)

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
