# 129. Introducing Conditional Types ⚖️

## Section 10: Deriving Types From Types

Conditional types are type-level if/else logic.

## Basic syntax

```ts
type Result<T> = T extends SomeType ? A : B;
```

## Example: extract array element type

```ts
type GetElementType<T> = T extends any[] ? T[number] : never;

type A = GetElementType<string[]>; // string
type B = GetElementType<number>;   // never
```

## Why useful?

- build flexible utility types
- branch behavior based on incoming type
- enforce safer generic helpers

## Para sa non-developer 👇

Parang smart rule engine:
- "kung ganitong klase ng input, ganitong output type"
- "kung hindi match, ibang fallback type"

Type system pa lang, may decision flow na.

## Interactive warm-up 🎯

1. Ano equivalent concept ng conditional types sa logic terms?  
2. Sa sample, ano output ng `GetElementType<string[]>`?  
3. Ano fallback type kapag hindi array?

Tamang sagot:
- if/else
- `string`
- `never`

## Recap ✅

- Conditional types are foundational for advanced utility typing
- They make generic behavior context-aware
