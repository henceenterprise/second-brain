---
type: index
cssclasses:
  - second-brain-index
  - second-brain-personal
---

# Certificates

[Parent: Documents](../DOCUMENTS.md)

Qualifications, registrations and certificates you need to keep.

## Use

- Create a NOTE for each certificate: subject, issuer and issue date.
- Record validity or renewal dates when relevant.
- Attach one original and link it where it is needed.

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
