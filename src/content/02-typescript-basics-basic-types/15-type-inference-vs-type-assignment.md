# 15. Type Inference vs Type Assignment ⚖️

## Section 2: TypeScript Basics & Basic Types

Sa TypeScript, may dalawang important concepts:

- **Type Assignment / Type Annotation**: ikaw mismo ang nagse-set ng type
- **Type Inference**: si TypeScript ang humuhula ng type base sa initial value

Parehong useful, pero may tamang paggamit bawat isa. 🚀

## Ano ang Type Assignment? 🧩

Ito yung explicit syntax na may colon:

```ts
let username: string;
username = 'Max';
```

Ginagamit ito lalo na kapag walang initial value ang variable.

## Ano ang Type Inference? 🔍

Kapag may initial value, automatic na nai-infer ni TypeScript ang type:

```ts
let userAge = 32;
```

Dito, automatic na `number` ang type ni `userAge`.
Kaya kung gawin mo ito:

```ts
// Error: Type 'string' is not assignable to type 'number'
// userAge = '32';
```

may warning/error agad si TypeScript. ✅

## Interactive warm-up 🔥

Quick check:

1. Kapag walang initial value, ano ang recommended?  
2. Kapag may clear initial value, inference or explicit annotation?  
3. Saan dapat nilalagay ang `: type`?

Tamang sagot:
- explicit annotation kapag walang initial value
- inference kapag may initial value
- right after variable name

## Best practice rule of thumb 💡

1. **No initial value** → mag explicit type assignment  
2. **May initial value** → trust TypeScript inference (usually best)  
3. Mag explicit lang kahit may initial value kung may strong reason ka

Goal: clear code without unnecessary noise. ✨

## Paliwanag para sa non-developer 👇

Isipin mo may registration form:

- Kung walang laman pa ang field, kailangan mong sabihin kung anong klaseng info ang ilalagay (`text`, `number`, etc.)
- Kung may sample value na, kayang hulaan ng system kung anong klaseng data iyon

Ganun si TypeScript:
- minsan kailangan ng manual label
- minsan smart enough na siyang mag-infer ng tamang type

## Mini challenge 💬

1. Gumawa ng `let city: string;` then assign value later  
2. Gumawa ng `let score = 100;`  
3. Subukang i-assign string sa `score` at observe ang error  
4. Ibalik sa tamang value type

Kapag na-practice mo ito, magiging natural na sa’yo kung kailan inference vs annotation. 🔥
