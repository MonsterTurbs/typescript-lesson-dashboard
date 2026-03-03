# 92. Type Guards via "instanceof" 🧭

## Section 7: Advanced Types

Kapag classes ang gamit mo, super useful ng `instanceof` for narrowing.

## Example

```ts
class User {
  join() {
    console.log("User joined");
  }
}

class Admin {
  scan() {
    console.log("Admin scanning");
  }
}

type Entity = User | Admin;

function init(entity: Entity) {
  if (entity instanceof User) {
    entity.join();
    return;
  }

  entity.scan();
}
```

## Why this works

`instanceof User` confirms object came from `User` class blueprint,  
so safe ang `join()` call.

## Para sa non-developer 👇

Parang ID check:
- if Employee ID -> employee actions
- else if Admin ID -> admin actions

No mixing ng restricted operations.

## Interactive warm-up 🎯

1. Kailan gamit ang `instanceof` guard?  
2. Sa sample, anong method ang safe inside `instanceof User` block?  
3. JavaScript feature ba ang `instanceof`?

Tamang sagot:
- kapag class instances ang dina-differentiate
- `join()`
- oo

## Recap ✅

- `instanceof` is perfect for class-based union narrowing
- Clean and readable runtime type checks
