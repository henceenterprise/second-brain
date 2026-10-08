---
type: index
cssclasses:
  - second-brain-index
  - second-brain-resources
---

# References

[Parent: Resources](../RESOURCES.md)

Knowledge you can apply in more than one situation.

## Use

Explain when it applies, how to use it, its source and limits. Keep situation-specific records in their own collections.

## Collections

| Collection | Keep here |
| --- | --- |
| [Concepts](concepts/CONCEPTS.md) | Definitions and explanations. |
| [Procedures](procedures/PROCEDURES.md) | Repeatable steps toward a result. |
| [Checklists](checklists/CHECKLISTS.md) | Concrete checks that prevent omissions. |

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
