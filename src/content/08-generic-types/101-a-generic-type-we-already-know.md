# 101. A Generic Type We Already Know 👀

## Section 8: Generic Types

Surprise: matagal mo nang ginagamit ang Generics without realizing it.

## Example

```ts
const names: string[] = ["Max", "Anna"];
```

Equivalent generic syntax:

```ts
const names: Array<string> = ["Max", "Anna"];
```

## Key idea

`Array<T>` is a generic type:
- `Array` = flexible container type
- `T` = concrete value type na ilalagay mo (`string` dito)

## Para sa non-developer 👇

Parang box template:
- "Array" ang box model
- "string" ang label ng allowed laman

So `Array<string>` = box na strings lang ang laman.

## Interactive warm-up 🎯

1. Pareho ba ang `string[]` at `Array<string>`?  
2. Alin ang generic type sa `Array<string>`?  
3. Ano ang role ng `string` sa angle brackets?

Tamang sagot:
- oo
- `Array`
- concrete value type na gagamitin ng generic

## Recap ✅

- Generics are already part of your daily TypeScript usage
- `Array<T>` is one of the most common examples
