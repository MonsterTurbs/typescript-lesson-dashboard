# 125. Accessing Array Elements with Indexed Access Types 🧮

## Section 10: Deriving Types From Types

Variation ng indexed access: puwede mo ring kunin ang element type ng array.

## Example

```ts
type Perms = {
  id: string;
  title: string;
  description: string;
}[];

type Perm = Perms[number];
```

`Perm` becomes one permission object type (not the array).

## Another quick sample

```ts
type Names = string[];
type Name = Names[number]; // string
```

## Why useful?

- extract item type directly
- ideal for list/item relationship typings
- avoids repeating object shape manually

## Para sa non-developer 👇

Parang inventory:
- `Perms` = buong listahan
- `Perm` = type ng isang individual item sa listahan

## Interactive warm-up 🎯

1. Ano ibig sabihin ng `[number]` sa array type context?  
2. Ano magiging type ng `Names[number]` kung `Names = string[]`?  
3. Useful ba ito sa list-item modeling?

Tamang sagot:
- element type extraction
- `string`
- oo

## Recap ✅

- `[number]` is the key pattern for array element type extraction
- Super handy in advanced generic utility definitions
