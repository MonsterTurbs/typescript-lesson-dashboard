# 147. A First Class Decorator 🏗️

## Section 12: Experimental Decorators

Start tayo sa basic class decorator (legacy syntax).

```ts
function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

@Logger
class Person {
  name = "Max";
  constructor() {
    console.log("Creating person object...");
  }
}
```

## Important behavior

Decorator runs when class is **defined**, not only when instantiated.

## Para sa non-developer 👇

Parang startup hook ng class definition:
- once na-load ang class setup
- tumatakbo ang decorator logic

## Recap 🎯

- Class decorator = function + `@` usage
- gets constructor as argument in legacy mode
