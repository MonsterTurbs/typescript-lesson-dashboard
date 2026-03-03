# 108. Working with Generic Classes & Interfaces 🧩

## Section 8: Generic Types

Generics work almost anywhere na nagde-define ka ng types: class, interface, alias, function.

## Generic class example

```ts
class User<T> {
  constructor(public id: T) {}
}

const user1 = new User("abc-123"); // User<string>
const user2 = new User(42);        // User<number>
```

## Generic interface example

```ts
interface Box<T> {
  value: T;
}

const numBox: Box<number> = { value: 99 };
```

## Why this is powerful

- reusable designs
- stronger type alignment per usage
- less repeated type declarations

## Para sa non-developer 👇

Parang same product model na may different variants:
- same structure
- different value type depende sa variant

Generic class/interface = reusable model template.

## Interactive warm-up 🎯

1. Puwede bang generic ang classes?  
2. Sa `new User(42)`, ano inferred generic type ni `T`?  
3. Ano benefit ng generic interfaces?

Tamang sagot:
- oo
- `number`
- reusable contracts na configurable ang value type

## Recap ✅

- Generics apply to classes and interfaces too
- You gain flexible, strongly-typed architecture patterns
