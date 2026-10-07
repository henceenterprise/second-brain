---
type: index
---

# Drawings

Keep general sketches, diagrams, and visual explanations here. Excalidraw creates new drawings in this folder.

- Create a drawing through Excalidraw's command palette, then give it a name that explains its purpose.
- Add links to the notes it explains.
- Keep one drawing and link it where needed.

The Planner's WHITE BOARD remains in Planner because it supports that area's planning. Drawings specific to another record or project can stay beside that information.

> [!example]- A reusable diagram
> Sketch how a process works and link the reference note that explains its steps. The drawing presents the relationships; the note keeps the instructions and sources.

> [!info]- Opening a drawing
> - Use Excalidraw view to edit a drawing.
> - If Obsidian shows its Markdown data, use the document's More options menu to switch to Excalidraw view.
> - Avoid editing compressed drawing data manually.
>
> Source: [Excalidraw documentation](https://github.com/zsviczian/obsidian-excalidraw-plugin/blob/2.28.1/README.md).

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
