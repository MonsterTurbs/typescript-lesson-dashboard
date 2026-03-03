# 69. Creating a First Class 👶

## Section 6: Classes & Interfaces

Game time: gawa tayo ng first TypeScript class! ⚡

## Basic class setup

```ts
class User {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }
}
```

## Bakit ganito sa TypeScript?

Sa vanilla JS, puwede mong i-add on the fly ang properties sa constructor.  
Sa TypeScript, mas explicit: dine-define natin ang fields sa class body.

## Important pieces

- `class User` = blueprint
- `name: string; age: number;` = properties/fields
- `constructor(...)` = tumatakbo kapag `new User(...)`
- `this.name` = property ng current instance

## Para sa non-developer 👇

Parang registration form:
- una: define mo lahat ng required fields
- tapos sa constructor: doon mo pinupuno gamit actual input

Result: mas strict at mas malinaw ang records mo.

## Interactive warm-up 🎯

1. Saan tumatakbo ang constructor?  
2. Bakit gumagamit ng `this`?  
3. Ano mangyayari kung di mo na-assign ang required properties?

Tamang sagot:
- kapag nag-`new` ka ng class
- para i-reference ang property ng current object
- TypeScript magbibigay ng error (uninitialized fields)

## Recap 🚀

- TypeScript classes encourage explicit property definitions
- Constructor initializes per-instance values
- Cleaner and safer than ad-hoc property creation
