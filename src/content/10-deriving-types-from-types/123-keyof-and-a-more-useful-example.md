# 123. "keyof" & A More Useful Example 🎯

## Section 10: Deriving Types From Types

Classic use case: safe `getProp` utility function.

## Example

```ts
function getProp<T extends object, K extends keyof T>(obj: T, key: K) {
  const val = obj[key];
  if (val === undefined || val === null) {
    throw new Error("Accessing undefined or null value");
  }
  return val;
}

const user = { name: "Max", age: 36 };
const age = getProp(user, "age"); // inferred: number
```

## Why this is powerful

- key is guaranteed valid for the given object
- return type matches selected property type
- reusable for many object shapes

## Para sa non-developer 👇

Parang smart field reader:
- hindi ka papayagang humingi ng field na wala
- at alam na agad anong klaseng data ang babalik

## Interactive warm-up 🎯

1. Ano role ng `K extends keyof T`?  
2. Safe ba ang `getProp(user, "unknownKey")`?  
3. Ano inferred type ng `getProp(user, "age")` sa sample?

Tamang sagot:
- restrict key to valid keys of object
- hindi
- `number`

## Recap ✅

- `keyof` + generics create precise, safe property-access helpers
- A staple pattern in advanced TypeScript code
