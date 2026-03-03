# 134. What Are Decorators? And ECMAScript Decorators vs Experimental Decorators 🧭

## Section 11: ECMAScript Decorators

Decorators are metaprogramming tools:  
code that interacts with other code to change/extend behavior.

## Basic usage style

```ts
@SomeDecorator
class Product {
  title = "Book";
}
```

## Big idea

- `@Decorator` attaches behavior to class-related targets
- useful for validation, logging, metadata, auto-binding, etc.

## Two decorator families in TS ecosystem

1. **ECMAScript decorators** (official direction, JS proposal-based)  
2. **Experimental/legacy decorators** (older TS-specific style)

## Practical note

Legacy decorators still common in older projects.  
ECMAScript decorators are the modern/future-facing approach.

## Para sa non-developer 👇

Parang upgrade sticker:
- idinidikit mo sa class/member
- at may special processing na nangyayari sa likod

## Interactive warm-up 🎯

1. Decorators ba ay simple comments lang?  
2. Pareho ba ang syntax/behavior ng ECMAScript at legacy decorators?  
3. Bakit may dalawang versions sa TS world?

Tamang sagot:
- hindi
- hindi
- dahil TS supported old proposal early; then evolved ang official ECMAScript track

## Recap 🚀

- Decorators modify/enhance class-based code behavior
- Know which decorator model your project is using
