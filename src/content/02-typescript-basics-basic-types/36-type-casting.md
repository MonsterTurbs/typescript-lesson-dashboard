# 36. Type Casting 🎯

## Section 2: TypeScript Basics & Basic Types

Sa previous topic, nakita mo ang `!` at `?.`.  
Pero may isa pang common issue sa DOM code:
kahit hindi null ang element, minsan sobrang generic pa rin ng inferred type. 🚀

Example:

```ts
const inputEl = document.getElementById('username');
```

Usually inferred ito as:
- `HTMLElement | null`

Problem:
- hindi alam ni `HTMLElement` na may `.value` property
- kaya may error kapag diretso kang mag-access ng `inputEl.value`

## Solution: Type Casting / Type Assertion 🛠️

Gamit ang `as` operator:

```ts
const inputEl = document.getElementById('username') as HTMLInputElement;
console.log(inputEl.value);
```

Dito, sinasabi mo kay TypeScript:
"I-treat mo ito as `HTMLInputElement`."

## Interactive warm-up 🔥

Quick check:

1. Bakit may error sa `.value` kapag generic `HTMLElement` lang ang type?  
2. Anong operator ang ginagamit sa type casting?  
3. Sino ang may responsibility kapag nag-cast ka ng type?

Tamang sagot:
- dahil hindi lahat ng HTML elements may `.value`
- `as`
- ikaw (developer) ang may responsibility

## Safer version with null handling

```ts
const inputEl = document.getElementById('username') as HTMLInputElement | null;

if (!inputEl) {
  throw new Error('Input element not found');
}

console.log(inputEl.value);
```

Mas balanced ito: may type assertion + may null guard pa rin. ✅

## Paliwanag para sa non-developer 👇

Isipin mo na may generic label ang item: “HTML element”.
Pero alam mo sa actual na “Input element” pala ito.

Ang casting ay parang pag-update ng label para tumugma sa tunay na item type,
para ma-access mo ang tamang features nito.

Pero kung mali ang label na nilagay mo, puwede kang magkaproblema later.

## Best practice reminder 💡

- Gamitin ang casting kapag kailangan at may certainty ka sa actual type
- Iwasan ang blind casting kung hindi ka sure
- Kung may chance na null, samahan ng null check

## Mini mission 💬

1. Kumuha ng element via `getElementById`  
2. I-cast as `HTMLInputElement`  
3. I-log ang `.value`  
4. Subukan ding gumamit ng maling ID at i-handle ang null safely

Kapag sanay ka sa type casting, mas magiging smooth ang TypeScript + DOM development mo. 🔥
