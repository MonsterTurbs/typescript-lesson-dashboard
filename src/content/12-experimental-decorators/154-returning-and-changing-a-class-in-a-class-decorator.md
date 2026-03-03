# 154. Returning (and changing) a Class in a Class Decorator 🔁

## Section 12: Experimental Decorators

Class decorators can return a new constructor/class.

```ts
function WithTemplate(template: string, hookId: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    OriginalConstructor: T
  ) {
    return class extends OriginalConstructor {
      constructor(..._: any[]) {
        super();
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}
```

## Why useful?

You can move runtime instantiation logic into decorator-enhanced constructor.

## Para sa non-developer 👇

Parang pinalitan mo ang default factory line ng upgraded version.

## Recap ✅

- Returning a class lets decorators deeply alter class instantiation behavior
