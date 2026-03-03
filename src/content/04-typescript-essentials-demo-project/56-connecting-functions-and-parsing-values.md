# 56. Connecting Functions & Parsing Values 🔗

## Section 4: TypeScript Essentials Demo Project

Nice! Naco-compute na natin ang investment results.  
Next step: i-connect natin ang `calculateInvestment` at `printResults` para makita ang output nang maayos. 🚀

## Step 1: Reuse `CalculationResult` type

Since ang output ng `calculateInvestment` ay `CalculationResult`,
same type din ang tatanggapin ng `printResults`.

```ts
function printResults(results: CalculationResult) {
  // ...
}
```

Why good ito?
- walang duplicate type definition
- mas readable at reusable ang code
- aligned lagi ang producer (`calculateInvestment`) at consumer (`printResults`)

## Step 2: Handle error string with type guard 🛡️

Tandaan: union type ito (`InvestmentResult[] | string`),
so kailangan muna i-check kung string ba ang nakuha.

```ts
function printResults(results: CalculationResult) {
  if (typeof results === 'string') {
    console.log(results);
    return;
  }

  // dito, array na ang guaranteed type ni results
}
```

Kapag string, error message iyon.
Mag-log tayo at mag-`return` para hindi na tumuloy sa array processing.

## Step 3: Loop through yearly results

```ts
for (const yearEndResult of results) {
  console.log(yearEndResult.year);
  console.log(`Total: ${yearEndResult.totalAmount.toFixed(0)}`);
  console.log(`Total Contributions: ${yearEndResult.totalContributions.toFixed(0)}`);
  console.log(`Total Interest Earned: ${yearEndResult.totalInterestEarned.toFixed(0)}`);
  console.log('--------------------');
}
```

`toFixed(0)`:
- JS number method
- para i-format ang output na walang decimal places

## Full `printResults` example

```ts
function printResults(results: CalculationResult) {
  if (typeof results === 'string') {
    console.log(results);
    return;
  }

  for (const yearEndResult of results) {
    console.log(yearEndResult.year);
    console.log(`Total: ${yearEndResult.totalAmount.toFixed(0)}`);
    console.log(`Total Contributions: ${yearEndResult.totalContributions.toFixed(0)}`);
    console.log(`Total Interest Earned: ${yearEndResult.totalInterestEarned.toFixed(0)}`);
    console.log('--------------------');
  }
}
```

## Paliwanag para sa non-developer 👇

Parang report printing flow:
- kung may error sa computation, error message agad ang ipapakita
- kung successful, ipi-print ang breakdown per year
- mas madaling basahin dahil naka-format at may separators

## Interactive warm-up 🔥

1. Bakit kailangan ng `typeof results === 'string'` check?  
2. Bakit may `return` agad kapag string ang result?  
3. Para saan ginagamit ang `toFixed(0)` sa output?

Tamang sagot:
- dahil union type ang `CalculationResult`
- para maiwasan tumakbo ang array loop sa invalid branch
- para alisin ang decimal places sa printed numbers

## Recap 🎯

- Na-connect na natin ang compute function at print function
- Gumamit tayo ng type guard para safe ang union handling
- Na-format na natin ang output per year
- Ready na tayong i-run at i-test ang buong flow
