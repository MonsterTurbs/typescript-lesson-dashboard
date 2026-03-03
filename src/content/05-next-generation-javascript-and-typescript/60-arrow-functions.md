# 60. Arrow Functions 🏹

## Section 5: Next-generation JavaScript & TypeScript

Next-gen JS gave us **arrow functions** para mas concise at readable ang functions natin. ⚡

## From regular function to arrow function

```ts
// Regular
function add(a: number, b: number) {
  return a + b;
}

// Arrow
const addArrow = (a: number, b: number) => {
  return a + b;
};
```

## Super short version (implicit return)

Kung isang expression lang ang body, pwede i-shorten:

```ts
const addShort = (a: number, b: number) => a + b;
```

Automatic na may `return` dito kahit di nakasulat.

## Single parameter shortcut

```ts
const printOutput = (output: string | number) => console.log(output);
```

Kapag isang parameter lang, puwedeng minsan alisin ang parentheses sa plain JS.  
Sa TypeScript, kadalasan kailangan mo pa rin sila kapag may type annotation.

## Perfect for callbacks (event listeners)

```ts
const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => {
    console.log("Na-click!", event.type);
  });
}
```

## Para sa non-developer 👇

Arrow function = mas maikling paraan para magsabi ng:
"Kapag may ginawa ka (e.g. click), ito ang gagawin kong action."

Parang quick instruction card:
- input -> action -> output

## Interactive warm-up 🎉

1. Kailan puwedeng alisin ang `{}` at `return` sa arrow function?  
2. Saan madalas gamitin ang arrow functions?  
3. Ano output ng `const add = (a, b) => a + b;` kapag `add(2, 5)`?

Tamang sagot:
- kapag iisang expression lang ang function body
- sa callbacks (events, array methods, etc.)
- `7`

## Recap 🚀

- Arrow functions are shorter and cleaner
- May implicit return kung one-expression body
- Great fit for callback-style code
