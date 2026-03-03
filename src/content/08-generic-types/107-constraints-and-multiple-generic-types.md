# 107. Constraints & Multiple Generic Types 🧱

## Section 8: Generic Types

Kapag two different objects ang pinapasa mo, mas clear kung hiwalay ang placeholders.

## Better merge signature

```ts
function mergeObj<T extends object, U extends object>(a: T, b: U) {
  return { ...a, ...b };
}

const user = mergeObj({ username: "Max" }, { age: 36 });
```

## Why separate `T` and `U`?

Kung iisang placeholder lang (`T`) for both:
- TypeScript tries to find one shared type for both inputs
- puwedeng maging unnecessarily complex ang inferred result

Sa `T, U`:
- input shapes stay distinct
- output reflects combined object cleanly

## Para sa non-developer 👇

Parang dalawang magkaibang form na pinagsama:
- Form A may sariling fields
- Form B may sariling fields
- final record = kombinasyon ng pareho

Mas malinaw kapag hiwalay ang identities nila.

## Interactive warm-up 🎯

1. Bakit minsan hindi ideal ang single generic placeholder sa two params?  
2. Ano effect ng `T extends object, U extends object`?  
3. Ano common output shape ng object merge function?

Tamang sagot:
- pinipilit one shared type kahit magkaiba input shapes
- parehong objects lang ang allowed
- combined/intersection-like object shape

## Recap 🚀

- Multi-parameter generics + constraints improve type clarity
- Great for utility functions with mixed object inputs
