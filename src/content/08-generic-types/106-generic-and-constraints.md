# 106. Generic & Constraints 🔒

## Section 8: Generic Types

Minsan gusto mo flexible pero may limit.  
Dito papasok ang generic constraints via `extends`.

## Example

```ts
function mergeObj<T extends object, U extends object>(a: T, b: U) {
  return { ...a, ...b };
}

const merged = mergeObj({ username: "Max" }, { age: 36 });
// mergeObj(1, 2); // error: number is not object
```

## Why constraints matter

- prevent invalid input combinations
- align generic function with runtime logic (e.g. spread needs objects)
- keep flexibility inside safe boundaries

## Para sa non-developer 👇

Parang event policy:
- open ang event sa maraming tao
- pero may required criteria pa rin (e.g. registered participants only)

Ganun din sa generics with constraints.

## Interactive warm-up 🎯

1. Anong keyword ang pang-constraint sa generic type parameter?  
2. Bakit `object` constraint ang bagay sa spread merge?  
3. Flexibility ba o strict-hardcoded ang constraint approach?

Tamang sagot:
- `extends`
- dahil objects lang ang may properties na pwedeng i-spread
- flexibility with controlled limits

## Recap ✅

- Constraints make generics safer and more practical
- `extends` narrows allowed types for placeholders
