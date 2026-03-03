# 70. A Useful TypeScript Shortcut & Compiling to JavaScript ✨

## Section 6: Classes & Interfaces

May shortcut si TypeScript para hindi ka mag-write ng paulit-ulit na field assignments.

## Constructor parameter properties

```ts
class User {
  constructor(public name: string, public age: number) {}
}

const max = new User("Max", 36);
const fred = new User("Fred", 29);

console.log(max, fred);
```

## Ano nangyari dito?

Sa `public name: string` at `public age: number`:
- auto-create ng class properties
- auto-assign ng constructor inputs

Less boilerplate, same result. ✅

## Compile and run

```bash
tsc
node basics.js
```

Makikita mo object output na may `name` at `age`.

## Para sa non-developer 👇

Parang one-line form mapping ito:
- "field name" + "input value"
- automatic na nilalagay sa record

Kaya mas maikli ang code pero same functionality.

## Interactive warm-up 🎯

1. Ano role ng `public` sa constructor parameters dito?  
2. Kailangan pa ba ng manual `this.name = name` kapag ganito?  
3. Anong command para i-run compiled JS file?

Tamang sagot:
- auto-property creation + assignment
- hindi na
- `node <file>.js`

## Recap 🚀

- Parameter property syntax removes repetitive code
- `new User(...)` still works like regular JS class instantiation
- TypeScript compiles to normal JavaScript output
