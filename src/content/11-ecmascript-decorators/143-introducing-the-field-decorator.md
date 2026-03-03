# 143. Introducing the Field Decorator 🏷️

## Section 11: ECMAScript Decorators

Field decorators target class fields (properties), with slightly different behavior.

## Important detail

Sa field decorators, `target` is commonly `undefined` at that stage because field init timing differs.

## Example

```ts
function fieldLogger(
  target: undefined,
  ctx: ClassFieldDecoratorContext
) {
  console.log(target); // often undefined
  console.log(ctx);

  return function (initialValue: string) {
    console.log("Initial value:", initialValue);
    return "";
  };
}

class Person {
  @fieldLogger
  name = "Max";
}
```

## What return function does

It can transform the initialized field value before final assignment.

## Para sa non-developer 👇

Parang value pre-processor:
- may original input value
- puwedeng i-adjust bago tuluyang ma-save sa field

## Interactive warm-up 🎯

1. Ano typical `target` value sa ECMAScript field decorator context?  
2. Puwede bang i-transform ang initial field value?  
3. Ano gamit ng field decorator context object?

Tamang sagot:
- `undefined`
- oo
- metadata + lifecycle utilities for that field decoration

## Recap ✅

- Field decorators are great for property-level value manipulation hooks
- They differ from method/class decorators in target semantics
