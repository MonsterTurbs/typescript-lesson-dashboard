# 120. "typeof" & A More Useful Example 🧩

## Section 10: Deriving Types From Types

`typeof` shines lalo na kapag complex object ang source.

## Example

```ts
const settings = {
  difficulty: "easy",
  minLevel: 10,
  didStart: false,
  players: ["Max", "Anna"],
};

type Settings = typeof settings;

function loadData(config: Settings) {
  console.log(config.players.length);
}
```

## Why useful?

Imbes manual i-type lahat ng object keys/values:
- auto-derived na si `Settings`
- less duplicate work
- less risk ng mismatch/typos

## Para sa non-developer 👇

Parang auto-form scanner:
- may sample form ka na
- system na mismo kukuha ng exact structure rules

Kaya hindi ka paulit-ulit nag-eencode ng parehong fields.

## Interactive warm-up 🎯

1. Kailan pinaka-useful ang `typeof` derivation?  
2. Required ba gumawa muna ng explicit manual object type lagi?  
3. Ano main benefit sa maintainability?

Tamang sagot:
- sa complex existing values
- hindi
- single source of truth ang value + type alignment

## Recap 🚀

- `typeof` can eliminate repetitive object type definitions
- Practical for safer config and data-shape reuse
