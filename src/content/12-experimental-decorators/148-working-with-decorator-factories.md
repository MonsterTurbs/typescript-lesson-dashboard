# 148. Working with Decorator Factories 🏭

## Section 12: Experimental Decorators

Decorator factory = function that returns decorator function.

```ts
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger("Logging - Person")
class Person {}
```

## Why useful?

Puwede ka nang mag-pass ng config/arguments per usage.

## Para sa non-developer 👇

Parang gumawa ka muna ng customized tool settings,  
then ibinibigay mo ang generated tool sa class.

## Recap ✅

- Factories make decorators configurable and reusable
