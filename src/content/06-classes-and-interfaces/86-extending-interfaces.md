# 86. Extending Interfaces 🧬

## Section 6: Classes & Interfaces

Puwede ring mag-inherit ang interfaces sa isa't isa gamit `extends`.

## Example

```ts
interface Authenticatable {
  email: string;
  password: string;
  login(): void;
  logout(): void;
}

interface AuthenticatableAdmin extends Authenticatable {
  role: "admin" | "superadmin";
}
```

## Difference vs declaration merging

- `extends`: gumawa ng **bagong** interface based on existing one
- declaration merging: pinagsasama ang repeated declarations ng **same** interface name

## Para sa non-developer 👇

Parang employee levels:
- base role requirements muna
- then admin role adds extra permissions/requirements

Organized at madaling i-scale ang rules.

## Interactive warm-up 🎯

1. Anong keyword para mag-build ng interface from another interface?  
2. Sa `extends`, nababago ba ang original base interface?  
3. Anong advantage nito sa design?

Tamang sagot:
- `extends`
- hindi
- reusable layered contracts

## Recap ✅

- Interface inheritance enables clean contract layering
- Base interface stays untouched
- Great for modeling role-based or tiered structures
