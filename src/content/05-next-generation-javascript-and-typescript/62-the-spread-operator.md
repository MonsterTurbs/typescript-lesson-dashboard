# 62. The Spread Operator (...) 🌟

## Section 5: Next-generation JavaScript & TypeScript

Isa sa pinaka-useful sa modern JS: **spread operator** (`...`).  
Ginagamit ito para "ikalat" ang laman ng array or object.

## Spread with arrays

```ts
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

activeHobbies.push(...hobbies);
console.log(activeHobbies); // ["Hiking", "Sports", "Cooking"]
```

Pwede rin sa paggawa ng bagong array:

```ts
const allHobbies = [...activeHobbies, "Reading"];
```

## Spread with objects

```ts
const person = { name: "Max", age: 30 };
const copiedPerson = { ...person };
```

`copiedPerson` ay bagong object na may parehong key-value pairs.

## Bakit useful ito?

- less manual code
- madaling merge/copy
- cleaner kaysa isa-isang pagkuha ng values

## Para sa non-developer 👇

Parang ganito:
- Array spread = binuksan mo ang bag at inilabas mo lahat ng laman, paisa-isa
- Object spread = kinopya mo lahat ng label-value pairs papunta sa bagong card

Mas mabilis at less hassle. 😎

## Interactive warm-up 🎯

1. Ano ginagawa ng `...hobbies` sa array context?  
2. Paano gumawa ng shallow copy ng object `person`?  
3. Ano advantage ng spread kaysa manual push/index access?

Tamang sagot:
- ina-unpack ang items bilang list of values
- `const copy = { ...person }`
- mas concise at readable ang code

## Recap 🚀

- `...` works on arrays and objects
- Great for copy/merge patterns
- Produces cleaner modern JavaScript code
