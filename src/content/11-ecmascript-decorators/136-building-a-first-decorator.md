# 136. Building a First Decorator 🛠️

## Section 11: ECMAScript Decorators

Start tayo sa basic class decorator.

## Example

```ts
function logger(target: Function, context: ClassDecoratorContext) {
  console.log("Logger decorator");
  console.log(target);
  console.log(context);
}

@logger
class Person {
  constructor(public name: string) {}
}
```

## Key takeaways

- decorator is just a function
- for class decorator, common args are `target` + `context`
- attached using `@decoratorName`

## Para sa non-developer 👇

Parang automatic observer:
- pag nadefine ang class
- tumatakbo ang decorator logic
- puwedeng mag-log o mag-modify ng setup behavior

## Interactive warm-up 🎯

1. Ano core nature ng decorator sa JS/TS?  
2. Paano i-attach sa class?  
3. Kailan unang tumatakbo ang decorator setup logic?

Tamang sagot:
- function
- gamit `@...`
- habang nade-define/ini-initialize ang decorated target

## Recap 🚀

- You built a valid first class decorator
- Decorators open the door for class-level behavior injection
