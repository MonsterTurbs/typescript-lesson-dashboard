# 121. Another Great Use-case for "typeof" 🛠️

## Section 10: Deriving Types From Types

`typeof` sobrang useful din para sa function types.

## Example

```ts
function sum(a: number, b: number) {
  return a + b;
}

function subtract(a: number, b: number) {
  return a - b;
}

type SumFn = typeof sum;
type SubtractFn = typeof subtract;

function performMathAction(cb: SumFn | SubtractFn) {
  console.log(cb(10, 5));
}
```

## Why this is nice

Imbes i-type manual ang callback signature again:
- derive mo na lang mula sa existing functions
- iwas mismatch kapag nagbago ang function signature later

## Para sa non-developer 👇

Parang referral sa existing contract:
- imbes gumawa ng bagong copy ng rules
- tumutukoy ka sa original source para laging synced

## Interactive warm-up 🎯

1. Ano advantage ng `type SumFn = typeof sum`?  
2. Useful ba ito sa callback-heavy code?  
3. Nakakatulong ba ito sa consistency kapag may code changes?

Tamang sagot:
- auto-derived exact function signature
- oo
- oo

## Recap ✅

- `typeof` is excellent for deriving reusable function type aliases
- Helps keep callback contracts accurate
