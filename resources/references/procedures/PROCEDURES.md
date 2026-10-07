---
type: index
---

# Procedures

- Use NOTE for a repeatable process.
- State the purpose, prerequisites, steps, expected result, and how to check it.
- Link sources and explain relevant limits.

> [!example]- Example
> A preparation procedure can list the required materials, ordered steps, and final checks.

[Parent: References](../REFERENCES.md)

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
