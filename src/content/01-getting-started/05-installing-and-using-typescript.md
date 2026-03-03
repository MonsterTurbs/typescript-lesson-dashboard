# 5. Installing & Using TypeScript ⚙️

## Section 1: Getting Started

Awesome! Alam mo na na nakakatulong si TypeScript para ma-catch ang errors early. 🎯  
Pero may important truth: **hindi direktang tumatakbo ang `.ts` files sa browser**.

Kaya ang next step ay super important:
**kailangan i-compile ang TypeScript papuntang JavaScript** bago ito ma-run sa browser. 🚀

## Quick interactive check 🔥

Sagutin mo ito mentally:

1. Pwede bang i-import agad ang `.ts` file sa normal browser script?  
2. Ano ang kailangan para gumana ang TypeScript code sa browser?  
3. Aling tool ang gumagawa ng conversion papuntang JavaScript?

Kung sagot mo ay:
- `Hindi`
- `Compilation step`
- `TypeScript compiler (tsc)`

Tama ka! ✅

## Big idea: Why compile? 🧠

TypeScript may extra syntax tulad ng type annotations (`: number`, `: string`),  
at hindi ito standard JavaScript syntax para sa browser.

So ang flow ay:

1. Write TypeScript (`.ts`)
2. Compile gamit `tsc`
3. Makakakuha ka ng JavaScript (`.js`)
4. `js` file ang i-run/i-import sa browser

## Install flow (global approach muna) 🛠️

Para masundan mo ang lesson setup:

1. Install Node.js (LTS) mula sa official site
2. May kasamang `npm` iyon
3. Sa terminal, run mo:

```bash
npm install -g typescript
```

Sa ilang macOS setups, pwedeng kailanganin ang `sudo` kapag may permission error:

```bash
sudo npm install -g typescript
```

## Compile your first TypeScript file 📦

Halimbawa may file kang `calculator.ts`, run mo:

```bash
tsc calculator.ts
```

Magge-generate ito ng `calculator.js` sa project folder.

## Code snippet example

```ts
function deriveFinalPrice(inputPrice: number) {
  return inputPrice + inputPrice * 0.19;
}

const rawInput = '15';
const finalPrice = deriveFinalPrice(Number(rawInput));

console.log(finalPrice);
```

Pagkatapos ng compile, may JS version ka na pwede nang i-run sa browser environment.

## Paliwanag para sa non-developer 👇

Parang ganito:

- Ang TypeScript ay parang document na may special teacher notes
- Ang browser ay marunong lang sa “final clean copy” (JavaScript)
- Si `tsc` ang translator na nag-aalis ng special notes para maging runnable copy

So bago i-play sa browser, dadaan muna sa translation process. 🎬

## What if may error sa TypeScript? 🚨

Kapag may syntax issue, madalas:

- kita mo na agad sa editor (great!)
- at lalabas din error habang nagco-compile gamit `tsc`

Ibig sabihin, mas maaga mong nahuhuli ang problem bago pa pumunta sa production. ✅

## Mini challenge for you 💬

1. Gumawa ng `sample.ts` file na may simple function
2. I-compile gamit `tsc sample.ts`
3. I-open ang generated `sample.js`
4. Compare mo ang `.ts` at `.js` para makita ang difference

Sa next lessons, matututunan mo rin kung paano i-automate ang compilation for bigger projects para hindi mano-mano kada file. 🚀
