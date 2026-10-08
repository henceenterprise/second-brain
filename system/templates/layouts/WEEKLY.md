<%*
const file = tp.config.target_file;
const format = "GGGG-[W]WW";
const valid = value => /^\d{4}-W\d{2}$/.test(value) && moment(value, format, true).isValid() && moment(value, format, true).format(format) === value;
let period = file.basename;
while (!valid(period)) {
  const choice = await tp.system.prompt("Choose a week (GGGG-[W]WW). Escape keeps this file unchanged.", "", false);
  if (choice === null || choice === undefined) return;
  period = choice.trim();
  if (!valid(period)) new tp.obsidian.Notice("Enter a real ISO week in GGGG-[W]WW format.");
}
const target = "planner/journal/weekly/" + period + ".md";
const existing = app.vault.getAbstractFileByPath(target);
if (existing && existing !== file) {
  new tp.obsidian.Notice("An entry for this period already exists. This file was preserved; open the existing entry or choose another period.");
  return;
}
const created = tp.file.creation_date("YYYY-MM-DD");
if (target !== file.path) await tp.file.move(target.replace(/\.md$/, ""), file);
tR += "---\ntype: weekly\nweek: " + JSON.stringify(period) + "\ncreated: " + JSON.stringify(created) + "\naliases: []\ntags: []\n---\n\n# " + period + "\n\n" + "[".repeat(2) + "planner/journal/weekly/WEEKLY|Collection" + "]".repeat(2) + "\n\n";
tR += "## Results and learning\n\n## Open loops\n\n## Next week\n\n> [!tip]- Using this review\n> Review results and unresolved commitments for this week. Link original records and choose useful next actions. Remove unused sections.\n";
%>
