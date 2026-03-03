# 152. Accessor & Parameter Decorators 🔍

## Section 12: Experimental Decorators

Accessor decorators and parameter decorators have different signatures.

```ts
function LogAccessor(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decorator", name, descriptor);
}

function LogParameter(target: any, name: string, position: number) {
  console.log("Parameter decorator", name, position);
}
```

## Key idea

- accessor/method decorators get `descriptor`
- parameter decorators get argument `position` index

## Para sa non-developer 👇

Parang mas detailed hooks:
- one for method/accessor internals
- one for tracking specific parameter slot

## Recap ✅

- Different decorator targets receive different metadata arguments
