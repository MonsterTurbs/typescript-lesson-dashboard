# 12. Project Setup 🧱

## Section 2: TypeScript Basics & Basic Types

Para makapag-focus tayo sa TypeScript essentials, simple setup lang muna tayo:
**bagong empty folder + TypeScript files + Node.js execution**. 🚀

Sa section na ito, hindi muna tayo gagawa ng full website UI
dahil ang goal natin ay maintindihan ang core TypeScript features first.

## Bakit ganito ang setup? 🤔

Kung may HTML/CSS/UI agad, madadagdagan ang distractions.
Kaya dito:

- write tayo ng code sa `.ts` files
- compile to `.js`
- run gamit Node.js

Mas clean ang workflow, mas mabilis makita ang TypeScript concepts. ✅

## Interactive warm-up 🔥

Quick check:

1. Ano ang extension ng TypeScript file?  
2. Ano ang command para i-compile ang `basics.ts`?  
3. Ano ang command para i-run ang generated JS file?

Kung sagot mo ay `.ts`, `tsc basics.ts`, at `node basics.js`, solid ka na. 💯

## Step-by-step setup flow ⚙️

1. Gumawa ng bagong empty project folder  
2. Gumawa ng file: `basics.ts`  
3. Maglagay ng starter code  
4. Compile:

```bash
tsc basics.ts
```

5. Run gamit Node.js:

```bash
node basics.js
```

## Code snippet (starter example)

```ts
const message = 'Hello from TypeScript basics!';
console.log(message);
```

Kapag kinompile mo ito, magiging `basics.js` file na almost same ang code
dahil wala pang TypeScript-specific syntax sa example na ito.

## Paliwanag para sa non-developer 👇

Parang ganito ang proseso:

- `.ts` file = draft na may extra TypeScript intelligence
- `tsc` = translator papuntang browser/JS-friendly version
- `.js` file = final executable version
- `node basics.js` = pinapatakbo mo ang final version sa system mo

Simple pipeline muna para mas klaro ang fundamentals. 🎯

## Important reminder 💡

Kahit Node.js ang gamit natin sa section na ito,
ang matututunan mong core TypeScript syntax ay transferable pa rin:

- web apps
- Node.js backends
- Bun environments

Same core concepts, different runtime lang. 🙌

## Mini mission for you 💬

1. Create `basics.ts`
2. I-run ang `tsc basics.ts`
3. I-run ang `node basics.js`
4. Baguhin ang message at ulitin

Ganito magsisimula ang hands-on practice natin sa TypeScript essentials. Let’s go! 🔥
