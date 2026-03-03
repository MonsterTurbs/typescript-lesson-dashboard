# 75. Exploring Static Properties & Methods 🛰️

## Section 6: Classes & Interfaces

`static` members belong sa **class itself**, hindi sa object instances.

## Example

```ts
class User {
  static eid = "USER";

  static greet() {
    console.log("Hello!");
  }

  constructor(public name: string) {}
}

console.log(User.eid);
User.greet();

const max = new User("Max");
// max.eid // error: static is on class, not instance
```

## Kailan useful?

- constants tied to class
- utility methods na hindi need ng instance state
- helper functions grouped by domain

## Para sa non-developer 👇

Parang company-wide announcement:
- nasa company board (`User` class)
- hindi naka-store sa personal notebook ng bawat employee (`instance`)

## Interactive warm-up 🎯

1. Saan ina-access ang static members?  
2. Need ba gumawa muna ng `new User(...)` para ma-call si `User.greet()`?  
3. Ano good use case ng static methods?

Tamang sagot:
- sa class name mismo
- hindi
- utility operations na walang instance-specific data

## Recap ✅

- `static` = class-level member
- No instance required
- Useful for shared constants and helper methods
