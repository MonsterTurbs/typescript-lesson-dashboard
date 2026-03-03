# 44. Configuring Type Checking ✅

## Section 3: The TypeScript Compiler (and its Configuration)

Sa topic na ito, tututukan natin ang type-checking part ng `tsconfig.json`.
Dito mo kino-control kung gaano ka-strict si TypeScript sa pag-detect ng possible errors. 🚀

## Core setting: `strict` 🔒

Kapag naka-`true` ang `strict`, maraming strict checks ang sabay-sabay na naka-enable.

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

Ito ang recommended setup sa karamihan ng projects
para mas maagang mahuli ang bugs habang nagde-develop ka pa lang.

## Example: `noImplicitAny` in action

Kapag strict mode ka, included na rin ang `noImplicitAny`.
Ibig sabihin: bawal yung parameters na walang malinaw na type.

```ts
function add(a, b) {
  return a + b;
}
```

Sa strict setup, mag-eerror ito dahil nagiging implicit `any` sina `a` at `b`.

Fix:

```ts
function add(a: number, b: number) {
  return a + b;
}
```

Pwede mo ring i-configure directly:

```json
{
  "compilerOptions": {
    "noImplicitAny": true
  }
}
```

Pero kung naka-`strict: true` ka na, usually hindi na kailangan i-set isa-isa.

## Example: `strictNullChecks` 🧠

Isa ring important strict rule ay `strictNullChecks`.
Pinipigilan ka nitong basta gumamit ng value na posibleng `null` o `undefined`.

```ts
const el = document.getElementById('username');
console.log(el.id); // possible error kapag null si el
```

Sa strict null checks, need mo ng guard:

```ts
const el = document.getElementById('username');

if (!el) {
  throw new Error('Element not found');
}

console.log(el.id);
```

## Paliwanag para sa non-developer 👇

Isipin mo si TypeScript strict mode bilang quality inspector:
- chine-check niya kung kulang ang labels (missing types)
- chine-check niya kung delikado ang assumptions (possible null values)

Mas maraming checks = mas maraming warning ngayon, pero mas konting bugs later. ✅

## Interactive warm-up 🔥

1. Ano ang master switch para sa strict type checking?  
2. Anong rule ang nagbabawal sa accidental implicit `any`?  
3. Bakit useful ang `strictNullChecks`?

Tamang sagot:
- `strict`
- `noImplicitAny`
- para hindi ka basta gumamit ng posibleng null/undefined values

## Practical reminder 💡

Oo, minsan mas maraming errors kapag strict mode.
Pero long-term, mas stable at maintainable ang codebase mo.

Sa real-world projects, kadalasan pre-configured na ang maraming options,
at madalas `strictness` at `target` lang ang pinaka-common na tine-tweak.

## Recap 🎯

- Type-checking options control kung gaano ka-higpit si TypeScript
- `strict: true` enables most strict checks
- `noImplicitAny` catches missing explicit types
- `strictNullChecks` catches unsafe null/undefined usage
- strict mode gives better safety and better code quality over time
