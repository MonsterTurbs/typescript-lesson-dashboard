# 16. Assigning Types to Function Parameters 🛠️

## Section 2: TypeScript Basics & Basic Types

Alam mo na ngayon ang type assignment at type inference sa variables.  
Next stop: **functions**, especially function parameters. 🚀

Ito ang isa sa pinaka-common na place kung saan ginagamit ang TypeScript sa real projects.

## Saan naglalagay ng type sa function? 🎯

Sa parameter name mismo, gamit ang colon:

```ts
function add(a: number, b: number) {
  return a + b;
}
```

Dito, clear agad na parehong `number` ang expected inputs.

## Type inference with default values 🔍

Kung may default value ang parameter, puwedeng mag-infer si TypeScript ng type:

```ts
function add(a: number, b = 2) {
  return a + b;
}
```

`b` will be inferred as `number` dahil sa default value na `2`.

## Interactive warm-up 🔥

Quick check:

1. Kapag `b = 2`, required pa ba lagi mag-pass ng second argument?  
2. Puwede bang string ang ipasa sa `a: number`?  
3. Ano ang benefit ng typed parameters?

Kung sagot mo ay:
- optional na si `b` kapag may default
- hindi puwede ang string
- mas safe at clear ang function usage

Tama ka. ✅

## Example calls

```ts
function add(a: number, b = 2) {
  return a + b;
}

console.log(add(5)); // 7
console.log(add(5, 10)); // 15

// Error: Argument of type 'string' is not assignable to parameter of type 'number'
// console.log(add('5'));
```

## Paliwanag para sa non-developer 👇

Isipin mo ang function na parang vending machine:

- tumatanggap lang ng specific token type
- kapag mali ang token (hal. text imbes na number), nire-reject agad
- kung may default setting, puwedeng isang input lang ibigay mo

So mas predictable ang output at less chance ng bugs. 🛡️

## Best practice reminder 💡

- I-type ang important function parameters para clear ang contract
- Gamitin ang default values kapag may sensible fallback
- Trust inference kapag obvious ang type, pero maging explicit kung kailangan

## Mini mission 💬

1. Gumawa ng function `multiply(x: number, y = 1)`  
2. Tawagin ito with one argument at two arguments  
3. Subukang mag-pass ng string at observe TypeScript error

Kapag komportable ka na dito, mas magiging madali ang next topics natin sa objects at custom types. 🔥
