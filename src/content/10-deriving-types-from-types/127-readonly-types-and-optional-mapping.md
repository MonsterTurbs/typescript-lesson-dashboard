# 127. Readonly Types & Optional Mapping 🔧

## Section 10: Deriving Types From Types

Mapped types can also toggle property flags like optional and readonly.

## Optional mapping

```ts
type MakeOptional<T> = {
  [K in keyof T]?: T[K];
};
```

## Remove optional mapping

```ts
type MakeRequired<T> = {
  [K in keyof T]-?: T[K];
};
```

## Readonly mapping

```ts
type MakeReadonly<T> = {
  readonly [K in keyof T]: T[K];
};
```

## Remove readonly mapping

```ts
type RemoveReadonly<T> = {
  -readonly [K in keyof T]: T[K];
};
```

## Para sa non-developer 👇

Parang mass settings editor:
- pwede mong gawing optional lahat ng fields
- pwede ring i-lock (readonly) lahat
- or i-unlock ulit in one rule

## Interactive warm-up 🎯

1. Ano symbol combo para gawing required ang optional fields?  
2. Paano gawing readonly ang lahat ng properties via mapped type?  
3. Puwede bang i-remove din ang readonly flag?

Tamang sagot:
- `-?`
- `readonly [K in keyof T]: ...`
- oo (`-readonly`)

## Recap ✅

- Mapped types can transform both value types and property modifiers
- Powerful for enforcing or relaxing object contracts
