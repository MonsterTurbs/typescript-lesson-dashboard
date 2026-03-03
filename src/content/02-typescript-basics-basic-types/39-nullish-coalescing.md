# 39. Nullish Coalescing (`??`) 🌟

## Section 2: TypeScript Basics & Basic Types

Final feature sa section na ito: **nullish coalescing operator** `??`.

Important:
- Hindi lang ito TypeScript feature
- Supported din ito sa modern JavaScript

Pero very useful siya sa TypeScript code kapag may fallback values. 🚀

## Problem setup

May input ka na puwedeng:
- `null`
- empty string `""`
- may actual text

Kapag nagfa-fallback ka, critical ang difference ng `||` vs `??`.

## `||` (OR operator) behavior

```ts
const input: string | null = '';
const valueUsingOr = input || 'DEFAULT';

console.log(valueUsingOr); // "DEFAULT"
```

Bakit?
Kasi ang `||` tinitingnan ang **falsy** values:
- `false`
- `0`
- `""`
- `null`
- `undefined`

## `??` (nullish coalescing) behavior

```ts
const input: string | null = '';
const valueUsingNullish = input ?? 'DEFAULT';

console.log(valueUsingNullish); // ""
```

Sa `??`, fallback lang kapag:
- `null` or `undefined`

Hindi nito automatically nire-replace ang `""`, `0`, at `false`.

## Practical comparison

```ts
const userInput: string | null = '';

const a = userInput || 'No input'; // "No input"
const b = userInput ?? 'No input'; // ""
```

## Paliwanag para sa non-developer 👇

Parang registration form:
- user nagsubmit ng blank note (`""`) -> may sinubmit pa rin
- user walang sinubmit at all (`null/undefined`) -> wala talaga

`??` helps you distinguish those two cases correctly.

## Interactive warm-up 🔥

1. Ano output ng `0 || 100`?  
2. Ano output ng `0 ?? 100`?  
3. Kailan mas bagay ang `??` kaysa `||`?

Tamang sagot:
- `100`
- `0`
- kapag fallback lang for `null`/`undefined`

## Recap 💡

- `??` = nullish coalescing operator
- fallback lang kapag nullish (`null` / `undefined`)
- mas precise kaysa `||` sa maraming input scenarios
- useful sa forms, config defaults, at API responses
