# 149. Building More Useful Decorators 🧠

## Section 12: Experimental Decorators

Example: render template to a DOM hook via class decorator factory.

```ts
function WithTemplate(template: string, hookId: string) {
  return function (_: Function) {
    const hookEl = document.getElementById(hookId);
    if (hookEl) {
      hookEl.innerHTML = template;
    }
  };
}

@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Max";
}
```

## Why powerful?

Decorators can encapsulate behavior na puwedeng i-reuse across classes.

## Para sa non-developer 👇

Parang class-level plugin:
- attach ka ng decorator
- may automatic UI/setup effect sa likod

## Recap 🚀

- Decorators shine in library/framework-style metaprogramming patterns
