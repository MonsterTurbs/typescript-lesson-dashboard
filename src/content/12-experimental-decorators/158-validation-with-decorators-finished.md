# 158. Validation with Decorators - Finished 🧩

## Section 12: Experimental Decorators

Finished version usually has:
- validator registry object
- decorator functions writing into registry
- `validate()` looping through rules

```ts
interface ValidatorConfig {
  [className: string]: {
    [property: string]: string[];
  };
}
```

## Practical benefit

Reusable validation engine logic, minimal noise in class definitions.

## Para sa non-developer 👇

Parang centralized rulebook:
- class fields register rules once
- checker runs all relevant rules automatically

## Recap ✅

- You now have a complete decorator-driven validation workflow concept
