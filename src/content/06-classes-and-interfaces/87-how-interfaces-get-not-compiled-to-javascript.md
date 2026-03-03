# 87. How Interfaces Get (Not) Compiled to JavaScript 🧼

## Section 6: Classes & Interfaces

Final key reminder: interfaces are TypeScript-only.  
Sa compiled JavaScript output, wala na sila.

## Example insight

TypeScript:

```ts
interface Authenticatable {
  login(): void;
}

class User implements Authenticatable {
  login() {
    console.log("Login");
  }
}
```

JavaScript output concept:
- class code remains
- interface declarations disappear

## Bakit okay ito?

Interfaces are for developer tooling:
- static checking
- autocomplete/intellisense guidance
- compile-time safety

At runtime, JavaScript lang ang tumatakbo.

## Para sa non-developer 👇

Parang design blueprint na ginagamit ng engineers habang gumagawa.  
Kapag finished product na, hindi na kasama ang blueprint sa final output.

## Interactive warm-up 🎯

1. Makikita ba ang `interface` keyword sa generated `.js` files?  
2. Ano ang natitira sa output: class logic o interface definitions?  
3. Runtime ba o compile-time ang main role ng interfaces?

Tamang sagot:
- hindi
- class logic
- compile-time

## Recap 🚀

- Interfaces vanish during compilation
- They still provide huge value during development
- Module complete: classes + interfaces fundamentals unlocked! 🎉
