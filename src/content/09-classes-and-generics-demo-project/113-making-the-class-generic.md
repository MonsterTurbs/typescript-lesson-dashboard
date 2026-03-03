# 113. Making the Class Generic 🧬

## Section 9: Classes & Generics - Demo Project

Ayaw natin ng `any`. Gusto natin flexible pero type-safe.  
Solution: gawing generic ang class.

## Example

```ts
class LinkedList<T> {
  add(value: T) {
    // add logic here
  }
}

const numberList = new LinkedList<number>();
const nameList = new LinkedList<string>();
```

## Why this is better

- one reusable class
- different concrete value types per list instance
- full TypeScript support (autocomplete + errors kapag mali)

## Para sa non-developer 👇

Parang iisang organizer template:
- puwedeng para sa numbers
- puwedeng para sa names
- ikaw pipili ng allowed content type per organizer

## Interactive warm-up 🎯

1. Ano role ng `T` sa `LinkedList<T>`?  
2. Puwede bang magkaibang value types ang dalawang list instances?  
3. Bakit mas okay ito kaysa `any`?

Tamang sagot:
- type placeholder
- oo
- preserved ang type safety

## Recap 🚀

- Generic class unlocks flexible but strict list usage
- Great real-world use case ng generics
