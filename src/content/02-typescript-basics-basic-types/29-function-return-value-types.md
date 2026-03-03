# 29. Function Return Value Types 🔁

## Section 2: TypeScript Basics & Basic Types

Nakita mo na ang parameter types sa functions.  
Ngayon, isa pang important part: **return value type**. 🚀

Sa TypeScript, puwede kang maglagay ng return type after ng parameter list:

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

## Ano ang ibig sabihin nito? 🤔

Sa example sa taas:
- `a` at `b` must be `number`
- function must return `number`

Kapag mali ang return mo, mag-eerror si TypeScript.

## Interactive warm-up 🔥

Quick check:

1. Saan nilalagay ang function return type annotation?  
2. Kapag `: number`, puwede bang mag-return ng string?  
3. Sa simple functions, kaya ba i-infer ni TypeScript ang return type?

Tamang sagot:
- after `)` before `{`
- hindi puwede
- yes, kadalasan kaya

## Code snippet: Explicit return type

```ts
function add(a: number, b: number): number {
  return a + b;
}

// function add(a: number, b: number): string {
//   return a + b; // Error: number is not assignable to string
// }
```

## Return type inference (common case)

```ts
function multiply(a: number, b: number) {
  return a * b;
}
```

Dito, kahit walang `: number`, nai-infer na ni TypeScript na `number` ang return type.

## Paliwanag para sa non-developer 👇

Isipin mo ang function na parang machine:

- may input rules (parameter types)
- may output promise (return type)

Kapag sinabi ng machine na number ang ilalabas niya,
hindi puwedeng biglang text ang output.

Ito ang tumutulong para predictable ang flow ng app mo. ✅

## Kailan mag explicit return type? 💡

- kapag gusto mong maging super clear ang function contract
- kapag mas complex na ang function logic
- kapag team convention niyo ang explicit signatures

Sa many simple cases, inference is enough.

## Mini mission 💬

1. Gumawa ng `subtract(a: number, b: number): number`  
2. Gumawa ng version na walang explicit return type  
3. Compare mo kung paano pa rin nakakakuha ng type safety

Kapag gets mo ito, mas magiging confident ka mag-design ng reliable functions sa TypeScript. 🔥
