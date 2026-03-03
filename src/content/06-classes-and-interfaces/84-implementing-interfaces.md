# 84. Implementing Interfaces 🛠️

## Section 6: Classes & Interfaces

Power move: gamitin ang interface bilang contract ng class via `implements`.

## Example

```ts
interface Authenticatable {
  email: string;
  password: string;
  login(): void;
  logout(): void;
}

class AuthenticatableUser implements Authenticatable {
  constructor(public email: string, public password: string) {}

  login() {
    console.log("Login logic...");
  }

  logout() {
    console.log("Logout logic...");
  }
}
```

## What `implements` does

Pinipilit ng TypeScript na kumpleto ang required shape:
- required properties present
- required methods implemented

## Para sa non-developer 👇

Parang accreditation checklist ng business:
- may set requirements
- kung may kulang, hindi ka papasa

Sa code, ito ang nagpo-protect sa team against incomplete implementations.

## Interactive warm-up 🎯

1. Anong keyword ang ginagamit para sundin ng class ang interface?  
2. Puwede bang may extra fields ang class bukod sa nasa interface?  
3. Ano mangyayari kung kulang ang required method?

Tamang sagot:
- `implements`
- oo
- TypeScript error

## Recap ✅

- Interfaces can enforce class contracts
- `implements` improves consistency across teams
- Great for scalable, predictable class design
