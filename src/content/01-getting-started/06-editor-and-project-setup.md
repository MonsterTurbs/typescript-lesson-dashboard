# 6. Editor & Project Setup 🧰

## Section 1: Getting Started

Sa previous lessons, napansin mo na mostly **Visual Studio Code (VS Code)** ang gamit natin.  
Good news: pwede ka pa rin gumamit ng ibang editor na komportable ka. 🙌

Pero kung naghahanap ka ng recommendation:
**VS Code is a great choice** dahil free siya at may built-in TypeScript support. 💙

## Bakit magandang choice ang VS Code? 🚀

- Free gamitin
- Available sa Windows, macOS, at Linux
- May strong TypeScript support out of the box
- Beginner-friendly pero pang-pro din ang features

Download mo dito: `code.visualstudio.com`

## Interactive warm-up 🔥

Quick check:

1. May code editor ka na bang ginagamit ngayon?
2. Nakikita mo ba agad ang errors habang nagta-type?
3. Gusto mo bang mas mabilis ang feedback habang nag-aaral?

Kung oo ang sagot mo sa #3, sobrang helpful ng TypeScript + VS Code combo. ✅

## Project setup style sa course na ito 📁

Sa maraming lessons, simple lang ang setup:

1. Start tayo sa empty (or almost empty) folder
2. Magdadagdag tayo ng `.ts` files step by step
3. Mag-eexplore tayo ng TypeScript features habang lumalalim ang lessons

At minsan, **hindi muna tayo magco-compile agad**, dahil editor pa lang nagbibigay na ng useful errors at hints.

## Code snippet: Type checking inside the editor

```ts
function greetLearner(name: string) {
  return `Welcome, ${name}! Ready ka na ba sa TypeScript?`;
}

const learnerName = 123;

// Makikita mo agad sa editor ang issue dito:
// Argument of type 'number' is not assignable to parameter of type 'string'
console.log(greetLearner(learnerName));
```

## Paliwanag para sa non-developer 👇

Parang smart assistant si editor:

- Sinabi ng function na text (`string`) ang kailangan niya
- Number (`123`) ang naipasa natin
- Bago pa i-run ang app, editor pa lang nagsasabi na may mismatch

Result: mas maagang fix, mas less bugs, mas less stress. 😄

## Kapag may prepared project setup 📦

May ilang sections na may ready-made project files.
Kapag ganun, makikita mo iyon sa start ng section/lecture para sabay ka pa rin sa flow.

Pero sa karamihan ng topics, simple folder + gradual file additions pa rin ang style para klaro at focused ang learning. 🎯

## Mini mission for you 💬

1. Gumawa ng bagong empty folder
2. Buksan sa VS Code
3. Mag-create ng `app.ts`
4. Kopyahin ang snippet sa itaas at tingnan ang editor feedback

Ganito magsisimula ang maraming exercises natin moving forward. Let’s go! 🚀
