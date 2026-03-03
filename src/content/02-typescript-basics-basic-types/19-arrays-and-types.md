# 19. Arrays & Types 🧺

## Section 2: TypeScript Basics & Basic Types

Union types help kapag maraming possible **value types**.  
Pero paano kung maraming **values** ang kailangan mong i-store?  
Dito papasok ang arrays, at mas lalong useful si TypeScript. 🚀

## Core idea ng lesson 🎯

Kapag gumawa ka ng array na puro strings, kayang maintindihan ni TypeScript na:

- array ito
- at ang laman nito ay strings lang

Kaya kapag nag-try kang magpasok ng number, mag-eerror agad. ✅

## Interactive warm-up 🔥

Quick check:

1. Kung `['sports', 'cooking']` ang array, anong inferred type nito?  
2. Puwede bang mag-`push(10)` sa array na string-only?  
3. Bakit helpful ito sa real projects?

Tamang sagot:
- `string[]`
- hindi puwede
- para maiwasan ang maling data sa list

## Code snippet: Array inference in action

```ts
const hobbies = ['sports', 'cooking'];

hobbies.push('reading'); // allowed
// hobbies.push(10); // Error: number is not assignable to string
```

Sa snippet na ito, na-infer ni TypeScript na `hobbies` ay `string[]`.
Kaya automatic protected ka laban sa maling type.

## Explicit array type (optional)

Pwede mo rin itong isulat nang explicit:

```ts
const hobbies: string[] = ['sports', 'cooking'];
```

Valid ito, pero kung clear naman ang initial values, kadalasan enough na ang inference.

## Paliwanag para sa non-developer 👇

Isipin mo na may basket na may label na “Strings only”.

- puwede ang `"sports"`
- puwede ang `"cooking"`
- bawal ang `10` dahil number iyon

Ganun gumagana ang TypeScript arrays:
pinoprotektahan niya ang laman ng collection para consistent ang data mo. 🛡️

## Why this matters 💡

Hindi lang simple variables ang chine-check ni TypeScript.
Pati structured data tulad ng arrays, naiintindihan niya nang maayos.

At habang lumalaki ang app mo, sobrang laking tulong nito para less bugs at mas stable logic.

## Mini mission 💬

1. Gumawa ng `const skills = ['TypeScript', 'React']`  
2. Mag-`push` ng another string  
3. Subukang mag-`push` ng number at observe error  
4. Try mo ring gumawa ng explicit `string[]` version

Kapag na-practice mo ito, mas magiging madali ang next step natin sa objects at mas complex data structures. 🔥
