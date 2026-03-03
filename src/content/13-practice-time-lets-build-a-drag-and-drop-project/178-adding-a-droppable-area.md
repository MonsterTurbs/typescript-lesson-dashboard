# 178. Adding a Droppable Area 📥

## Section 13: Practice Time! Let's build a Drag & Drop Project

Attach transferable data on drag start, then read it on drop.

```ts
event.dataTransfer!.setData("text/plain", this.project.id);
const prjId = event.dataTransfer!.getData("text/plain");
```

## Why this matters

Without transferred ID, hindi malalaman ng app kung anong project ang dini-drag.

## Para sa non-developer 👇

Parang may parcel label (project ID) ang card habang nililipat mo.

## Recap ✅

- DataTransfer bridges draggable item identity to drop target logic
