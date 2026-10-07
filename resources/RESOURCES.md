---
type: index
---

# Resources

Keep studies and reusable knowledge about any subject.

Languages, crafts, academic topics, practical skills, and professional learning all fit here.

## Collections

| Collection | Use |
| --- | --- |
| [Studies](studies/STUDIES.md) | Learning, research questions, course notes, and developing understanding. |
| [References](references/REFERENCES.md) | Reusable concepts, explanations, checklists, and procedures. |
| [Bookmarks](bookmarks/BOOKMARKS.md) | Pointers to outside material with a reason to keep them. |
| [Drawings](drawings/DRAWINGS.md) | General sketches, diagrams, and visual explanations. |

## Study and reuse

Explore a question in a study note. Keep a stable, reusable explanation as a reference, linked to the evidence that supports it.

- A bookmark points to outside material.
- Your study or reference explains what you learned.
- Keep one primary explanation and link it wherever you apply it.

> [!example]- Example
> A study of learning methods belongs here. Your own course schedule belongs in Personal or Work, and the next study session is an action in Planner.

Add subject folders when a real collection needs them. The starter assumes no technical specialty or profession.

[Parent: Vault overview](../README.md)

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
