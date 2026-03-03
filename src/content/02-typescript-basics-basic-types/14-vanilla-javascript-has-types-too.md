# 14. Vanilla JavaScript Has Types, Too! 🟨

## Section 2: TypeScript Basics & Basic Types

Important lesson ito:  
**Hindi exclusive sa TypeScript ang “types”.**  
May types din ang plain JavaScript (vanilla JS). ✅

Ang TypeScript-specific ay:
- explicit type assignments (`: string`, `: number`, etc.)
- mas strict type checking habang nagsusulat ka pa lang ng code

## Quick side note muna 📝

Kapag nag-a-annotate ka ng type sa TypeScript, gamitin mo:
- `string` (lowercase)
- `number`
- `boolean`

Hindi recommended ang uppercase variants para sa ganitong use case.

## Interactive warm-up 🔥

Quick check:

1. May concept ba ng types sa plain JavaScript?  
2. Anong JS operator ang ginagamit para malaman ang type ng value?  
3. Alin ang TypeScript-only feature: `typeof` o explicit type assignment?

Kung sagot mo ay:
- `Yes`
- `typeof`
- `explicit type assignment`

Perfect! 💯

## Code snippet 1: Vanilla JS type check

```js
const username = 'Max';
console.log(typeof username); // string
```

Ito ay pure JavaScript. Walang TypeScript dito.
Pero na-detect pa rin ng JS na string ang value.

Run command:

```bash
node vanilla-js-types.js
```

## Code snippet 2: TypeScript explicit assignment

```ts
let username: string;
username = 'Max';

// Error kung mali ang type:
// username = 123;
```

Dito papasok si TypeScript:
- pwede mong ideclare nang malinaw ang expected type
- nagbibigay agad ng error kapag mali ang assignment

## Paliwanag para sa non-developer 👇

Isipin mo na lahat ng items may “category” kahit walang label:

- mansanas = fruit
- sabon = cleaning item

Ganun din sa JavaScript values: may types sila by nature.

Si TypeScript naman, naglalagay ng **explicit labels** sa containers mo
at binabantayan kung tama ang nilalagay mong item.

So:
- JavaScript = may categories na
- TypeScript = may labels + stricter checking + early warnings 🛡️

## Why this matters 💡

Kapag naiintindihan mo ito, mas magiging clear sa'yo na:

1. TypeScript is built on top of JavaScript
2. Hindi bagong language from scratch ang feeling
3. Ang malaking value ng TypeScript ay safety at clarity habang nagde-develop

## Mini mission 💬

1. Gumawa ng `.js` file at gumamit ng `typeof` sa iba’t ibang values  
2. Gumawa ng `.ts` file at maglagay ng explicit type assignments  
3. Compare mo ang behavior at errors

Dito mo makikita nang practical ang difference ng JavaScript vs TypeScript workflow. 🚀
