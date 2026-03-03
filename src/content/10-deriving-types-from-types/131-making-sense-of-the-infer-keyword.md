# 131. Making Sense of the "infer" Keyword 🧠

## Section 10: Deriving Types From Types

`infer` is used inside conditional types para mag-extract ng nested type info.

## Example: get function return type

```ts
function add(a: number, b: number) {
  return a + b;
}

type AddFn = typeof add;

type ReturnValueType<T> = T extends (...args: any[]) => infer R ? R : never;

type AddReturn = ReturnValueType<AddFn>; // number
```

## How to read it

- check if `T` is a function type
- if yes, infer its return type as `R`
- return `R`, else `never`

## Para sa non-developer 👇

Parang detective extraction:
- may complex object (function type)
- kinukuha mo lang specific detail na kailangan mo (return type)

Hindi mo na kailangan dalhin buong structure.

## Interactive warm-up 🎯

1. Saan puwedeng gamitin ang `infer`?  
2. Ano na-extract sa sample utility type?  
3. Ano fallback kapag hindi function type ang `T`?

Tamang sagot:
- inside conditional types
- function return type
- `never`

## Recap ✅

- `infer` enables powerful type extraction utilities
- Key feature behind many advanced/built-in TypeScript helpers
