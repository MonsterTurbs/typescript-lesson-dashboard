# 132. TypeScript's Got You Covered: Built-in Utility Types 🧰

## Section 10: Deriving Types From Types

Good news: maraming utility types na built-in si TypeScript, so di mo kailangang i-build lahat from scratch.

## Common built-ins

- `ReturnType<T>`
- `Partial<T>`
- `Required<T>`
- `Readonly<T>`
- `Pick<T, K>`
- `Omit<T, K>`
- `Record<K, V>`

## Example

```ts
function add(a: number, b: number) {
  return a + b;
}

type AddReturn = ReturnType<typeof add>; // number

type User = { name: string; age: number };
type PartialUser = Partial<User>; // both optional
```

## Why important?

- saves time
- standardized patterns
- battle-tested implementations

## Para sa non-developer 👇

Parang toolkit set:
- imbes gumawa ka pa ng sariling wrench bawat task
- may ready-made tools ka na para sa common transformations

Use built-ins first, custom utility types when needed.

## Interactive warm-up 🎯

1. Kailangan ba laging gumawa ng custom utility type manually?  
2. Ano utility type para gawing optional lahat ng object properties?  
3. Ano utility type para kunin ang return type ng function?

Tamang sagot:
- hindi
- `Partial<T>`
- `ReturnType<T>`

## Recap 🚀

- Built-in utility types cover many real-world scenarios
- Knowing them boosts speed and consistency in TypeScript projects
