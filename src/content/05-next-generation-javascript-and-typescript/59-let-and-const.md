# 59. "let" and "const" 🧱

## Section 5: Next-generation JavaScript & TypeScript

Simulan natin sa super important na pair: `let` at `const`! 🚀  
Mukhang simple sila, pero sobrang laki ng effect sa clean at safe na code.

## Quick idea: ano pinagkaiba?

- `const` = hindi mo pwedeng i-reassign ang value
- `let` = pwede mong baguhin ang value
- `var` = old way, iwasan na sa modern code

## Basic examples

```ts
const userName = "Max";
// userName = "Ana"; // Error: bawal i-reassign ang const

let age = 30;
age = 31; // Okay lang
```

## Bakit hindi na `var`?

Kasi si `var` may **function/global scope** lang,  
habang si `let` at `const` may **block scope** (mas strict at mas malinis). ✅

```ts
if (age > 20) {
  let isOld = true;
  console.log(isOld); // okay
}

// console.log(isOld); // Error: outside na ng block
```

## Para sa non-developer 👇

Isipin mo:
- `const` = sticker na "DO NOT CHANGE" sa value
- `let` = editable field
- block scope = parang room; kung nasa loob lang ng room ginawa ang variable, di mo siya mahahawakan sa labas ng room

Kaya mas iwas-bug at mas organized ang code. 😄

## Mini comparison

```ts
function add(a: number, b: number) {
  var result = a + b;
  return result;
}
```

`result` dito function-level lang.  
Pero sa `if`, `for`, at ibang blocks, mas predictable ang behavior gamit `let`/`const`.

## Interactive warm-up 🎯

1. Alin ang hindi puwedeng i-reassign: `let` o `const`?  
2. Bakit mas preferred ang `let`/`const` kaysa `var` sa modern JS?  
3. Ano ibig sabihin ng block scope?

Tamang sagot:
- `const`
- dahil mas clear at safer ang scope rules
- available lang ang variable sa block `{ ... }` kung saan ito dineclare

## Recap 🧠

- Use `const` by default
- Use `let` kung kailangan talagang magbago ang value
- Avoid `var`
- Block scope helps you write cleaner, less error-prone code
