# 81. Interfaces As Object Types 📦

## Section 6: Classes & Interfaces

One common use ng interface: gamitin siya as object type.

## Example

```ts
interface Authenticatable {
  email: string;
  password: string;
  login(): void;
  logout(): void;
}

const user: Authenticatable = {
  email: "test@example.com",
  password: "abc1",
  login() {
    console.log("Logged in");
  },
  logout() {
    console.log("Logged out");
  },
};
```

## What TypeScript enforces

Kapag `: Authenticatable` ang type:
- required ang listed properties/methods
- kailangang match ang types

## Para sa non-developer 👇

Parang quality checklist:
- kapag may kulang na item, reject
- kapag kumpleto at tama, approve

Ganito tumutulong si TypeScript para less runtime surprises.

## Interactive warm-up 🎯

1. Kapag kulang ang `logout`, papasa ba ang object?  
2. Ano benefit ng explicit interface type sa object literal?  
3. Puwede bang magdagdag ng logic sa methods ng actual object?

Tamang sagot:
- hindi
- guaranteed structure + safer code
- oo

## Recap 🚀

- Interfaces can type regular object values
- TypeScript checks required fields/method signatures
- Clean way to enforce object contracts
