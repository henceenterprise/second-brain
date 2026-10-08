---
type: index
cssclasses:
  - second-brain-index
  - second-brain-resources
---

# Studies

[Parent: Resources](../RESOURCES.md)

Learning and investigation, starting with a question.

## Use

- Create a NOTE stating the question or learning goal.
- Keep source titles, links and relevant sections.
- Record findings in your own words; distinguish source claims from your interpretation.
- Keep uncertainties visible. Stable reusable conclusions can become References.

## Collections

- [Subject placeholder](%5BSUBJECT%5D/SUBJECT.md)

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
