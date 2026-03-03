# 71. Making Sense of "public" and "private" 🔐

## Section 6: Classes & Interfaces

`public` at `private` ay access modifiers para kontrolado kung saan puwedeng ma-access ang properties.

## Example

```ts
class User {
  public hobbies: string[] = [];

  constructor(public name: string, private age: number) {}

  showAge() {
    console.log(this.age); // allowed (inside class)
  }
}

const user = new User("Max", 36);
user.name = "Ana"; // allowed
// console.log(user.age); // error (private)
```

## Key rules

- `public` = accessible inside and outside class
- `private` = accessible only inside the class
- property without modifier (outside constructor) is public by default

## Para sa non-developer 👇

Parang office access:
- `public` = lobby, puwedeng puntahan ng iba
- `private` = manager room, internal use lang

Mas secure at controlled ang data handling.

## Interactive warm-up 🎯

1. Alin ang puwedeng i-access outside class: `private` o `public`?  
2. Bakit useful ang `private`?  
3. Required ba laging isulat ang `public` sa property declaration?

Tamang sagot:
- `public`
- para i-protect internal data from direct external changes
- hindi, default public usually kapag omitted

## Recap ✅

- Access modifiers control visibility
- Use `private` for sensitive/internal state
- Use `public` for intended external access
