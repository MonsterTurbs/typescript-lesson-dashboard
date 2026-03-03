# 83. Using Interfaces To Define Function Types 🧮

## Section 6: Classes & Interfaces

Hindi lang object shapes: puwede rin ang interfaces for function types.

## Common approach (type alias)

```ts
type SumFn = (a: number, b: number) => number;

let sum: SumFn;
sum = (a, b) => a + b;
```

## Alternative approach (interface)

```ts
interface SumFn {
  (a: number, b: number): number;
}

let add: SumFn;
add = (a, b) => a + b;
```

Pareho silang valid.  
Mas common lang madalas ang `type` syntax for function signatures.

## Para sa non-developer 👇

Parang job description ng machine:
- dalawang number input
- isang number output

Kung anong actual function ilagay mo, kailangan sumunod sa rule na iyon.

## Interactive warm-up 🎯

1. Puwede bang interface ang pang-describe ng function shape?  
2. Ano expected return type sa sample `SumFn`?  
3. Lagi bang interface ang mas common para function types?

Tamang sagot:
- oo
- `number`
- hindi, madalas `type` ang nakikita

## Recap 🚀

- Function types can be expressed via `type` or `interface`
- Both enforce callable signature contracts
- Pick based on team style and consistency
