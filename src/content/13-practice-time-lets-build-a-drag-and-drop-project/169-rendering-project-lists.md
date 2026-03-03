# 169. Rendering Project Lists 📋

## Section 13: Practice Time! Let's build a Drag & Drop Project

Add `ProjectList` class to render Active/Finished sections.

```ts
const activeProjectList = new ProjectList("active");
const finishedProjectList = new ProjectList("finished");
```

## Goal here

- render list templates
- listen for project state changes
- append project items

## Para sa non-developer 👇

Parang dalawang columns sa board: isa for ongoing, isa for done.

## Recap 🎯

- UI lists become reactive by listening to shared state updates
