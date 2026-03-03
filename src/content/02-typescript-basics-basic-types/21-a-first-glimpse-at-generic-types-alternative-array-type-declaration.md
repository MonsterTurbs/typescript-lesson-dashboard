# 21. A First Glimpse at Generic Types - Alternative Array Type Declaration 🧪

## Section 2: TypeScript Basics & Basic Types

Alam mo na ang common array type syntax:

```ts
let users: (string | number)[];
```

Valid ito at very intuitive. ✅  
Pero may **alternative syntax** ka ring makikita sa ibang projects:

```ts
let users: Array<string | number>;
```

Pareho lang ang meaning ng dalawang ito. 🚀

## Ano ang idea sa likod nito? 🤔

`Array<...>` ay example ng **generic type**.
Mas advanced topic ito na aaralin pa natin nang mas malalim later,
pero ngayon ang important takeaway:

- `T[]` and `Array<T>` are both valid
- parehong nagde-describe ng array + item types

## Interactive warm-up 🔥

Quick check:

1. Pareho ba ang `string[]` at `Array<string>`?  
2. Pareho ba ang `(string | number)[]` at `Array<string | number>`?  
3. Alin ang mas madalas mong makita sa codebase mo?

Tamang sagot sa #1 at #2: **Yes, equivalent sila.** 💯

## Side-by-side example

```ts
let usernamesA: string[];
let usernamesB: Array<string>;

usernamesA = ['max', 'anna'];
usernamesB = ['max', 'anna'];
```

With union values:

```ts
let usersA: (string | number)[];
let usersB: Array<string | number>;

usersA = ['max', 101];
usersB = ['anna', 202];
```

## Paliwanag para sa non-developer 👇

Parang pareho lang ito ng:

- “List of names”
- “Name list”

Magkaiba ang wording, pero same idea.

Ganun din sa TypeScript:
- `T[]` = short style
- `Array<T>` = generic style

Same result, same rules, same safety checks. 🛡️

## Kailan gagamitin alin? 💡

- Kung gusto mo concise syntax, gamitin `T[]`
- Kung mas readable sa team mo ang generic form, gamitin `Array<T>`

Most important: maging consistent sa style ng project mo.

## Mini mission 💬

1. Gumawa ng dalawang variables: isa `T[]`, isa `Array<T>`  
2. Lagyan ng same values  
3. Subukang maglagay ng invalid item type at observe ang parehong error behavior

Kapag komportable ka na dito, mas madali mo nang maiintindihan ang advanced generics sa mga susunod na lessons. 🔥
