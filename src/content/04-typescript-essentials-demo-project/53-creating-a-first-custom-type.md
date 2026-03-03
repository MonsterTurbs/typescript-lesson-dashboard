# 53. Creating a First Custom Type 🧩

## Section 4: TypeScript Essentials Demo Project

Simulan na natin i-build ang calculator project together! 🚀  
Unang focus: yung input data ng `calculateInvestment`.

## Problem: Mahabang parameter list 😵

Pwede naman ganito:

```ts
function calculateInvestment(
  initialAmount: number,
  annualContribution: number,
  expectedReturnRate: number,
  duration: number
) {
  // ...
}
```

Valid ito, pero may downside:
- mahaba ang function signature
- kailangan tama lagi ang order ng arguments
- less readable kapag dumami pa ang fields

## Better approach: one object parameter ✅

Mas clean kung isang object ang ipapasa, tapos doon naka-group ang lahat ng input values.

At para malinaw ang structure, gagawa tayo ng custom type alias.

```ts
type InvestmentData = {
  initialAmount: number;
  annualContribution: number;
  expectedReturnRate: number;
  duration: number;
};
```

Then gamitin sa function:

```ts
function calculateInvestment(data: InvestmentData) {
  // logic will go here
}
```

## Inline type vs type alias

Pwede rin technically na inline:

```ts
function calculateInvestment(data: {
  initialAmount: number;
  annualContribution: number;
  expectedReturnRate: number;
  duration: number;
}) {
  // ...
}
```

Nothing wrong dito, pero kadalasan mas readable at reusable ang separate alias (`InvestmentData`).

## Paliwanag para sa non-developer 👇

Isipin mo na magfi-fill ka ng form:
- imbes na 4 hiwalay na papel,
- isang form na may 4 fields.

Mas madaling i-manage, i-pass, at i-validate ang isang grouped object.

Ganun din sa TypeScript:
custom type = malinaw na template ng expected data.

## Interactive warm-up 🔥

1. Alin ang mas scalable kapag dumadami ang inputs: many parameters or one typed object?  
2. Ano ang benefit ng type alias sa readability?  
3. Sa investment calculator, anong data type mostly ang ginagamit sa fields?

Tamang sagot:
- one typed object
- reusable at mas madaling basahin
- `number`

## Recap 🎯

- Gumawa tayo ng first custom type alias: `InvestmentData`
- Grouped object input is cleaner than long parameter lists
- Type aliases improve readability and reuse
- Ready na tayo para ilagay ang actual calculation logic next
