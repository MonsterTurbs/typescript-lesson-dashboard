# 38. Optional Values & TypeScript ✅

## Section 2: TypeScript Basics & Basic Types

Sa TypeScript, madalas may values na puwedeng meron o puwedeng wala.
Dito papasok ang **optional values** gamit ang `?`. 🚀

## 1) Optional parameters sa functions

Kung minsan may message at minsan wala, gawin mong optional ang parameter.

```ts
function generateError(message?: string) {
  throw new Error(message ?? 'Something went wrong!');
}

generateError(); // valid
generateError('An error occurred!'); // valid
```

Key point:
- `message?: string` means puwedeng hindi mag-pass ng value
- pero kapag nag-pass ka, dapat `string` pa rin

## 2) Optional properties sa object types

```ts
type User = {
  name: string;
  age: number;
  role?: 'admin' | 'guest';
};

const userA: User = { name: 'Ana', age: 25 }; // valid
const userB: User = { name: 'Ben', age: 30, role: 'admin' }; // valid
```

`role` ay optional: puwedeng meron, puwedeng wala.

## Paliwanag para sa non-developer 👇

Parang form fields:
- required: kailangan punan
- optional: puwedeng i-skip

Ganun din sa TypeScript:
- optional ang presence ng field/value
- pero kung maglalagay ka, dapat tama pa rin ang format/type

## Interactive warm-up 🔥

1. Saan nilalagay ang `?` para gawing optional ang parameter/property?  
2. Kapag optional ba, puwede nang maling type ang value?  
3. Valid ba ang object na walang optional property?

Tamang sagot:
- right after name (`role?: ...`, `message?: ...`)
- hindi
- oo

## Recap 💡

- `?` = optional value
- puwede sa function parameters at object properties
- optional does not remove type safety
- sobrang useful sa real-world data na minsan incomplete
