# 141. Implementing A Decorator-based Solution: autobind 🪄

## Section 11: ECMAScript Decorators

Gawin nating reusable ang binding fix via decorator.

## Example implementation

```ts
function autobind(target: Function, ctx: ClassMethodDecoratorContext) {
  ctx.addInitializer(function (this: any) {
    this[ctx.name] = this[ctx.name].bind(this);
  });
}

class Person {
  name = "Max";

  @autobind
  greet() {
    console.log(`Hi, I am ${this.name}`);
  }
}
```

## Why `addInitializer`?

It lets you run setup logic at the right class-instance initialization moment.

## Para sa non-developer 👇

Parang automatic setup hook:
- kada gawa ng bagong object
- auto-bind na agad ang target method
- less manual boilerplate

## Interactive warm-up 🎯

1. Ano role ng `ctx.addInitializer(...)` sa autobind use case?  
2. Bakit mahalaga ang normal `function` dito vs arrow sa certain `this` contexts?  
3. Ano gain ng decorator approach over manual per-constructor bind?

Tamang sagot:
- inject initialization-time binding logic
- para tamang `this` semantics sa setup function
- reusable and cleaner architecture

## Recap ✅

- Autobind decorator is a strong practical pattern
- It centralizes context-binding concerns in one reusable unit
