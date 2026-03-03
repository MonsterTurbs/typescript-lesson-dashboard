# 30. The "void" Type 🚫

## Section 2: TypeScript Basics & Basic Types

Pagdating sa functions, may isang special return type na dapat mo talagang malaman:
**`void`**. 🚀

Ginagamit ito kapag ang function ay walang nire-return na value.

## Basic example

```ts
function log(message: string): void {
  console.log(message);
}
```

Dito:
- `message` is `string`
- function returns nothing, kaya `void`

## Interactive warm-up 🔥

Quick check:

1. Kapag walang `return` value ang function, anong return type?  
2. Puwede bang gamitin ang `void` bilang normal variable type sa everyday use?  
3. Madalas bang inferred ni TypeScript ang `void`?

Tamang sagot:
- `void`
- usually no, function return context ito
- yes, kadalasan inferred

## Inference example

```ts
function printStatus(status: string) {
  console.log(`Status: ${status}`);
}
```

Kahit walang explicit `: void`, inferred na `void` ang return type nito.

## Why this matters 💡

`void` makes function intent clear:
- action-only function ito
- hindi ito nagbibigay ng output value for further computation

Useful ito para maiwasan ang confusion sa code flow.

## Paliwanag para sa non-developer 👇

Isipin mo ang function na parang bell notification:

- may ginagawa siya (nag-aannounce)
- pero wala siyang item na ibinabalik pabalik sa’yo

Ganun ang `void`: may action, pero walang return value.

## Mini mission 💬

1. Gumawa ng function `showWelcome(name: string): void`  
2. I-log ang welcome message sa loob  
3. Subukang gamitin ang return value nito sa math operation at observe why it doesn’t make sense

Kapag gets mo ang `void`, mas magiging malinaw kung alin sa functions mo ang “action-only” vs “value-returning”. 🔥
