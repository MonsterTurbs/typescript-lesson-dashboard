# 139. Creating a Method Decorator 🎯

## Section 11: ECMAScript Decorators

Next: method-level decorators.

## Example skeleton

```ts
function autobind(
  target: Function,
  ctx: ClassMethodDecoratorContext
) {
  console.log(target);
  console.log(ctx);
}

class Person {
  name = "Max";

  @autobind
  greet() {
    console.log(`Hi, I am ${this.name}`);
  }
}
```

## What you get from context

- method name
- method kind
- static/private info
- helper hooks like initializer-related APIs

## Para sa non-developer 👇

Parang method inspector:
- binibigyan ka ng details tungkol sa method
- para makapagdesisyon ka kung anong extra behavior ang idadagdag

## Interactive warm-up 🎯

1. Saan ina-attach ang method decorator?  
2. Ano usefulness ng `ClassMethodDecoratorContext`?  
3. Puwede bang mag-augment ng method behavior gamit decorator?

Tamang sagot:
- sa class method
- nagbibigay ng metadata/context about decorated method
- oo

## Recap ✅

- Method decorators give fine-grained control per behavior unit
- Context data enables precise runtime customization
