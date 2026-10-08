<%*
const target = "planner/tasks/" + tp.config.target_file.name;
const existing = app.vault.getAbstractFileByPath(target);
if (existing && existing !== tp.config.target_file) {
  new tp.obsidian.Notice("A task with this name already exists. This file has not moved; rename it before filing.");
} else if (target !== tp.config.target_file.path) {
  await tp.file.move(target.replace(/\.md$/, ""), tp.config.target_file);
}
%>---
type: task
created: '<% tp.file.creation_date("YYYY-MM-DD") %>'
due:
priority:
aliases: []
tags: []
---

# <% tp.file.title %>

<% "[".repeat(2) + "planner/tasks/TASKS|Collection" + "]".repeat(2) %>

## Outcome

## Actions

## Context and result

> [!tip]- Using this task
> State the outcome. Add real actions as checkboxes; link the project or record they support. Keep decisions, blockers and completion evidence. The card tracks workflow; checkboxes track individual actions.
