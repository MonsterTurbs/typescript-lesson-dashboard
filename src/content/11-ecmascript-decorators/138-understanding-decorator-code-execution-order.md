# 138. Understanding Decorator Code Execution Order ⏱️

## Section 11: ECMAScript Decorators

Decorator code may run at different lifecycle moments.

## Important distinction

- setup logs inside decorator body: run during definition/initialization phase
- logic inside returned class constructor/method wrappers: run during instance usage time

## Example idea

```ts
function logger<T extends new (...args: any[]) => any>(target: T) {
  console.log("Decorator setup executed");

  return class extends target {
    constructor(...args: any[]) {
      super(...args);
      console.log("Instance constructor executed");
    }
  };
}
```

## Why this matters

Para hindi ka malito kung bakit may logs na lumalabas kahit hindi mo pa ginagamit ang instance.

## Para sa non-developer 👇

Parang may dalawang phase:
- factory setup phase
- actual product usage phase

Magkaibang oras tumatakbo ang logic per phase.

## Interactive warm-up 🎯

1. Pareho ba ng timing ang decorator setup at instance constructor logic?  
2. Alin ang mauuna: decorator setup logs o instance usage logs?  
3. Bakit critical malaman ito sa debugging?

Tamang sagot:
- hindi
- decorator setup logs
- para clear kung anong phase ang pinanggagalingan ng effect

## Recap 🚀

- Understand decorator timing to avoid lifecycle confusion
- Phase awareness improves debugging and architecture decisions
