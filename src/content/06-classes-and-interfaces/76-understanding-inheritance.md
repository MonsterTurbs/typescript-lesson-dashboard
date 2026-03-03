# 76. Understanding Inheritance 🌱

## Section 6: Classes & Interfaces

Inheritance lets one class build on top of another class using `extends`.

## Example

```ts
class User {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Employee extends User {
  constructor(firstName: string, lastName: string, public jobTitle: string) {
    super(firstName, lastName);
  }

  work() {
    console.log(`${this.fullName} is working as ${this.jobTitle}`);
  }
}
```

## Important rule

Kapag may constructor ang child class, kailangan mong tawagin ang `super(...)` muna.

## Para sa non-developer 👇

Parang family traits:
- child class inherits base traits
- then may sariling dagdag na traits/actions

So less duplicate code, mas organized growth ng models.

## Interactive warm-up 🎯

1. Anong keyword para mag-inherit ng class?  
2. Bakit kailangan ang `super(...)`?  
3. Puwede bang magdagdag ng sariling methods ang child class?

Tamang sagot:
- `extends`
- para matawag ang base class constructor
- oo

## Recap 🚀

- Inheritance reuses base class structure/behavior
- `super(...)` is required in child constructor
- Child classes can add new fields and methods
