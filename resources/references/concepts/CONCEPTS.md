---
type: index
cssclasses:
  - second-brain-index
  - second-brain-resources
---

# Concepts

[Parent: References](../REFERENCES.md)

Explanations, definitions and principles you can apply again.

## Use

- Create a NOTE and define the concept in plain language.
- Add an example and link the original source.
- State relevant limits or competing interpretations.

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
