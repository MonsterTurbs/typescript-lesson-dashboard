# 13. Working with Types & Exploring Built-in Types 🧠

## Section 2: TypeScript Basics & Basic Types

Ang special sa TypeScript ay hindi lang dahil puwede kang magsulat ng JavaScript sa `.ts` files.  
Ang tunay na power niya ay ang **type system** para mas malinaw at mas safe ang code mo. 🚀

## Core idea ng lesson na ito 🎯

Kapag may variable ka na hindi agad initialized, magandang practice sa TypeScript na
bigyan mo ito ng explicit type.

Halimbawa:
- `string` para sa text
- `number` para sa numbers
- `boolean` para sa `true/false`

Ito ang built-in types na lagi mong gagamitin sa real projects.

## Interactive warm-up 🔥

Quick check:

1. Ano ang mangyayari kapag uninitialized variable tapos walang type?  
2. Anong symbol ang gamit para mag-assign ng type sa variable?  
3. Aling type ang gagamitin mo para sa username?

Kung sagot mo ay:
- possible implicit `any`
- colon `:`
- `string`

Great start! ✅

## Code snippet 1: Unclear vs typed variable

```ts
let username;
username = 'Max';
```

Sa code na ito, walang explicit type annotation.
Kaya puwedeng magbigay ng hint si TypeScript na implicit `any` ito.

Mas magandang version:

```ts
let username: string;
username = 'Max';
```

Now clear na: text lang ang pwede mong ilagay dito.

## Code snippet 2: Type mismatch demo

```ts
let age: number;
age = 28;

// Error: Type 'string' is not assignable to type 'number'
// age = 'twenty eight';
```

At para sa true/false values:

```ts
let isLoggedIn: boolean;
isLoggedIn = true;
```

## Paliwanag para sa non-developer 👇

Isipin mo na may labeled containers ka:

- container na may label na `string` = text lang
- container na may label na `number` = numbers lang
- container na may label na `boolean` = yes/no lang (`true/false`)

Kapag maling item ang nilagay mo, pinipigilan ka ni TypeScript agad.
Parang quality checker bago pa magkaproblema sa app. 🛡️

## Important compile reminder ⚙️

Kapag nag-compile ka gamit `tsc`, mawawala ang type annotations sa output JS
kasi TypeScript-only feature ang mga iyon.

Example command:

```bash
tsc basics.ts
```

Ang `.js` output ay executable na JavaScript na walang `: string` o `: number`,
pero nakinabang ka na sa safety checks habang nagsusulat ka pa lang ng code.

## Mini mission 💬

1. Gumawa ng `username`, `age`, at `isLoggedIn` variables with explicit types  
2. Subukang mag-assign ng maling value type  
3. Observe ang TypeScript error  
4. Ayusin ang values at i-compile

Ganito mo mararamdaman agad kung bakit sobrang powerful ng TypeScript types. 🔥
