---
type: index
---

# References

- Keep knowledge you can use again.
- Each reference explains when it applies, how to use it, its source, and its limits.
- Keep situation-specific records in their own collections.

## Collections

- [Concepts](concepts/CONCEPTS.md) — Explanations, principles, and definitions.
- [Procedures](procedures/PROCEDURES.md) — Repeatable steps for a result.
- [Checklists](checklists/CHECKLISTS.md) — Checks that prevent omissions.

[Parent: Resources](../RESOURCES.md)

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
