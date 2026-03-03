# 170. Managing Application State with Singletons 🧭

## Section 13: Practice Time! Let's build a Drag & Drop Project

Create `ProjectState` singleton para central source of truth ng projects.

```ts
class ProjectState {
  private static instance: ProjectState;
  private constructor() {}
  static getInstance() { ... }
}
```

## Plus listener pattern

State notifies registered listeners whenever project list changes.

## Para sa non-developer 👇

Parang iisang central dashboard na nagbibigay update sa lahat ng interested UI parts.

## Recap ✅

- Singleton + listeners = clean state propagation pattern
