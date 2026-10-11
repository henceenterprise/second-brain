---
type: index
cssclasses:
  - second-brain-index
  - second-brain-system
---

# Assets

Images used by the vault guide. Light and dark variants follow your chosen mode.

[[SYSTEM|Parent: SYSTEM]]

| Image | Light | Dark |
| --- | --- | --- |
| Banner | [PNG](second-brain-cover.png) | [PNG](second-brain-cover-dark.png) |
| Area map | [PNG](second-brain-map.png) | [PNG](second-brain-map-dark.png) |

[Vault overview](second-brain-overview.png).

Editable artwork and original brand inputs stay in repository maintenance, outside the personal note tree.

The current banners (1600 × 464) and both area maps (1600 × 486) were designed by David in Figma and exported as transparent PNGs. Superseded banner and map SVGs were removed; their history remains in Git.

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
