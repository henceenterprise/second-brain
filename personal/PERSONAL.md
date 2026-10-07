---
type: index
---

# Personal

- Keep records about your life here.
- Store explanations reusable in other situations in Resources.
- Keep one original and link it when needed.

## Collections

- [Finance](finance/FINANCE.md) — Budgets, invoices, and financial records.
- [Health](health/HEALTH.md) — Appointments and health records.
- [Home](home/HOME.md) — Inventory and maintenance.
- [Travel](travel/TRAVEL.md) — Plans and records for individual trips.
- [Documents](documents/DOCUMENTS.md) — Identification and certificates.
- [Interests](interests/INTERESTS.md) — Hobbies and subjects you follow.
- [People](people/PEOPLE.md) — Relationship context and commitments.
- [Memories](memories/MEMORIES.md) — Events and recollections worth keeping.

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
