# 54. Defining a Function with a Union Type Return Value 🔀

## Section 4: TypeScript Essentials Demo Project

Naka-setup na tayo ng input type (`InvestmentData`).  
Next step: i-define natin ang output type ng `calculateInvestment`. 🚀

## Step 1: Define result entry type

Bawat year, gusto natin may isang result object na may summary.
Kaya gagawa tayo ng custom type:

```ts
type InvestmentResult = {
  year: string;
  totalAmount: number;
  totalContributions: number;
  totalInterestEarned: number;
};
```

Meaning:
- `year`: identifier ng year entry (e.g., `"Year 1"`)
- `totalAmount`: total value sa dulo ng year
- `totalContributions`: total na naihulog hanggang year na iyon
- `totalInterestEarned`: total interest earned hanggang year na iyon

## Step 2: Define union return type

Usually, magre-return tayo ng array ng `InvestmentResult`.
Pero kung invalid ang input (hal. `duration = 0`), puwede tayong mag-return ng error message string.

Kaya:

```ts
type CalculationResult = InvestmentResult[] | string;
```

## Step 3: Apply it to function return type

```ts
function calculateInvestment(data: InvestmentData): CalculationResult {
  // logic next step
  return 'Not implemented yet';
}
```

## Why union return type? 🤔

Para explicit sa type system na:
- either successful computed results ang return
- or human-readable error message

Alternative ang `throw Error`, pero sa lesson na ito,
pinipili natin ang string return for simple flow.

## Mini validation example

```ts
function calculateInvestment(data: InvestmentData): CalculationResult {
  if (data.duration <= 0) {
    return 'Invalid duration. Duration must be greater than 0.';
  }

  return [];
}
```

## Paliwanag para sa non-developer 👇

Parang customer service response:
- kapag valid ang request mo -> ibibigay ang full report (array of results)
- kapag invalid ang request -> ibibigay ang malinaw na error message (string)

Union type ang nagsasabi na parehong possible response formats ay legal.

## Interactive warm-up 🔥

1. Anong type ang ginagamit para sa yearly result entry object?  
2. Bakit `InvestmentResult[] | string` ang return type?  
3. Ano ang advantage ng pag-outsource sa `CalculationResult` alias?

Tamang sagot:
- `InvestmentResult`
- para ma-handle ang success output at invalid-input message
- mas readable at reusable ang type annotations

## Recap 🎯

- Defined tayo ng output object type: `InvestmentResult`
- Gumamit tayo ng union return type para sa flexible responses
- In-outsource ang union sa `CalculationResult` alias
- Ready na tayo sa next step: actual computation logic
