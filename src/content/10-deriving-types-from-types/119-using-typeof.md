# 119. Using "typeof" 🔍

## Section 10: Deriving Types From Types

May `typeof` sa JavaScript at may `typeof` din sa TypeScript context.

## JavaScript `typeof` (runtime)

```ts
const username = "Max";
console.log(typeof username); // "string"
```

## TypeScript `typeof` (type space)

```ts
const username = "Max";
type Username = typeof username;
```

`Username` here becomes a derived type based on the value.

## Important nuance

Kapag `const` literal value, minsan mas narrow literal type ang lalabas.  
Kapag `let`, usually broader type (e.g. `string`) dahil reassignable.

## Para sa non-developer 👇

Parang dalawang gamit ng same word:
- JS mode: chine-check actual value type habang tumatakbo
- TS mode: kinukuha ang type info habang nagsusulat ka pa lang

## Interactive warm-up 🎯

1. Pareho ba ang context ng `typeof` sa JS runtime at TS type definitions?  
2. Sa type alias, value ba ang kinukuha o type info?  
3. Bakit mas useful minsan ang TS `typeof` kaysa manual type rewrite?

Tamang sagot:
- hindi
- type info
- iwas duplicate at typo-prone manual typing

## Recap ✅

- `typeof` in TS helps derive types from existing values
- Great starting point for type-from-value workflows
