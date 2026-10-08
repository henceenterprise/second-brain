---
type: index
cssclasses:
  - second-brain-index
  - second-brain-resources
---

# Bookmarks

[Parent: Resources](../RESOURCES.md)

Pointers to outside material, with a reason to keep them.

## Use

- Use NOTE to record the title, original URL or publication, and creator when known.
- State why it is useful; include a page or section for a specific detail.
- Keep analysis in Studies and reusable explanations in References.
- Check outside links before relying on them. Sidebar favorites use the separate core Bookmarks tool.

> [!example]- Example
> **Title · Source · Why keep it · Where it is used.** Replace each prompt with real information.

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
