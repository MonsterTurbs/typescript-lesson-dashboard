# 32. Functions As Types 🧩

## Section 2: TypeScript Basics & Basic Types

Sa JavaScript, functions ay values din.  
Puwede mo silang i-store, ipasa sa ibang function, at ilagay sa objects.  
Sa TypeScript, puwede mo ring i-type ang mismong shape ng function na ito. 🚀

## Function type syntax

Kapag callback ang expected mo, ganito ang type:

```ts
(msg: string) => void
```

Meaning:
- function ito
- may isang parameter na `string`
- walang return value (`void`)

## Callback example

```ts
function performJob(cb: (msg: string) => void) {
  // pretend may async job dito
  cb('Job done');
}

function log(message: string) {
  console.log(message);
}

performJob(log);
```

Basta match ang shape ng function, puwedeng ipasa.

## Interactive warm-up 🔥

Quick check:

1. Sa `(msg: string) => void`, ilan ang expected params?  
2. Puwede bang number parameter ang ipasa kung string ang expected?  
3. Kailangan bang pareho ang parameter name sa callback type at actual function?

Tamang sagot:
- isa
- hindi puwede
- hindi kailangan magkapareho ang name

## Function type inside object type

```ts
type User = {
  name: string;
  age: number;
  greet: (message: string) => string;
};

const user: User = {
  name: 'Max',
  age: 36,
  greet(message) {
    console.log(message);
    return this.name;
  },
};

user.greet('Hello there!');
```

Dito, `greet` ay method na may required function shape.

## Paliwanag para sa non-developer 👇

Isipin mo ang callback function na parang “instruction card”:

- sinasabi nito kung anong input tatanggapin
- at anong klaseng output (kung meron) ang ibabalik

Kapag mali ang instruction format, hindi papayagan ni TypeScript.
Result: mas predictable at mas safe ang collaboration sa team. ✅

## Why this matters 💡

- clearer contracts for callbacks
- safer object methods
- better autocomplete at fewer runtime surprises

## Mini mission 💬

1. Gumawa ng function `runTask(cb: (result: string) => void)`  
2. Gumawa ng dalawang callback: isang valid, isang invalid shape  
3. Gumawa ng type na may method property using function type

Kapag komportable ka dito, mas madali mo nang maiintindihan advanced patterns tulad ng higher-order functions at typed APIs. 🔥
