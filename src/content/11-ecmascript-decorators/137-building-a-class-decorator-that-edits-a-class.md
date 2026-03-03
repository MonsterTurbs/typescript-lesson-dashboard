# 137. Building a Class Decorator That Edits a Class 🧱

## Section 11: ECMAScript Decorators

Class decorators can return an updated/replacement class.

## Example

```ts
function logger<T extends new (...args: any[]) => any>(target: T) {
  return class extends target {
    age = 35;
  };
}

@logger
class Person {
  constructor(public name: string) {}

  greet() {
    console.log(`Hi, I am ${this.name}`);
  }
}
```

## What this does

- decorated class gets enhanced
- new instances now include added behavior/data (`age`)
- original functionality can still remain

## Para sa non-developer 👇

Parang default model na nilagyan ng extra package:
- base features intact
- may bagong built-in attribute na agad

## Interactive warm-up 🎯

1. Puwede bang mag-return ng new class ang class decorator?  
2. Bakit useful ang generic constructor typing sa decorator?  
3. Nawa-wipe ba agad lahat ng original methods pag nag-extend ka?

Tamang sagot:
- oo
- para safe at flexible sa iba-ibang class shapes
- hindi (unless intentionally replaced)

## Recap ✅

- Class decorators can enhance class definitions directly
- Powerful pattern for reusable class augmentation
