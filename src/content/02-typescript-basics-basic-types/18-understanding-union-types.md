# 18. Understanding Union Types 🔗

## Section 2: TypeScript Basics & Basic Types

Sa previous lesson, nakita mo na flexible si `any` pero risky siya.  
Ngayon, eto ang mas magandang alternative: **Union Types**. 🚀

## Ano ang Union Type? 🤔

Union type means puwedeng tumanggap ang variable ng isa sa ilang specific types.

Example:

```ts
let age: string | number;
```

Ibig sabihin:
- allowed ang `string`
- allowed ang `number`
- hindi allowed ang ibang types maliban dito

## Bakit mas okay ito kaysa `any`? ✅

`any` accepts everything.  
Union type accepts only the types na pinili mo.

So may flexibility ka pa rin, pero may guardrails pa rin si TypeScript. 🛡️

## Interactive warm-up 🔥

Quick check:

1. Ano ang symbol na ginagamit para sa union types?  
2. Kung `string | number`, allowed ba ang `boolean`?  
3. Mas controlled ba ito kaysa `any`?

Tamang sagot:
- pipe symbol `|`
- hindi allowed ang `boolean`
- yes, mas controlled

## Code snippet: Practical union example

```ts
let age: string | number = 36;

age = '37'; // allowed
age = 38; // allowed

// age = false; // Error
// age = { years: 39 }; // Error
// age = [40]; // Error
```

Pwede ka ring magdagdag ng mas maraming types kung kailangan:

```ts
let input: string | number | null;
input = 'Hello';
input = 123;
input = null;
```

## Paliwanag para sa non-developer 👇

Isipin mo may access pass ka na valid lang sa 2 rooms:

- Room A (`string`)
- Room B (`number`)

Kapag nag-try ka pumasok sa ibang room (`boolean`, `object`, `array`),
automatic kang haharangin.

Ganun ang union type: flexible pero may malinaw pa ring boundaries. 🎯

## Best practice reminder 💡

- Kung isang type lang talaga ang kailangan, stay specific
- Kung dalawa o higit pang known types ang needed, use union types
- Iwasan ang `any` hangga’t kaya

## Mini mission 💬

1. Gumawa ng variable `userInput: string | number`  
2. Mag-assign ng valid values (`'42'`, `42`)  
3. Subukang mag-assign ng `true` at observe TypeScript error

Kapag nakuha mo ito, mas magiging confident ka sa pag-handle ng flexible data without losing safety. 🔥
