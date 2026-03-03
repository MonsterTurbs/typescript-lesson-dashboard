# 174. Rendering Project Items with a Class 🧩

## Section 13: Practice Time! Let's build a Drag & Drop Project

Create dedicated `ProjectItem` class for each list item render.

```ts
new ProjectItem(this.element.querySelector("ul")!.id, prjItem);
```

## Why this refactor?

- cleaner separation of concerns
- each UI unit has its own rendering logic

## Para sa non-developer 👇

Parang bawat task card may sariling mini renderer, hindi lahat pinipilit sa list class.

## Recap ✅

- Class-per-item improves maintainability for growing UI complexity
