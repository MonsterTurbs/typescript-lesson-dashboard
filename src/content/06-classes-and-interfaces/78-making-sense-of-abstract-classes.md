# 78. Making Sense of Abstract Classes 🧠

## Section 6: Classes & Interfaces

`abstract` class = base class na hindi puwedeng i-instantiate directly.

## Example

```ts
abstract class UIElement {
  constructor(public identifier: string) {}

  abstract clone(targetLocation: string): void;
}

class SideDrawerElement extends UIElement {
  constructor(identifier: string, public position: "left" | "right") {
    super(identifier);
  }

  clone(targetLocation: string) {
    console.log(`Cloning ${this.identifier} to ${targetLocation}`);
  }
}

// const el = new UIElement("x"); // error: abstract class
const drawer = new SideDrawerElement("drawer-1", "left");
drawer.clone("#app");
```

## Why abstract?

- defines common contract/blueprint for related subclasses
- prevents incomplete generic base object usage
- enforces child implementation via abstract methods

## Para sa non-developer 👇

Parang master template na hindi final product:
- hindi siya binebenta directly
- ginagamit siya para gumawa ng concrete product variants

## Interactive warm-up 🎯

1. Puwede bang `new` sa abstract class?  
2. Ano role ng abstract method?  
3. Bakit magandang gamitin sa complex systems?

Tamang sagot:
- hindi
- pinipilit ang subclasses na mag-implement
- para consistent ang base behavior/contracts

## Recap ✅

- Abstract classes are TS-only design tool
- They act as non-instantiable base classes
- Great for scalable architecture patterns
