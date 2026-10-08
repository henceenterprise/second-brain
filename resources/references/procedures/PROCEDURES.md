---
type: index
cssclasses:
  - second-brain-index
  - second-brain-resources
---

# Procedures

[Parent: References](../REFERENCES.md)

Repeatable processes with a clear result.

## Use

- Create a NOTE stating purpose and prerequisites.
- List ordered steps, expected results and how to check them.
- Link sources and explain limits; keep situation-specific records with their context.

> [!example]- Example
> A preparation procedure names the materials, steps and final check.

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
