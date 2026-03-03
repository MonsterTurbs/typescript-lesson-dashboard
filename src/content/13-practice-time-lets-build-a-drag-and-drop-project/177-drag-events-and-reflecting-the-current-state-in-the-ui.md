# 177. Drag Events & Reflecting the Current State in the UI 🎨

## Section 13: Practice Time! Let's build a Drag & Drop Project

Handle `dragover` and `dragleave` to show visual droppable feedback.

```ts
listEl.classList.add("droppable");
listEl.classList.remove("droppable");
```

## Plus important event rule

Need `event.preventDefault()` in `dragover` para ma-allow ang drop.

## Para sa non-developer 👇

Parang highlight effect kapag valid ang drop zone, then remove highlight kapag umalis.

## Recap 🎯

- UI feedback makes drag-drop interaction clear for users
