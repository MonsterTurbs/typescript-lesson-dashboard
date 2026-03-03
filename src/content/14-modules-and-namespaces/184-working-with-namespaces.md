# 184. Working with Namespaces 🧩

## Section 14: Modules & Namespaces

Namespace is a TypeScript-only grouping feature.

```ts
namespace App {
  export interface Draggable {
    dragStartHandler(event: DragEvent): void;
    dragEndHandler(event: DragEvent): void;
  }
}
```

And reference style:

```ts
/// <reference path="drag-drop-interfaces.ts" />
```

## Important

- use `export` inside namespace for cross-file usage
- same namespace name can span multiple files

## Para sa non-developer 👇

Parang iisang labeled box (`App`) na puwedeng lagyan ng parts galing sa iba’t ibang files.

## Recap ✅

- Namespaces can organize TS code, but need careful setup
