# 140. Using Decorators To Solve A Common Problem 🧯

## Section 11: ECMAScript Decorators

Classic issue: losing `this` context kapag method reference ang pinasa.

## Problem sample

```ts
class Person {
  constructor(public name: string) {}

  greet() {
    console.log(`Hi, I am ${this.name}`);
  }
}

const max = new Person("Max");
const greet = max.greet;
greet(); // this problem possible
```

## Traditional fix (manual bind)

```ts
constructor(public name: string) {
  this.greet = this.greet.bind(this);
}
```

Works, pero repetitive kapag maraming methods/classes.

## Para sa non-developer 👇

Parang nawalang owner reference sa callback:
- alam mo yung function
- pero hindi niya maalala kaninong data siya dapat naka-bind

Decorator-based autobind can solve this cleanly.

## Interactive warm-up 🎯

1. Ano common cause ng `this` issues sa callback usage?  
2. Effective ba ang manual `bind`?  
3. Bakit magandang gawing decorator ang autobind logic?

Tamang sagot:
- nawawala ang original method-owner context
- oo
- reusable at less repetitive setup

## Recap 🚀

- Decorators can package repetitive context-fix logic elegantly
- Great real-world motivation for method decorators
