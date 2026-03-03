# 73. Understanding Getters 🪄

## Section 6: Classes & Interfaces

Getters let you expose computed values as if regular properties sila.

## Example

```ts
class User {
  constructor(private firstName: string, private lastName: string) {}

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user = new User("Alex", "Rivera");
console.log(user.fullName); // property-style access
```

## Bakit useful ang getter?

- hide internal details
- computed on demand
- cleaner API (`user.fullName` instead of `user.getFullName()`)

## Para sa non-developer 👇

Parang generated display name:
- stored mo first at last name separately
- kapag hiningi ang full name, saka mo binubuo

Result: simple gamitin, smart sa likod. 😄

## Interactive warm-up 🎯

1. Getter ba ay tinatawag na method syntax (`()`) kapag ginagamit?  
2. Ano purpose ng getter sa example?  
3. Puwede bang gumamit ng private fields sa loob ng getter?

Tamang sagot:
- hindi, property-style lang
- computed full name generation
- oo

## Recap ✅

- `get` creates computed readable properties
- Accessed like normal property
- Ideal for derived values from private data
