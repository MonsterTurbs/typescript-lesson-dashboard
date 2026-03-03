# 144. Building Configurable Decorators with Factories 🏭

## Section 11: ECMAScript Decorators

Decorator factory = function that returns a decorator function.

## Why factory?

Para makapag-pass ka ng config sa decorator usage site.

## Example

```ts
function replacer(initValue: string) {
  return function (
    _target: undefined,
    _ctx: ClassFieldDecoratorContext
  ) {
    return function (_initialValue: string) {
      return initValue;
    };
  };
}

class Person {
  @replacer("")
  name = "Max";
}
```

## Pattern summary

- outer function = config receiver
- inner returned function = actual decorator logic

## Para sa non-developer 👇

Parang custom tool builder:
- una, choose settings
- then generate specific tool based sa settings na yun

Reusable at configurable sa iba-ibang contexts.

## Interactive warm-up 🎯

1. Ano tawag sa function na nagre-return ng decorator?  
2. Bakit useful ito kaysa fixed hardcoded decorator behavior?  
3. Ano ang role ng outer function sa pattern?

Tamang sagot:
- decorator factory
- configurable per usage
- tumanggap ng options/config values

## Recap 🚀

- Decorator factories make decorators flexible and reusable
- Common pattern in real-world decorator-based libraries
