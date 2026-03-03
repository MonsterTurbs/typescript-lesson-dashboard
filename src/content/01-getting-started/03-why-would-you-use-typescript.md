# 3. Why Would You Use TypeScript? 🛡️

## Section 1: Getting Started

Ngayong alam mo na kung ano ang TypeScript,
sagutin natin ang big question:
Bakit mo ito gagamitin sa real projects? 🤔

## Interactive warm-up 🔥

Imagine may simple website ka with:
- form input para sa price
- button para i-calculate ang final price
- logic na nag-aadd ng 19% tax

Question:
Kung input mo ay `15`, dapat tama ang lalabas na final value, diba?
Pero paano kung mali ang result? 🚨

## Real-world bug scenario 🧪

Sa example, may `calculator.js` file na kumukuha ng value mula sa input field.
Problem: ang value galing input ay string by default sa JavaScript.

Kapag hindi na-convert sa number,
pwedeng string concatenation ang mangyari instead of proper math.

Result: maling output kahit mukha namang tama ang computation logic.

## Saan papasok si TypeScript? ⚙️

Sa `calculator.ts`, pwede kang maglagay ng type annotation.
Example: pwede mong ideclare na ang `inputPrice` ay dapat number.

Kapag string ang naipasa,
magbibigay agad ng error si TypeScript sa IDE.

Ito ang malaking win:
nahuhuli mo ang mistake bago pa i-run o i-test ang website. ✅

## Mini code snippet preview

```ts
function deriveFinalPrice(inputPrice: number) {
  return inputPrice + inputPrice * 0.19;
}

const extractedInput = '15';

// Error: string ang extractedInput, number ang expected
// const finalPrice = deriveFinalPrice(extractedInput);

const finalPrice = deriveFinalPrice(Number(extractedInput));
console.log(finalPrice);
```

```txt
17.85
```

## Paliwanag para sa non-developer 👇

Isipin mo na ang function ay machine na tumatanggap lang ng tamang token.

- `number` token lang ang valid
- ang `'15'` ay text token pa rin
- ang `15` ang tunay na number token

Kapag maling token ang pinasok,
si TypeScript mag-aalert agad para hindi ka makarating sa maling output.

Parang quality checker siya bago pa umandar ang production line. 🧠

## Bakit malaking advantage ito? 🎯

Dahil sa early error detection:
- mas mabilis ang development flow
- mas kaunti ang bugs
- mas less time sa debugging
- mas reliable ang final app

At habang nagpapatuloy ka sa course,
unti-unti mong mamaster ang TypeScript features na ito step by step. 🚀

## Quick challenge for you 💬

1. Subukan mong alisin ang `Number(...)` conversion.
2. Observe mo ang TypeScript error sa editor.
3. Ibalik mo ang conversion at i-check ulit output.

Ganito mo mararamdaman agad bakit useful si TypeScript sa actual coding work. 🔥
