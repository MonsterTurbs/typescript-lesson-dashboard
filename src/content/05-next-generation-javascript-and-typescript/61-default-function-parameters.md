# 61. Default Function Parameters 🎛️

## Section 5: Next-generation JavaScript & TypeScript

Sa modern JavaScript, puwede ka na mag-set ng default value sa function parameters.  
Sobrang useful kapag minsan kulang ang arguments na ibinibigay. ✅

## Example

```ts
const add = (a: number, b: number = 1) => a + b;

console.log(add(5, 2)); // 7
console.log(add(5));    // 6 (kasi default si b = 1)
```

## Important rule

Default parameters should be on the right side (huli sa list).

```ts
// Better
const good = (a: number, b: number = 1) => a + b;
```

Kung nauuna ang default parameter, nakakalito ang argument matching order.

## Para sa non-developer 👇

Parang order form ito:
- `a` = required field
- `b` = may automatic value kung hindi mo nilagay

So kahit kulang input mo, kaya pa rin tumakbo ng function gamit backup value. 😄

## Interactive warm-up 🧩

1. Sa `const add = (a, b = 1) => a + b;`, ano ang `add(10)`?  
2. Bakit mas okay ilagay sa dulo ang default parameters?  
3. Required pa ba mag-pass ng value para kay `b`?

Tamang sagot:
- `11`
- para predictable ang argument order
- hindi na, optional na siya dahil may default

## Recap 🎯

- Default parameters make functions more flexible
- Missing argument can use fallback value
- Keep non-default params first, default params last
