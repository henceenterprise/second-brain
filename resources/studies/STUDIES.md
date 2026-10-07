---
type: index
---

# Studies

- Start with a question.
- Use NOTE to record sources, findings in your own words, and open questions.
- Distinguish source claims from your interpretation.
- Reusable conclusions can become References.

## Collections

- [Subject placeholder](%5BSUBJECT%5D/SUBJECT.md) — Learning and research about one subject.

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
