# 173. Adding Inheritance & Generics 🧬

## Section 13: Practice Time! Let's build a Drag & Drop Project

Refactor shared rendering logic into abstract generic `Component` base class.

```ts
abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  // shared template/host/element setup
}
```

Then:
- `ProjectInput` extends `Component<HTMLDivElement, HTMLFormElement>`
- `ProjectList` extends `Component<HTMLDivElement, HTMLElement>`

## Para sa non-developer 👇

Parang gumawa ka ng reusable base machine frame, then specialized models on top.

## Recap 🎯

- Inheritance + generics reduce duplication and improve architecture clarity
