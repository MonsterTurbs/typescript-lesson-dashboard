# 176. Utilizing Interfaces to Implement Drag & Drop 🧲

## Section 13: Practice Time! Let's build a Drag & Drop Project

Define contracts for draggable and drag target components.

```ts
interface Draggable {
  dragStartHandler(event: DragEvent): void;
  dragEndHandler(event: DragEvent): void;
}

interface DragTarget {
  dragOverHandler(event: DragEvent): void;
  dropHandler(event: DragEvent): void;
  dragLeaveHandler(event: DragEvent): void;
}
```

## Why useful?

Forces consistent drag-drop API across related classes.

## Para sa non-developer 👇

Parang may standard checklist bawat draggable item at drop zone.

## Recap ✅

- Interfaces keep drag-drop code organized and predictable
