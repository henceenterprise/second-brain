---
type: index
---

# Interests

Keep notes about your own experience of hobbies and subjects you follow: practice observations, reading reflections, or ideas you want to revisit.

## Experience or reusable knowledge?

- Your reflection belongs here.
- An explanation useful across situations belongs in Resources.
- Link the two when it helps.

Start with one note per interest or topic. Add a topic folder only when several notes or files are easier to browse together.

> [!example]- Example
> A language-practice note can record your current focus and experience. General vocabulary or learning methods can be kept as reusable references.

Use the note template if structure helps. A dated practice log can go in the JOURNAL and link to the interest.

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
