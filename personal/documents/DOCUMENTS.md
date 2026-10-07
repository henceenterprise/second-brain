---
type: index
---

# Documents

Keep official personal documents and the context needed to use them. Store one original file beside its explanatory note.

## Collections

- [Identification](identification/IDENTIFICATION.md) — Identity and eligibility documents.
- [Certificates](certificates/CERTIFICATES.md) — Qualifications, registrations, and other certificates.

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
