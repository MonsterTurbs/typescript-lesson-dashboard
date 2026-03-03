# 79. Introducing Interfaces 🤝

## Section 6: Classes & Interfaces

Next stop: **interfaces**!  
Ito ay TypeScript-only feature na nagde-define ng object/class contract.

## Core idea

Interface can be used as:
- object type definition
- class contract via `implements`

## Example snapshot

```ts
interface Authenticatable {
  email: string;
  password: string;
  login(): void;
  logout(): void;
}
```

## Bakit contract?

Kapag sinabi mong something is `Authenticatable`,
expected na meron itong required fields/methods above.

## Para sa non-developer 👇

Parang job requirements list:
- hindi pa ito actual employee
- checklist lang ito ng dapat meron ang candidate

Kapag pumasa sa checklist, qualified siya sa role.

## Interactive warm-up 🎯

1. Interface ba ay JavaScript feature?  
2. Ano keyword para ipa-follow ng class ang interface contract?  
3. Interface ba ay may implementation code (logic bodies)?

Tamang sagot:
- hindi, TypeScript-only
- `implements`
- wala, shape/contract lang

## Recap 🚀

- Interfaces define structure, not concrete logic
- Works for object typing and class contracts
- Great for consistency in larger codebases
