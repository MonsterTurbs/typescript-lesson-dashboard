# 165. Interacting with DOM Elements 🖱️

## Section 13: Practice Time! Let's build a Drag & Drop Project

Next step: kunin ang form inputs + handle submit.

```ts
this.element.addEventListener("submit", this.submitHandler.bind(this));
```

## Why `bind(this)` (or autobind)?

Para hindi mawala ang tamang class context sa event callback.

## Para sa non-developer 👇

Parang sinigurado mo kung sinong “owner object” ang kausap ng function kapag na-click ang form.

## Recap 🎯

- Event wiring + correct `this` context are essential for form handling
