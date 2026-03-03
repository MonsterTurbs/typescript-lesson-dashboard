# 95. Working with Function Overloads 🛠️

## Section 7: Advanced Types

Ito na ang actual overload syntax in action.

## Example

```ts
function getLength(val: string): string;
function getLength(val: any[]): number;
function getLength(val: string | any[]) {
  if (typeof val === "string") {
    const numberOfWords = val.split(" ").length;
    return `${numberOfWords} words`;
  }

  return val.length;
}

const numOfWords = getLength("Does this work?");
const itemCount = getLength(["a", "b", "c"]);
```

## What TypeScript now knows

- `numOfWords` is `string`
- `itemCount` is `number`

No manual type casting needed for these cases.

## Para sa non-developer 👇

Parang malinaw na customer support flowchart:
- if text ang input -> text format ang output
- if array ang input -> number ang output

Kaya mas smart ang editor at mas konti ang confusion.

## Interactive warm-up 🎯

1. Ilang function body ang meron sa overload setup?  
2. Ano type ni `numOfWords` sa sample?  
3. Bakit nakakatulong ito sa DX (developer experience)?

Tamang sagot:
- isa lang
- `string`
- mas precise autocomplete at type checking

## Recap 🚀

- Overload signatures describe usage variants
- One implementation handles all supported cases
