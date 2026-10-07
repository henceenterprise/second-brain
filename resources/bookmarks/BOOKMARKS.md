---
type: index
---

# Bookmarks

Keep pointers to outside material with context: pages, articles, books, courses, videos, or documents.

## Save a useful pointer

- Record its title, URL or publication location, creator when known, and one sentence explaining why it is useful.
- Include a page or section if you need a particular detail.

**Illustrative format:**

~~~text
Title: A resource about a subject you are studying
Source: Add the original URL or publication details
Why keep it: Explain what it helps you understand or do
Related note: Link the study, reference, or project that uses it
~~~

A bookmark is a pointer. Put analysis in Studies and reusable explanations in References. Check outside links before relying on them, because content can change.

For Obsidian sidebar favorites, use the separate core Bookmarks feature. This collection holds bookmark notes explaining their purpose.

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
