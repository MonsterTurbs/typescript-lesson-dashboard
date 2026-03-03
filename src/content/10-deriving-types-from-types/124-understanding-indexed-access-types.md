# 124. Understanding Indexed Access Types 📦

## Section 10: Deriving Types From Types

Indexed access types let you pick a sub-type from another type using `[]`.

## Example

```ts
type AppUser = {
  name: string;
  age: number;
  permissions: {
    id: string;
    title: string;
    description: string;
  }[];
};

type Perms = AppUser["permissions"];
```

`Perms` becomes the exact type of `permissions` property.

## Why useful?

- no copy-paste ng nested types
- auto-sync kapag nagbago ang source type
- cleaner reuse ng type parts

## Para sa non-developer 👇

Parang kumuha ka lang ng isang section mula sa full form schema  
instead na i-rewrite mo ulit manually.

## Interactive warm-up 🎯

1. Ano ginagawa ng `AppUser["permissions"]`?  
2. Runtime JS ba ito o TypeScript typing feature?  
3. Bakit mas safe ito kaysa manual duplicate definitions?

Tamang sagot:
- extracts the type of the `permissions` property
- TypeScript feature
- single source of truth at less mismatch risk

## Recap 🚀

- Indexed access is a clean way to extract nested property types
- Great for DRY type architecture
