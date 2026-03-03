# 97. Constant Types with "as const" 📌

## Section 7: Advanced Types

`as const` tells TypeScript: infer as narrowly as possible.

## Example

```ts
const roles = ["admin", "guest", "editor"] as const;

const firstRole = roles[0];
// roles.push("author"); // error: readonly tuple-like type
```

Without `as const`, roles would be broad `string[]`.  
With `as const`, mas strict:
- readonly
- literal values preserved

## Para sa non-developer 👇

Parang locked preset options:
- hindi na basta-basta nadadagdagan
- exact allowed values lang ang recognized

Useful kapag fixed config lists ang data mo.

## Interactive warm-up 🎯

1. Ano effect ng `as const` sa type inference?  
2. Puwede pa bang i-`push` ang bagong value sa sample?  
3. Bakit useful ito sa fixed option lists?

Tamang sagot:
- mas narrow, literal, at readonly types
- hindi
- para strict ang accepted values

## Recap ✅

- `as const` narrows inferred types aggressively
- Great for immutable config-like values
