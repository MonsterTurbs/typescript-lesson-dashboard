# 27. Being Specific With Literal Types 🎯

## Section 2: TypeScript Basics & Basic Types

Useful ang enums para sa fixed choices, pero may popular alternative:
**union types + literal types**. 🚀

Literal types let you define very specific allowed values, not just general types like `string` or `number`.

## Literal type basics 🧩

```ts
let userRole: 'admin';
userRole = 'admin'; // allowed
// userRole = 'guest'; // Error
```

Dito, isang exact value lang ang valid: `'admin'`.

## Mas practical: literal + union 🔗

Para may flexibility, pagsamahin mo sa union type:

```ts
let userRole: 'admin' | 'editor' | 'guest';

userRole = 'admin'; // allowed
userRole = 'guest'; // allowed
// userRole = 'superuser'; // Error
```

Ito ang common alternative sa enums sa maraming codebases.

## Interactive warm-up 🔥

Quick check:

1. Puwede bang specific string value ang mismong type?  
2. Mas useful ba literal types kapag sinamahan ng union?  
3. Strings lang ba ang puwedeng literal types?

Tamang sagot:
- yes
- yes
- no (pati numbers puwede)

## Number literal types example

```ts
let possibleResults: [1 | -1, 1 | -1];

possibleResults = [1, -1]; // allowed
possibleResults = [-1, 1]; // allowed
// possibleResults = [1, 5]; // Error
```

Dito, fixed length na tuple + very specific number options pa.

## Paliwanag para sa non-developer 👇

Isipin mo ang literal types na parang menu na may exact options lang.

- Hindi ka puwedeng mag-order ng wala sa menu
- Pero puwede kang pumili sa listed choices

Ganun ang `'admin' | 'editor' | 'guest'`:
clear options, less guesswork, less bugs. ✅

## Enum vs literal union? 💡

Parehong valid.
Kadalasan preference ng team o project style ang magde-decide.

Important: alam mo pareho para comfortable ka sa kahit anong codebase.

## Mini mission 💬

1. Gumawa ng `let status: 'pending' | 'approved' | 'rejected'`  
2. Mag-assign ng valid at invalid values  
3. Gumawa ng tuple na `[0 | 1, 0 | 1]` at subukang lagyan ng `2`

Kapag gets mo ito, mas magiging precise at expressive ang type definitions mo sa TypeScript. 🔥
