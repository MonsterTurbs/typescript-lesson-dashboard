# 85. Ensuring Base Types with Interfaces 🧷

## Section 6: Classes & Interfaces

Interfaces shine kapag may function na nangangailangan ng minimum guaranteed shape.

## Example

```ts
interface Authenticatable {
  login(): void;
}

function authenticate(user: Authenticatable) {
  user.login();
}
```

Now kahit anong object/class basta may `login()` method, puwedeng ipasa.

## Why this matters

- decoupled design
- clear expectations sa function inputs
- less fragile integrations across modules

## Bonus

Inside interfaces, puwede mo pa rin gamitin:
- optional properties (`?`)
- union types
- nested object types
- method signatures

## Para sa non-developer 👇

Parang gate policy:
- "Papapasukin lang kung may valid ID"
- hindi mahalaga kung anong brand ng wallet mo
- mahalaga, meron kang required proof

## Interactive warm-up 🎯

1. Ano minimum requirement sa sample `authenticate(...)` input?  
2. Puwede bang class instance ang ipasa sa interface-typed function?  
3. Bakit magandang pattern ito sa malaking codebase?

Tamang sagot:
- may `login()` method
- oo
- dahil clear at stable ang expected contract

## Recap 🚀

- Interfaces define reusable base requirements
- Functions become safer and more flexible
- Strong foundation for modular TypeScript architecture
