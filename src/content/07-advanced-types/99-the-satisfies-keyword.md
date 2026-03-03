# 99. The "satisfies" Keyword 🧪

## Section 7: Advanced Types

`satisfies` checks if a value fits a target type, while still preserving more specific inferred type info.

## Compare approaches

Direct annotation:

```ts
const dataEntries: Record<string, number> = {
  entry1: 1,
  entry2: 2,
};
```

With `satisfies`:

```ts
const dataEntries = {
  entry1: 1,
  entry2: 2,
} satisfies Record<string, number>;
```

## Why `satisfies` can be better

- validates compatibility with broad contract
- keeps narrow literal-aware inference from actual value
- improves downstream IntelliSense in some advanced setups

## Simple mental model

- `:` = "Treat this as that type"
- `satisfies` = "Check it matches that type, then keep my specific shape info"

## Para sa non-developer 👇

Parang compliance check:
- kailangan pumasa sa official standard
- pero hindi nawawala ang specific details ng actual submitted form

Useful sa library configs at typed API patterns.

## Interactive warm-up 🎯

1. Ano ang pangunahing purpose ng `satisfies`?  
2. Pareho ba ito ng epekto ng `:` type annotation?  
3. Saan ito madalas useful?

Tamang sagot:
- validate shape while preserving specific inference
- hindi, may important difference sa retained specificity
- configs/libraries na may strict contract + rich inference needs

## Recap ✅

- `satisfies` is an advanced but powerful TS keyword
- Combines contract safety with better concrete type inference
