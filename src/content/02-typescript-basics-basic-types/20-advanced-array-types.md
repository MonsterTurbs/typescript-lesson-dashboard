# 20. Advanced Array Types 🧠

## Section 2: TypeScript Basics & Basic Types

Sa previous lesson, nakita mo na puwedeng i-infer ni TypeScript ang array types.  
Ngayon, itataas natin ang level: **explicit array type assignments**, lalo na kapag walang initial value. 🚀

## Kailan dapat explicit? 🎯

Kapag may variable ka na walang starting value, magandang mag-assign ka agad ng type:

```ts
let users: string[];
users = ['max', 'anna'];
```

Dito, clear kay TypeScript na `users` ay array ng strings.

## What if mixed string and number values? 🔗

Pwede rin yan gamit ang union type sa loob ng array:

```ts
let users: (string | number)[];
```

Ibig sabihin:
- array ito
- bawat item puwedeng `string` or `number`

## Interactive warm-up 🔥

Quick check:

1. Ano ang type para sa array ng strings lang?  
2. Ano ang type para sa array na string or number items?  
3. Bakit useful ito kapag walang initial value?

Tamang sagot:
- `string[]`
- `(string | number)[]`
- para malinaw agad ang allowed data structure

## Code snippet: Advanced array typing in action

```ts
let users: (string | number)[];

users = ['max', 'anna']; // allowed
users = [101, 202]; // allowed
users = ['max', 101, 'anna', 202]; // allowed

// users = [true, 'max']; // Error: boolean is not assignable
```

## Paliwanag para sa non-developer 👇

Isipin mo na may guest list ka:

- puwedeng pangalan (`string`)
- puwedeng ID number (`number`)

Pero hindi puwedeng random ibang format gaya ng `true`.

Ganun gumagana ang `(string | number)[]`:
flexible pero controlled pa rin ang laman ng list. ✅

## Key takeaway 💡

Array types in TypeScript are combinations of:

1. container type (`array`)
2. item type(s) sa loob (`string`, `number`, or union)

Kapag mas malinaw ang type mo, mas less bugs at mas predictable ang behavior ng app.

## Mini mission 💬

1. Gumawa ng `let products: string[];` at mag-assign ng values  
2. Gumawa ng `let userRefs: (string | number)[];`  
3. Subukang maglagay ng boolean value at i-observe ang error

Kapag nakuha mo ito, mas handa ka na sa mas complex object at custom type combinations. 🔥
