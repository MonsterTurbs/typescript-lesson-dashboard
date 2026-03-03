# 31. The "never" Type ♾️

## Section 2: TypeScript Basics & Basic Types

May isa pang special function return type sa TypeScript: **`never`**.  
Medyo subtle ang difference niya sa `void`, pero important ito sa tamang scenarios. 🚀

## Quick recap: `void` vs `never` 🤔

- `void` = function finishes, pero walang return value
- `never` = function never really finishes (hal. laging nag-throw ng error)

## Basic example

```ts
function logAndThrow(errorMessage: string): never {
  console.log(errorMessage);
  throw new Error(errorMessage);
}
```

Dito, hindi makakarating sa normal completion ang function
dahil lagi siyang nag-`throw`.

## Interactive warm-up 🔥

Quick check:

1. Kapag function ay action lang at natatapos normally, `void` or `never`?  
2. Kapag function ay laging nag-`throw`, `void` or `never`?  
3. Bakit useful i-declare ang `never` explicitly minsan?

Tamang sagot:
- `void`
- `never`
- para malinaw na walang value na makukuha sa function na iyon

## Another comparison snippet

```ts
function logMessage(msg: string): void {
  console.log(msg);
}

function crash(msg: string): never {
  throw new Error(msg);
}
```

`logMessage` ends normally.  
`crash` does not.

## Paliwanag para sa non-developer 👇

Isipin mo ang dalawang operations:

- Operation A: nag-announce lang, tapos done na (`void`)
- Operation B: nag-trigger ng emergency stop (`never`)

Sa Operation B, walang normal output dahil hindi na siya nakakarating sa end.

## Why this matters 💡

Kapag `never` ang return type:
- mas clear ang intent ng function
- pinipigilan ka ni TypeScript na ituring itong source ng usable value
- mas safe ang control flow sa larger codebases

## Mini mission 💬

1. Gumawa ng `function fail(msg: string): never` na nag-`throw`  
2. Gumawa ng `function notify(msg: string): void` na naglo-log lang  
3. Compare mo behavior nila sa runtime at sa TypeScript type hints

Kapag gets mo ang `never`, mas precise na ang understanding mo sa function behavior sa TypeScript. 🔥
