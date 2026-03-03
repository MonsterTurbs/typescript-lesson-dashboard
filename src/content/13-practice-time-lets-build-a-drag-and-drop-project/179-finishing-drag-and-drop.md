# 179. Finishing Drag & Drop 🏁

## Section 13: Practice Time! Let's build a Drag & Drop Project

Finalize by moving project status in state on drop.

```ts
projectState.moveProject(
  prjId,
  this.type === "active" ? ProjectStatus.Active : ProjectStatus.Finished
);
```

## Optimization

Skip re-render/update if status didn’t actually change.

## Para sa non-developer 👇

Parang move card operation na tunay na ina-update ang backend state, hindi UI illusion lang.

## Recap 🚀

- Drag-drop now updates both UI and state correctly
