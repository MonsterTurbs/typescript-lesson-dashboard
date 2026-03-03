# 159. Fixing a Validator Bug 🐞

## Section 12: Experimental Decorators

Common bug: overwriting validator array instead of appending validators.

## Correct idea

When registering rules, preserve existing rules first:

```ts
[propName]: [
  ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
  "required"
]
```

Same approach for `"positive"`.

## Why this matters

Without it, one rule may replace the previous rule for same property.

## Para sa non-developer 👇

Parang checklist app:
- dapat dinadagdagan mo listahan
- hindi mo pinapalitan buong list kada bagong item

## Recap 🎯

- Keep validator registration additive, not destructive
