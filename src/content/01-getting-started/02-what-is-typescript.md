# 2. What is TypeScript? 🤔

## Section 1: Getting Started

So what is TypeScript, at bakit mo ito gagamitin?
Bakit ito helpful sa coding journey mo? 💡

Simple answer:
TypeScript is JavaScript with syntax for types.
Mukhang technical pakinggan, pero very practical ang benefit niya. ✅

## Interactive warm-up 🔥

Quick activity muna:

1. Kapag may bug sa code mo, mas gusto mo ba na ma-detect agad?
2. Gusto mo ba ng mas malinaw na rules sa data na ginagamit mo?
3. Kung yes, malaking tulong sa'yo ang TypeScript.

## Ano ang TypeScript sa madaling salita? 🧠

TypeScript is a JavaScript superset.
Ibig sabihin:
- JavaScript pa rin ang foundation
- lahat ng JS basics mo usable pa rin
- may extra syntax lang for better type safety

Parang JavaScript na may smart safety rails habang nagco-code ka. 🛡️

## Ano ang extra feature na mahalaga? ⚙️

TypeScript adds strict and static typing.
Ibig sabihin pwede mong idefine kung anong type ng value ang expected sa isang place.

Example:
kung number ang kailangan ng function,
hindi puwedeng basta string ang ipasa nang walang warning.

## Mini code snippet preview

```ts
function deriveFinalPrice(inputPrice: number) {
  return inputPrice + inputPrice * 0.19;
}

const fromInput = '15';

// Kapag ito ginamit, mag-eerror si TypeScript dahil string ang value
// const result = deriveFinalPrice(fromInput);

const result = deriveFinalPrice(Number(fromInput));
console.log(result);
```

## Paliwanag para sa non-developer 👇

Isipin mo may calculator ka na tumatanggap lang ng number.

- `'15'` ay text pa rin kahit mukhang number
- `15` ay tunay na number value

Kapag text ang pinasok mo sa math operation,
pwedeng mali ang result.

Ginagawa ni TypeScript:
- chine-check niya agad kung tama ang value type
- nagbibigay siya ng warning bago mo pa i-run ang app

Resulta: mas less bugs, mas mabilis ang troubleshooting, mas smooth ang development flow. 🚀

## Bakit useful ang TypeScript sa totoong projects? 🎯

Dahil nahuhuli mo ang type-related mistakes early,
mas reliable ang code mo habang lumalaki ang app.

At dahil JavaScript-based pa rin siya,
hindi ka magsisimula from scratch.
Upgrade ito, hindi reset. 🔥
