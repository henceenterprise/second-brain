---
type: index
---

# Memories

Keep recollections, events, and milestones you want to revisit. A memory can be a short note, a story, or a note linking to media kept locally or elsewhere.

## Add context

- Choose a recognizable title.
- Record what happened, why it matters, and its date when known.
- Link other notes when those connections help explain the memory.

- Keep an attachment beside its memory note when it belongs only there.
- For shared media, retain one copy beside the note explaining it and link that file from the other notes.

> [!example]- Example
> `weekend-gathering.md` might contain a short recollection and links to photographs. It needs no predefined divisions for animals, people, or places.

Use the JOURNAL for day-by-day logging and this collection for memories you deliberately want to preserve and retrieve.

[Parent: Personal](../PERSONAL.md)

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
