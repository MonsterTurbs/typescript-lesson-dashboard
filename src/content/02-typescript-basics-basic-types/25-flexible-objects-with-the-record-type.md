# 25. Flexible Objects with the Record Type 🗂️

## Section 2: TypeScript Basics & Basic Types

May mga cases na kailangan mo ng object,
pero hindi mo pa alam agad kung ano ang exact keys nito habang nagsusulat ka ng code.  
Dito sobrang useful ang built-in TypeScript type na **`Record`**. 🚀

## Problem na sinosolve ng `Record` 🤔

Gusto mo ng:
- object type (hindi string/number)
- flexible keys
- controlled value types

Hindi sapat ang `{}` type dito, dahil hindi naman talaga ito “object-only” type.

## `Record` syntax

```ts
let data: Record<string, string | number>;
```

Meaning:
- keys are `string`
- values can be `string` or `number`
- overall value must be an object

## Interactive warm-up 🔥

Quick check:

1. Para saan ang first type sa `Record<K, V>`?  
2. Para saan ang second type sa `Record<K, V>`?  
3. Puwede bang string lang ang buong `data` variable kapag `Record` ang type?

Tamang sagot:
- type ng keys (`K`)
- type ng values (`V`)
- hindi puwede, object dapat

## Code snippet: Flexible but safe object

```ts
let data: Record<string, string | number>;

data = {}; // allowed

data = {
  name: 'Max',
  age: 36,
  city: 'Cebu',
};

// data = 'hello'; // Error: must be an object
// data = { active: true }; // Error: boolean not allowed
```

## Dynamic update example

```ts
let scores: Record<string, number> = {};

scores.math = 95;
scores.science = 88;
```

Perfect ito kapag dynamic ang keys pero fixed ang expected value type.

## Paliwanag para sa non-developer 👇

Isipin mo ang `Record` na parang notebook na:

- ikaw bahala sa title ng bawat line item (keys)
- pero may rule kung anong klaseng laman lang ang puwede (values)

So flexible ka sa labels, pero controlled pa rin ang content format. ✅

## Kailan dapat gamitin ang `Record`? 💡

Gamitin mo ito kapag:
- unknown pa ang exact property names
- nagdadagdag/nagbubura ka ng properties dynamically
- gusto mo pa rin ng type safety sa values

## Mini mission 💬

1. Gumawa ng `let settings: Record<string, string | number>`  
2. Maglagay ng iba’t ibang keys (`theme`, `fontSize`, `language`)  
3. Subukang maglagay ng boolean value at observe error

Kapag gets mo ang `Record`, mas magiging madali ang pag-handle mo ng dynamic object data sa TypeScript. 🔥
