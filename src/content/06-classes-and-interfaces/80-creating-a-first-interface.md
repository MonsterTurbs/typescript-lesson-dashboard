# 80. Creating a First Interface 🧱

## Section 6: Classes & Interfaces

Gawa tayo ng first interface para ma-feel mo ang syntax.

## Example

```ts
interface Authenticatable {
  email: string;
  password: string;
  login(): void;
  logout(): void;
}
```

## Notes

- Walang actual values dito
- Walang logic body sa methods
- Shape/type contract lang ang dine-define

## Ano ang meaning ng methods dito?

`login(): void;` means:
- dapat may `login` method
- walang required parameters
- walang expected return value

## Para sa non-developer 👇

Parang requirement spec sheet:
- "Dapat may email"
- "Dapat may password"
- "Dapat marunong mag login/logout"

Hindi pa ito ang actual app logic, rules pa lang ito.

## Interactive warm-up 🎯

1. Puwede bang maglagay ng `if`/`console.log` bodies sa interface method definitions?  
2. Ano role ng `interface` keyword?  
3. Shape ba ng object ang dine-define nito o final values?

Tamang sagot:
- hindi
- gumawa ng TypeScript contract/type shape
- shape ng object

## Recap ✅

- Interfaces are structural contracts
- No runtime values/logic inside interface body
- Super useful for predictable typing
