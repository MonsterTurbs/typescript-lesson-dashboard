# 96. Making Sense of Index Types 🗂️

## Section 7: Advanced Types

Index types let you define flexible object shapes with dynamic keys.

## Example

```ts
type DataStore = {
  [key: string]: number | boolean;
};

const store: DataStore = {};
store.id = 5;
store.isOpen = false;
// store.name = "Max"; // error: string not allowed
```

## Meaning ng syntax

`[key: string]` means:
- any property name allowed (string-like keys)
- pero fixed pa rin ang allowed value type (`number | boolean`)

## Para sa non-developer 👇

Parang spreadsheet na:
- puwede kang magdagdag ng kahit anong column name
- pero restricted pa rin ang class of allowed values

Flexible pero controlled. ✅

## Interactive warm-up 🎯

1. Dynamic ba ang key names sa index types?  
2. Puwede bang mag-store ng string value sa sample `DataStore`?  
3. Ano main benefit nito?

Tamang sagot:
- oo
- hindi
- flexibility with type safety

## Recap 🚀

- Index signatures support dynamic properties
- Value constraints still enforced by TypeScript
