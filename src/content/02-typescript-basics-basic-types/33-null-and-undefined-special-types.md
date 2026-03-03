# 33. null & undefined - Special Types 🧪

## Section 2: TypeScript Basics & Basic Types

May dalawang special types sa TypeScript na dapat mong kilalanin:
**`null`** at **`undefined`**.  
Hindi sila function-only types tulad ng `void`; puwede sila sa variables at iba pang places. 🚀

## Basic idea 🤔

Kapag ginawa mo ito:

```ts
let a: null;
a = null; // allowed
// a = 'hello'; // Error
```

Technically valid, pero bihirang useful mag-isa.

Mas useful sila kapag kasama sa union types.

## Practical union usage

```ts
let username: string | null;

username = 'Max'; // allowed
username = null; // allowed
// username = undefined; // Error
```

At kung gusto mo namang undefined:

```ts
let nickname: string | undefined;

nickname = 'M';
nickname = undefined; // allowed
// nickname = null; // Error
```

## Interactive warm-up 🔥

Quick check:

1. Magkapareho ba ang `null` at `undefined`?  
2. Sa `string | null`, allowed ba ang `undefined`?  
3. Kailan useful idagdag ang `null` sa type?

Tamang sagot:
- hindi
- hindi
- kapag kailangan mong i-clear/reset ang value intentionally

## Paliwanag para sa non-developer 👇

Isipin mo:

- `null` = sinadya mong i-clear ang laman (intentional empty)
- `undefined` = wala pang value na na-set

Magkaibang status sila, kaya magkaiba rin sa type system.

## Why this matters 💡

Kapag tama ang paggamit mo ng `null`/`undefined` sa types:
- mas clear ang state ng data
- less hidden bugs sa “missing value” scenarios
- mas predictable ang app logic

## Mini mission 💬

1. Gumawa ng `let selectedUser: string | null = null`  
2. Pag may value na, set to string  
3. I-reset ulit sa `null`  
4. Gumawa rin ng `let draft: string | undefined` at compare behavior

Kapag gets mo ang difference nila, mas magiging clean at reliable ang state handling mo sa TypeScript. 🔥
