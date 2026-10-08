# Third-party notices

The following Obsidian community plugins are distributed in `.obsidian/plugins/`. Their compiled plugin files are separate works and are not relicensed by the [template MIT license](../LICENSE.md). Each plugin directory includes the corresponding upstream license text.

| Plugin | Version | License | Upstream source and release |
| --- | --- | --- | --- |
| Calendar | 1.5.10 | MIT | [Source](https://github.com/liamcain/obsidian-calendar-plugin/tree/1.5.10) · [Release](https://github.com/liamcain/obsidian-calendar-plugin/releases/tag/1.5.10) · `.obsidian/plugins/calendar/LICENSE` |
| Iconize (plugin ID `obsidian-icon-folder`) | 2.14.7 | MIT | [Source](https://github.com/FlorianWoelki/obsidian-iconize/tree/2.14.7) · [Release](https://github.com/FlorianWoelki/obsidian-iconize/releases/tag/2.14.7) · `.obsidian/plugins/obsidian-icon-folder/LICENSE` |
| Kanban | 2.0.51 | GPL-3.0 | [Source](https://github.com/community-archive/obsidian-kanban/tree/2.0.51) · [Release](https://github.com/community-archive/obsidian-kanban/releases/tag/2.0.51) · [License](https://github.com/community-archive/obsidian-kanban/blob/2.0.51/LICENSE.md) |
| Tasks | 8.4.0 | MIT | [Source](https://github.com/obsidian-tasks-group/obsidian-tasks/tree/8.4.0) · [Release](https://github.com/obsidian-tasks-group/obsidian-tasks/releases/tag/8.4.0) · `.obsidian/plugins/obsidian-tasks-plugin/LICENSE` |
| Templater | 2.25.1 | AGPL-3.0 | [Source](https://github.com/SilentVoid13/Templater/tree/2.25.1) · [Release](https://github.com/SilentVoid13/Templater/releases/tag/2.25.1) · `.obsidian/plugins/templater-obsidian/LICENSE.TXT` |
| Excalidraw | 2.28.1 | AGPL-3.0 | [Source](https://github.com/zsviczian/obsidian-excalidraw-plugin/tree/2.28.1) · [Release](https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.28.1) · [Included license](../.obsidian/plugins/obsidian-excalidraw-plugin/LICENSE) |
| Style Settings | 1.0.9 | GPL-3.0 | [Source](https://github.com/community-archive/obsidian-style-settings/tree/1.0.9) · [Release](https://github.com/community-archive/obsidian-style-settings/releases/tag/1.0.9) · [Included license](../.obsidian/plugins/obsidian-style-settings/LICENSE.md) |

## Corresponding source distribution

The v1.0.1 preparation pairs the vault with **Second-Brain-v1.0.1-sources.zip** next to the vault ZIP, at no additional charge. It contains the pinned upstream source archives, build/lock files, licenses, provenance, and dependency material described by its source index. This source asset must be available when the binaries are published; the source inventory and build limitations are included in that ZIP.

The six existing plugins match their official release assets. Style Settings matches its release assets except for an appended non-executing nosourcemap comment; the installed code is preserved. The extra non-executing Excalidraw comment was removed by replacing its bundle with the official same-version asset. No plugin behavior or version was patched.

### Source commits

- **calendar 1.5.10:** [`7d2aebda7f4a280bedc6da6d25f4da611d1625ef`](https://github.com/liamcain/obsidian-calendar-plugin/tree/7d2aebda7f4a280bedc6da6d25f4da611d1625ef).
- **obsidian-icon-folder 2.14.7:** [`1264d5800a027356b69f353b009d40b9f7b47a2c`](https://github.com/FlorianWoelki/obsidian-iconize/tree/1264d5800a027356b69f353b009d40b9f7b47a2c).
- **obsidian-kanban 2.0.51:** [`8501981a1afacb4c8fc03ec60604aa5eedfbd857`](https://github.com/community-archive/obsidian-kanban/tree/8501981a1afacb4c8fc03ec60604aa5eedfbd857).
- **obsidian-tasks-plugin 8.4.0:** [`9173205606e49846f456caf438fdc0e5baded77e`](https://github.com/obsidian-tasks-group/obsidian-tasks/tree/9173205606e49846f456caf438fdc0e5baded77e).
- **templater-obsidian 2.25.1:** [`0ffe956a58360aee949df114ded2fd7431447ebb`](https://github.com/SilentVoid13/Templater/tree/0ffe956a58360aee949df114ded2fd7431447ebb).
- **obsidian-excalidraw-plugin 2.28.1:** [`128a9ef47bdc2c4fd342cede26ab7dedd6dcfe13`](https://github.com/zsviczian/obsidian-excalidraw-plugin/tree/128a9ef47bdc2c4fd342cede26ab7dedd6dcfe13).

- **obsidian-style-settings 1.0.9:** [`4ebec6ae0131a9d5e8307bb5e26d59db5ba2e81c`](https://github.com/community-archive/obsidian-style-settings/tree/4ebec6ae0131a9d5e8307bb5e26d59db5ba2e81c).

Each plugin remains under its own license; the aggregate vault is not a relicensing of those packages. Preserve license and source notices when redistributing. Build instructions do not guarantee byte-identical rebuilt output or replace the upstream requirements.


## Template helper code

Second Brain Helpers is original template code, distributed under the template's MIT terms. It is not another third-party package. See its [license](../.obsidian/plugins/second-brain-helpers/LICENSE) and [maintenance guide](../.obsidian/plugins/second-brain-helpers/README.md). The six existing upstream plugin versions and licenses are unchanged; Style Settings 1.0.9 is added.

## Bundled dependency notices

Preserve the [dependency license texts and credits](DEPENDENCY-NOTICES.md) when redistributing the compiled plugins. The source ZIP includes the audited lockfile dependency archives, original source material, upstream license files, and provenance. Obsidian and Node host APIs are supplied by the application, not redistributed as npm runtime packages.

## Style Settings license metadata

The 1.0.9 source tag's `package.json` still reports version 1.0.8 and MIT. Its release manifest reports 1.0.9; the repository's explicit `LICENSE.md` is GPL-3.0. This distribution preserves that GPL text and provides the corresponding source. It does not silently substitute the package metadata's conflicting label.
