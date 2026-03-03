# 156. Example: Creating an "Autobind" Decorator 🪄

## Section 12: Experimental Decorators

Classic use case: preserve `this` when passing method as callback.

```ts
function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}
```

## Why effective?

Method reference stays correctly bound kahit i-pass sa event listeners/callbacks.

## Para sa non-developer 👇

Parang auto-attach ng tamang owner info sa function bago gamitin.

## Recap ✅

- `Autobind` is a practical real-world decorator pattern
