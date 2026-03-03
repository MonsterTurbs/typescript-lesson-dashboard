# 22. Making Sense of Tuples 🎯

## Section 2: TypeScript Basics & Basic Types

Related sa arrays, may special type si TypeScript na sobrang useful sa fixed structure data:
**Tuple**. 🚀

Tuple = array na:
- fixed ang length
- fixed ang expected type per position

## Bakit hindi sapat lagi ang `number[]`? 🤔

Kung ganito lang:

```ts
let possibleResults: number[];
```

Puwede kang maglagay ng:

```ts
possibleResults = [1, -1]; // allowed
possibleResults = [5, 10, 12]; // allowed din
```

Problem: sobrang broad nito kung exactly 2 values lang ang gusto mo.

## Tuple to the rescue 🛟

```ts
let possibleResults: [number, number];

possibleResults = [1, -1]; // allowed
// possibleResults = [5, 10, 12]; // Error (too many values)
```

Dito, sinabi mo kay TypeScript na:
- exactly dalawang values lang
- parehong `number`

## Mixed tuple types example

```ts
let userInfo: [number, string];

userInfo = [101, 'Max']; // allowed
// userInfo = ['Max', 101]; // Error (wrong order/type)
// userInfo = [101, 'Max', true]; // Error (extra value)
```

## Interactive warm-up 🔥

Quick check:

1. Ano ang difference ng `number[]` vs `[number, number]`?  
2. Sa tuple na `[number, string]`, anong type ang nasa 2nd position?  
3. Puwede ba ang extra 3rd value?

Tamang sagot:
- `number[]` = flexible length, tuple = fixed length/positions
- `string`
- hindi puwede

## Paliwanag para sa non-developer 👇

Isipin mo ang tuple bilang form na may exact slots:

- Slot 1: number lang
- Slot 2: text lang

Hindi ka puwedeng magdagdag ng extra slot,
at hindi puwedeng ipagpalit ang expected format ng bawat slot.

So tuple gives you stricter structure kaysa normal arrays. ✅

## Key takeaway 💡

Gamitin ang tuples kapag:
- alam mo ang exact number of items
- alam mo rin ang exact type per position

Perfect ito para sa data na may strict format.

## Mini mission 💬

1. Gumawa ng `let coordinates: [number, number]`  
2. Mag-assign ng valid value (`[14.5, 120.9]`)  
3. Subukang mag-assign ng kulang/sobra/maling types at observe errors

Kapag gets mo na ang tuples, mas magiging clear ang pag-design mo ng structured data sa TypeScript. 🔥
