---
type: index
cssclasses:
  - second-brain-index
  - second-brain-resources
---

# Drawings

[Parent: Resources](../RESOURCES.md)

Sketches, diagrams and visual explanations for any subject.

## Use

- Create a drawing through Excalidraw; give it a meaningful name.
- Link the notes it explains. Keep one drawing and reuse its links.
- New drawings, existing drawings and previews follow Obsidian's light/dark mode. Exported PNG/SVG files retain their exported colors.
- WHITE BOARD stays in Planner; drawings specific to another record or project can stay beside it.

> [!info]- Opening and appearance
> Use Excalidraw view to edit. If Markdown data appears, use the document's More options menu to switch views. Avoid editing compressed data manually. Change theme-following options in Settings → Excalidraw when a drawing needs its own appearance.
>
> Source: [Excalidraw documentation](https://github.com/zsviczian/obsidian-excalidraw-plugin/blob/2.28.1/README.md).

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
