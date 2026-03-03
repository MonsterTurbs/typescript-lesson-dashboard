# 166. Creating & Using an "Autobind" Decorator 🪄

## Section 13: Practice Time! Let's build a Drag & Drop Project

Replace manual `.bind(this)` with reusable decorator.

```ts
@Autobind
private submitHandler(event: Event) {
  event.preventDefault();
}
```

## Benefit

- less repetitive binding code
- cleaner method wiring

## Para sa non-developer 👇

Parang auto-connect feature: once tagged, laging tama ang method context.

## Recap ✅

- Autobind decorator improves readability for callback-heavy classes
