# 157. Validation with Decorators - First Steps ✅

## Section 12: Experimental Decorators

Goal: attach validation rules via property decorators, then validate object later.

## Concept flow

1. `@Required` / `@PositiveNumber` register metadata  
2. `validate(obj)` reads metadata registry  
3. validation result controls submission flow

```ts
class Course {
  @Required
  title: string;

  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}
```

## Para sa non-developer 👇

Parang nilalagyan mo ng rule tags ang fields,  
tapos may checker function na rerepaso lahat ng tags.

## Recap 🚀

- Decorators can build declarative validation systems
