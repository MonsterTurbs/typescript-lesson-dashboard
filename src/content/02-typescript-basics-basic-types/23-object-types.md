# 23. Object Types 🧱

## Section 2: TypeScript Basics & Basic Types

Arrays at tuples are great, pero sa real-world JavaScript/TypeScript apps,
madalas talaga tayong humahawak ng **objects**. 🚀

Good news: sobrang lakas ni TypeScript pagdating sa object typing.

## Core idea 🎯

Kapag nag-assign ka ng object value, kayang i-infer ni TypeScript ang object type.

```ts
const user = {
  name: 'Max',
  age: 36,
};
```

Dito, naiintindihan ni TypeScript na:
- `name` is `string`
- `age` is `number`

## Explicit object type (optional but useful)

Pwede mo ring ideclare nang explicit ang expected object structure:

```ts
let user: {
  name: string;
  age: number | string;
  hobbies: string[];
  role: {
    description: string;
    id: number;
  };
};
```

Sa puntong ito, required na lahat ng properties sa type definition na iyan.

## Interactive warm-up 🔥

Quick check:

1. Sa object type definition, pwede bang may nested object?  
2. Pwedeng gumamit ng union types sa object properties?  
3. Pwedeng array type inside object?

Tamang sagot: **yes sa lahat**. ✅

## Full assignment example

```ts
let user: {
  name: string;
  age: number | string;
  hobbies: string[];
  role: {
    description: string;
    id: number;
  };
};

user = {
  name: 'Max',
  age: 36,
  hobbies: ['sports', 'cooking'],
  role: {
    description: 'admin',
    id: 5,
  },
};
```

Kung may kulang na property o maling type, mag-eerror agad si TypeScript.

## Paliwanag para sa non-developer 👇

Isipin mo ang object type na parang registration form template:

- may required fields
- bawat field may expected format
- may sub-form pa (nested object) kung kailangan

Kapag may kulang o mali ang format, hindi papayagan.
Kaya mas organized at less error-prone ang data mo. 🛡️

## Why this is powerful 💡

TypeScript support goes deep:
- hanggang nested properties
- hanggang array items sa loob ng object
- at may autocomplete pa sa IDE based sa type definition

Mas mabilis mag-code at mas konti ang bugs sa large projects.

## Mini mission 💬

1. Gumawa ng object type na may `name`, `age`, `skills`, at nested `role`  
2. Mag-assign ng tamang object value  
3. Subukang alisin ang isang required field at observe error  
4. Subukang maglagay ng maling value type sa nested field

Kapag komportable ka na dito, handa ka na sa mas advanced custom types next. 🔥
