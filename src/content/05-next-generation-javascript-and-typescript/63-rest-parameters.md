# 63. Rest Parameters 🧺

## Section 5: Next-generation JavaScript & TypeScript

Kung spread ay para mag-unpack,  
ang **rest parameters** naman ay para mag-pack ng maraming arguments into one array.

## Flexible add function

```ts
const add = (...numbers: number[]) => {
  return numbers.reduce((sum, current) => sum + current, 0);
};

console.log(add(5, 10, 2, 3.7)); // 20.7
```

`...numbers` means:
- tumanggap ng kahit ilang arguments
- i-collect sila bilang `number[]`

## Built-in methods use this style too

Halimbawa si `push`:

```ts
const names = ["Max"];
names.push("Anna", "Chris", "Taylor");
```

Maraming values ang puwedeng ipasa in one call.

## Para sa non-developer 👇

Isipin mo rest parameter as catch-all basket:
- kahit ilan ibato mong numbers
- sasalo niya lahat
- tapos pwede mo i-process in one go

Perfect sa functions na hindi fixed ang dami ng input. 🎉

## Interactive warm-up 🔥

1. Ano type ng `numbers` sa `(...numbers: number[])`?  
2. Puwede bang 10 arguments ang ipasa sa rest parameter function?  
3. Ano balik ng sample `add(5, 10, 2, 3.7)`?

Tamang sagot:
- `number[]`
- oo, puwedeng-puwede
- `20.7`

## Recap ✅

- Rest parameters collect multiple incoming values
- Clean solution for variable-length function inputs
- Common in both custom and built-in functions
