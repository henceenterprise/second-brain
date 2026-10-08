---
type: index
cssclasses:
  - second-brain-index
  - second-brain-personal
---

# Documents

[Parent: Personal](../PERSONAL.md)

Official personal documents and the context needed to use them.

## Use

Store one original beside its explanatory NOTE.

## Collections

| Collection | Keep here |
| --- | --- |
| [Identification](identification/IDENTIFICATION.md) | Identity and eligibility. |
| [Certificates](certificates/CERTIFICATES.md) | Qualifications and registrations. |

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
