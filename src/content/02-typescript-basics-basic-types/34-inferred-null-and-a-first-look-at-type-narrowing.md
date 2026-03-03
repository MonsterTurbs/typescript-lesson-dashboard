# 34. Inferred null & A First Look at Type Narrowing 🔍

## Section 2: TypeScript Basics & Basic Types

Para mas maging practical ang `null` at `undefined`, tingnan natin ang common web scenario:
pagkuha ng HTML element gamit `document.getElementById`. 🚀

## Bakit may `null` sa inferred type? 🤔

```ts
const inputEl = document.getElementById('username');
```

Inferred type nito ay usually:
- `HTMLElement | null`

Reason:
- Kapag nahanap ang element -> may `HTMLElement`
- Kapag walang match na ID -> `null`

Kaya nagwa-warning si TypeScript kapag diretsong ina-access mo properties.

## Interactive warm-up 🔥

Quick check:

1. Lagi bang may makukuhang element si `getElementById`?  
2. Kapag wala ang ID sa DOM, ano ang return value?  
3. Paano mo papatunayan sa TypeScript na safe na gamitin ang element?

Tamang sagot:
- hindi
- `null`
- gamit `if` check (type narrowing)

## Type narrowing example

```ts
const inputEl = document.getElementById('username');

if (!inputEl) {
  throw new Error('Element not found');
}

// After this check, narrowed na ang type ni inputEl
console.log(inputEl.id);
```

Dito, naintindihan ni TypeScript na lampas sa `if` block,
hindi na puwedeng `null` si `inputEl`.

## First look at narrowing in simple words 🧠

Type narrowing means:
- from broad type (e.g., `HTMLElement | null`)
- to more specific type (`HTMLElement`)
- based sa checks sa code flow mo

Ito ang isa sa pinaka-powerful TypeScript features for safer code.

## Paliwanag para sa non-developer 👇

Parang checkpoint ito:

1. Una, hindi ka sure kung may item ka (`element` or `none`)
2. Gumawa ka ng check kung meron talaga
3. Kapag pumasa sa check, sure ka nang may hawak kang valid item

Ganun gumagana ang type narrowing:
mas less guesswork, mas less runtime errors. ✅

## Mini mission 💬

1. Gumawa ng simple HTML input na may `id="username"`  
2. Kunin ito gamit `getElementById` sa TypeScript  
3. Maglagay ng null check bago gamitin  
4. I-try rin ang mali o missing ID para makita ang behavior

Kapag nakuha mo ito, mas magiging confident ka sa pag-handle ng DOM elements gamit TypeScript. 🔥
