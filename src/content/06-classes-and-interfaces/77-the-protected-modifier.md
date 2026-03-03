# 77. The "protected" Modifier 🛡️

## Section 6: Classes & Interfaces

`protected` is middle ground between `public` and `private`.

## Access level comparison

- `public` = everywhere
- `private` = same class lang
- `protected` = same class + subclasses

## Example

```ts
class User {
  constructor(protected firstName: string) {}
}

class Employee extends User {
  work() {
    console.log(`${this.firstName} is working`); // allowed
  }
}

const emp = new Employee("Max");
// console.log(emp.firstName); // error outside class hierarchy
```

## Bakit useful?

Kapag may inheritance at kailangan ng child class ang access sa base internals,  
pero ayaw mong gawing public sa lahat.

## Para sa non-developer 👇

Parang internal family vault:
- accessible sa family members (base + child classes)
- inaccessible sa outsiders (external code)

Balanced control + reusability. ✅

## Interactive warm-up 🎯

1. Alin ang mas strict: `private` o `protected`?  
2. Puwede bang i-access ang protected field from subclass?  
3. Puwede bang i-access ang protected field mula sa external object use?

Tamang sagot:
- `private`
- oo
- hindi

## Recap 🚀

- `protected` supports inheritance-friendly encapsulation
- Better than exposing everything as `public`
- Keeps class APIs cleaner and safer
