# 35. Forced "Not Null" And Optional Chaining ⚠️

## Section 2: TypeScript Basics & Basic Types

Sa previous topic, nakita mo ang null-check gamit `if`.
Ngayon, dalawang shortcut naman:

- non-null assertion (`!`)
- optional chaining (`?.`)

Parehong useful, pero may tamang gamit bawat isa. 🚀

## 1) Non-null assertion (`!`) 💥

```ts
const inputEl = document.getElementById('username')!;
console.log((inputEl as HTMLInputElement).value);
```

Ang `!` dito ay nagsasabi kay TypeScript:
"Trust me, hindi ito null."

Pros:
- mabilis
- walang extra `if` block

Cons:
- risky kung mali ang assumption mo
- puwedeng mag-runtime error kapag null pala talaga

## 2) Optional chaining (`?.`) 🛡️

```ts
const inputEl = document.getElementById('username');
console.log((inputEl as HTMLInputElement | null)?.value);
```

`?.` means:
- kung may value si `inputEl`, tuloy ang property access
- kung null siya, stop safely (no crash)

Ito ang mas safe inline shortcut kapag okay lang na walang fallback action.

## Interactive warm-up 🔥

Quick check:

1. Alin ang mas dangerous kapag mali ang assumption: `!` or `?.`?  
2. Alin ang mas safe para iwas crash kapag puwedeng null?  
3. Kapag kailangan mo ng custom fallback action, alin ang mas bagay: shortcut or `if` block?

Tamang sagot:
- `!`
- `?.`
- `if` block

## Paliwanag para sa non-developer 👇

Isipin mo:

- `!` = “sigurado ako, buksan mo agad”
- `?.` = “check mo muna kung may laman bago buksan”

Kung hindi ka 100% sure, mas safe ang check-first approach.

## Best practice reminder 💡

- Gamitin ang `!` lang kapag talagang guaranteed ang value
- Gamitin ang `?.` kapag optional/missing value is acceptable
- Gamitin ang `if` guard kapag kailangan mo ng explicit fallback logic

## Mini mission 💬

1. Subukan mo ang `getElementById` with `!`  
2. Subukan mo ulit with `?.`  
3. I-test gamit tamang ID at missing ID  
4. Observe difference sa runtime behavior

Kapag na-practice mo ito, mas magiging intentional ang null handling mo sa TypeScript at JavaScript. 🔥
