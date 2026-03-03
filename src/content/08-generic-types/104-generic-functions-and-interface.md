# 104. Generic Functions & Interface ⚙️

## Section 8: Generic Types

Hindi lang type aliases ang puwedeng generic, pati functions din.

## Generic function example

```ts
function merge<T>(a: T, b: T) {
  return [a, b];
}

const ids = merge(1, 2); // number[]
```

## Why not `any`?

Kung `any`, mawawala ang precise type info after function call.  
Sa generics, preserved ang concrete type.

## Bonus: generic interface pattern

```ts
interface ApiResponse<T> {
  data: T;
  success: boolean;
}
```

Pwede mong i-plug in ang `T` depende sa actual response shape.

## Para sa non-developer 👇

Parang smart template function:
- tinatanggap ang input type
- at ibinabalik output na aligned pa rin sa type na iyon

Mas intelligent kaysa “bahala na” type checking.

## Interactive warm-up 🎯

1. Ano advantage ng generic function over `any` function?  
2. Sa `merge(1, 2)`, ano inferred output type?  
3. Puwede bang generic ang interfaces?

Tamang sagot:
- preserved type precision
- `number[]`
- oo

## Recap ✅

- Generic functions keep type information alive
- Generic interfaces model reusable typed contracts
