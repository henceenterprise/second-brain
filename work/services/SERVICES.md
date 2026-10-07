---
type: index
---

# Services

Keep ongoing or repeatable service-delivery context: purpose, operating notes, agreements, recurring responsibilities, and useful procedures.

## Organize an actual service

- Start with one note explaining whom the service supports, what it delivers, its boundaries, and the material needed to run it.
- Add a folder only if it needs several related notes or files.

> [!example]- Example
> A recurring support service can link a checklist in References, specific arrangements here, and actions on Kanban.

Keep a one-time improvement with a clear end in Projects. Keep knowledge reused across services in Resources.

Expand a service into subcollections when its actual material benefits from them.

[Parent: Work](../WORK.md)

## Item placeholder

- The [service placeholder](%5BSERVICE%5D/SERVICE.md) demonstrates a folder for one service.
- Rename it for your own item, or duplicate it when another item needs its own collection.

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
