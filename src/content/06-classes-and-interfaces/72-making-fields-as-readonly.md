# 72. Making Fields as "readonly" 🧊

## Section 6: Classes & Interfaces

Kung may property na dapat mabasa pero hindi dapat ma-reassign, gamitin ang `readonly`.

## Example

```ts
class User {
  readonly hobbies: string[] = [];
}

const user = new User();
// user.hobbies = ["Sports"]; // error: bawal i-reassign
user.hobbies.push("Sports"); // allowed: mutate existing array
```

## Important nuance

`readonly` blocks reassignment (`=`),  
pero hindi nito laging bina-block ang internal mutation ng object/array.

## Para sa non-developer 👇

Isipin mo:
- `readonly` = bawal palitan ang kahon
- pero puwedeng dagdagan ang laman ng kahon (depende sa type)

Kaya kailangan mo pa rin maging maingat sa mutable data structures.

## Interactive warm-up 🎯

1. Ano ang bawal sa `readonly`: reassignment o push?  
2. Bakit gumagana pa rin minsan ang `push` sa readonly array property?  
3. Kailan useful ang `readonly`?

Tamang sagot:
- reassignment
- dahil same array object pa rin ang mina-mutate
- kapag kailangan stable reference/value assignment

## Recap 🚀

- `readonly` protects property reassignment
- Hindi automatic deep-freeze ng nested data
- Great for predictable class state
