---
type: index
---

# Daily notes

Daily notes are configured here with `YYYY-MM-DD.md` filenames and the daily template.

## Create or open a day

Use **Daily notes: Open today's daily note**, or select a day in Calendar. Open an existing dated note instead of making a duplicate.

Record a useful focus, events, observations, and links. Replace prompts with your own text and remove sections that serve no purpose that day.

Link tasks or projects instead of copying their full contents. Put lasting explanations in their own collections.

> [!example]- Example
> A brief entry can record that you reviewed an option and link the project note containing the decision.

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
