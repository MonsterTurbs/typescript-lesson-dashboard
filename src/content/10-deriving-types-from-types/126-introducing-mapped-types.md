# 126. Introducing Mapped Types 🗺️

## Section 10: Deriving Types From Types

Mapped types transform one object type into another systematically.

## Example source type

```ts
type Operations = {
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
};
```

## Mapped transformation

```ts
type Results<T> = {
  [K in keyof T]: number;
};

type MathResults = Results<Operations>;
```

`MathResults` becomes:
- `add: number`
- `subtract: number`

## Why useful?

- auto-map all keys
- no manual repeat of key names
- scalable for large object-type transformations

## Para sa non-developer 👇

Parang mass-convert tool:
- same field names retained
- pero value format ng lahat pinalitan sa isang rule

## Interactive warm-up 🎯

1. Ano role ng `[K in keyof T]`?  
2. Ano mapped value type sa sample `Results<T>`?  
3. Bakit useful ito sa bigger schemas?

Tamang sagot:
- loop through all keys of `T`
- `number`
- auto-transformation without repetitive typing

## Recap 🚀

- Mapped types are core tools for object-type transformations
- They enable concise and maintainable type generation
