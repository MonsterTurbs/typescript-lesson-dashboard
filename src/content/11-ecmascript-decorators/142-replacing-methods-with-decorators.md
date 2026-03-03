# 142. Replacing Methods with Decorators 🔁

## Section 11: ECMAScript Decorators

Method decorators can return a replacement/wrapper function.

## Example wrapper pattern

```ts
function logWrap(target: Function, _ctx: ClassMethodDecoratorContext) {
  return function (this: any, ...args: any[]) {
    console.log("Executing original function");
    return target.apply(this, args);
  };
}
```

## Why `apply` here?

Para ma-preserve ang tamang `this` and arguments when calling original method.

## Use cases

- logging
- performance timing
- access checks
- instrumentation / tracing

## Para sa non-developer 👇

Parang nilagyan mo ng outer shell ang original action:
- may extra pre/post steps
- then tatawagin pa rin ang original behavior

## Interactive warm-up 🎯

1. Puwede bang palitan ng method decorator ang original method implementation?  
2. Bakit common gamitin `target.apply(this, args)` sa wrappers?  
3. Ano practical example ng wrapper decorator use?

Tamang sagot:
- oo
- para correct context + arguments forwarding
- logging/metrics/guard checks

## Recap 🚀

- Method replacement decorators enable controlled behavior augmentation
- Great for cross-cutting concerns in class APIs
