# 122. Extracting Keys with "keyof" 🗝️

## Section 10: Deriving Types From Types

`keyof` extracts property names from an object type as a union.

## Example

```ts
type User = {
  name: string;
  age: number;
};

type UserKeys = keyof User; // "name" | "age"

let validKey: UserKeys;
validKey = "name";
validKey = "age";
// validKey = "email"; // error
```

## Why useful?

Kapag gusto mong i-restrict inputs sa existing keys lang ng type,  
`keyof` is a perfect fit.

## Para sa non-developer 👇

Parang whitelist of allowed field names:
- only listed keys allowed
- bawal unknown labels

Mas safe ang dynamic key-based operations.

## Interactive warm-up 🎯

1. Ano output shape ng `keyof User`?  
2. Type-only feature ba ito o runtime JS feature?  
3. Useful ba ito para i-validate allowed field names?

Tamang sagot:
- union of property name literals
- TypeScript-only
- oo

## Recap 🚀

- `keyof` turns object keys into a reusable key union type
- Fundamental building block for many advanced utility patterns
