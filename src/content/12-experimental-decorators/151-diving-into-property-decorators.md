# 151. Diving into Property Decorators 🏷️

## Section 12: Experimental Decorators

Property decorators target class fields.

```ts
function Log(target: any, propertyName: string) {
  console.log("Property decorator");
  console.log(target, propertyName);
}

class Product {
  @Log
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}
```

## Notes

- `target` often points to prototype (for instance properties)
- executes during class definition phase

## Para sa non-developer 👇

Parang field registration hook para sa class metadata/setup.

## Recap 🎯

- Property decorators receive target + property name
