# Security and privacy

- The template is local and intended for human use.
- No AI service, external API credentials, sync service, or telemetry service is configured by the template or Helpers.
- Bundled community plugins retain their own behavior and permissions.

## Reporting

- After the repository is public and private vulnerability reporting is enabled, use **Security → Report a vulnerability** on [the repository](https://github.com/henceenterprise/second-brain/security).
- If private reporting is unavailable, do not publish vulnerability details in Issues.
- Do not submit secrets or exploit details in public Issues.

- For ordinary bugs, questions, and suggestions, use [Issues](https://github.com/henceenterprise/second-brain/issues).
- Share a minimal fictional example, the Obsidian/plugin versions, and reproducible steps.
- Remove personal content from screenshots and logs.

## Plugins and compatibility

- Seven third-party plugins are bundled: Calendar, Iconize, Kanban, Tasks, Templater, Excalidraw, and Style Settings. **Second Brain Helpers** is separate MIT template code; it automates collection links, folder icons, and recoverable deletion of exclusive task notes.
- Community code is not an Obsidian security sandbox.

- Templater processes JavaScript inside the four layouts.
- This template has no configured system commands, user-script folder, or startup scripts.
- Enabling new-file processing requires local authorization; review the layouts and plugin before granting it.

- Helpers checks required Iconize, Kanban, and Templater interfaces without demanding exact versions.
- Missing interfaces pause the affected integration with a notice; plugins remain available for normal updates.
- Read [update guidance](UPDATING.md) before changing integrated plugins.

- Windows desktop is the tested platform. macOS/Linux are unvalidated; mobile is outside Helpers v1 support.
- Tests do not constitute a complete security audit of all third-party code.

## Personal data and recovery

- Use a private extracted copy.
- Back up the whole vault before upgrades; test restoring a copy.
- Git ignore rules do not remove already committed data or protect a public repository's history.

- Task deletion preserves shared or ambiguous notes.
- Undo lasts only for the current session; after restart, recover the note from the trash and recreate its card.
- Never rely on trash as a backup.

Maintenance is provided as availability permits, without guaranteed response or repair times.

[Maintenance index](MAINTENANCE.md) · [GitHub private reporting documentation](https://docs.github.com/en/code-security/how-tos/report-and-fix-vulnerabilities/configure-vulnerability-reporting/configure-for-a-repository)
