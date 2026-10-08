<%*
const file = tp.config.target_file;
const format = "YYYY-MM-DD";
const valid = value => /^\d{4}-\d{2}-\d{2}$/.test(value) && moment(value, format, true).isValid() && moment(value, format, true).format(format) === value;
let period = file.basename;
while (!valid(period)) {
  const choice = await tp.system.prompt("Choose a date (YYYY-MM-DD). Escape keeps this file unchanged.", "", false);
  if (choice === null || choice === undefined) return;
  period = choice.trim();
  if (!valid(period)) new tp.obsidian.Notice("Enter a real date in YYYY-MM-DD format.");
}
const target = "planner/journal/daily/" + period + ".md";
const existing = app.vault.getAbstractFileByPath(target);
if (existing && existing !== file) {
  new tp.obsidian.Notice("An entry for this period already exists. This file was preserved; open the existing entry or choose another period.");
  return;
}
const created = tp.file.creation_date("YYYY-MM-DD");
if (target !== file.path) await tp.file.move(target.replace(/\.md$/, ""), file);
tR += "---\ntype: daily\ndate: " + JSON.stringify(period) + "\ncreated: " + JSON.stringify(created) + "\naliases: []\ntags: []\n---\n\n# " + period + "\n\n" + "[".repeat(2) + "planner/journal/daily/DAILY|Collection" + "]".repeat(2) + "\n\n";
tR += "## Focus\n\n## Observations and learning\n\n## Reflection\n\n> [!tip]- Using this review\n> Record what matters for this day. Link actions and information from their original collections. Remove unused sections.\n";
%>
