# 103. Creating & Using a Generic Type 🏗️

## Section 8: Generic Types

Gawa tayo ng sariling generic type: `DataStore<T>`.

## Example

```ts
type DataStore<T> = {
  [key: string]: T;
};

const nameStore: DataStore<string> = {
  first: "Max",
  second: "Anna",
};

const mixedStore: DataStore<string | boolean> = {
  name: "Max",
  isInstructor: true,
};
```

## Why this is great

Hindi ka nagha-hardcode ng value type sa definition stage.  
Sa usage stage mo dini-decide ang concrete type.

## Para sa non-developer 👇

Parang customizable cabinet:
- same cabinet structure
- ikaw bahala kung anong class ng items ang allowed sa specific cabinet mo

Flexible + organized. ✅

## Interactive warm-up 🎯

1. Ano role ni `T` sa `DataStore<T>`?  
2. Saan mo pinipili ang concrete type (`string`, `boolean`, etc.)?  
3. Puwede ba union type as generic argument?

Tamang sagot:
- type placeholder
- sa paggamit ng type (e.g. `DataStore<string>`)
- oo

## Recap 🚀

- Custom generics make types reusable and configurable
- `T` is a placeholder for concrete types supplied later
