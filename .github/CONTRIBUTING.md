# Contributing

Improve the reusable human-first vault without adding personal information, new services, or unrelated functionality.

## Reports and questions

- Use [Issues](https://github.com/henceenterprise/second-brain/issues).
- Describe the expected and observed behavior, reproducible steps, Obsidian version, and bundled plugin versions.
- Use fictional records.
- For security concerns, follow [private reporting guidance](SECURITY.md).

Maintenance depends on availability; responses and fixes have no guaranteed deadline.

## Changes

- Target `Design` for development. `Main` contains accepted versions; release tags identify distributed snapshots.

- Preserve the documented workflows, six areas, four layouts, and manual choices unless a proposal has been agreed.
- Keep GitHub documents in standard Markdown and vault examples fictional.
- Distinguish the six third-party plugins from the original Helpers code.
- Update plugin code, manifests, licenses, source provenance, and compatibility evidence together. Never patch community plugin bundles to integrate Helpers.
- Retest Helpers adapters and capability checks in isolation when upstream interfaces change; avoid exact-version locks.
- Explain personal-vault upgrade steps and preserve user settings/data.
- Verify links, JSON/YAML, native metadata, and rendered interaction. Structural checks do not prove the interface works.

Do not include private notes, real attachments, credentials, device paths, or full personal logs in Issues or pull requests.

[Maintenance index](README.md) · [Updating](UPDATING.md)
