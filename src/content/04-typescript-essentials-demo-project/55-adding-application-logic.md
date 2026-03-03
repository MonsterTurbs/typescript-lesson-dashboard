# 55. Adding Application Logic 🧠

## Section 4: TypeScript Essentials Demo Project

Naka-setup na tayo ng input at output types.  
Ngayon, ilalagay na natin ang actual logic sa `calculateInvestment`. 🚀

## Step 1: Destructure the input data

Para mas madaling gamitin ang fields, i-destructure natin ang `data` object:

```ts
function calculateInvestment(data: InvestmentData): CalculationResult {
  const { initialAmount, annualContribution, expectedReturnRate, duration } = data;
  // ...
}
```

## Step 2: Validate inputs early ✅

Bago mag-compute, check muna natin kung valid ang input values.
Kung invalid, return agad ng error message (`string`).

```ts
if (initialAmount < 0) {
  return 'Initial investment amount must be at least zero.';
}

if (duration <= 0) {
  return 'No valid amount of years provided.';
}

if (expectedReturnRate < 0) {
  return 'Expected return must be at least zero.';
}
```

## Step 3: Prepare working variables

```ts
let total = initialAmount;
let totalContributions = 0;
let totalInterestEarned = 0;

const annualResults: InvestmentResult[] = [];
```

Meaning:
- `total`: current investment value
- `totalContributions`: total yearly contributions so far
- `totalInterestEarned`: cumulative interest earned
- `annualResults`: list ng per-year summary output

## Step 4: Loop through each year 🔁

```ts
for (let i = 0; i < duration; i++) {
  total = total * (1 + expectedReturnRate);

  totalInterestEarned = total - initialAmount - totalContributions;

  totalContributions = totalContributions + annualContribution;
  total = total + annualContribution;

  annualResults.push({
    year: `Year ${i + 1}`,
    totalAmount: total,
    totalContributions,
    totalInterestEarned,
  });
}
```

Note:
- assumed dito na yearly contribution is added **after** interest computation for that year

## Step 5: Return final results

```ts
return annualResults;
```

Dahil may early `return` tayo for invalid inputs,
valid ang union return type natin:
- `string` for errors
- `InvestmentResult[]` for success

## Full function (reference)

```ts
function calculateInvestment(data: InvestmentData): CalculationResult {
  const { initialAmount, annualContribution, expectedReturnRate, duration } = data;

  if (initialAmount < 0) {
    return 'Initial investment amount must be at least zero.';
  }

  if (duration <= 0) {
    return 'No valid amount of years provided.';
  }

  if (expectedReturnRate < 0) {
    return 'Expected return must be at least zero.';
  }

  let total = initialAmount;
  let totalContributions = 0;
  let totalInterestEarned = 0;
  const annualResults: InvestmentResult[] = [];

  for (let i = 0; i < duration; i++) {
    total = total * (1 + expectedReturnRate);
    totalInterestEarned = total - initialAmount - totalContributions;
    totalContributions = totalContributions + annualContribution;
    total = total + annualContribution;

    annualResults.push({
      year: `Year ${i + 1}`,
      totalAmount: total,
      totalContributions,
      totalInterestEarned,
    });
  }

  return annualResults;
}
```

## Paliwanag para sa non-developer 👇

Parang yearly tracker ito:
1. start with current total
2. apply growth rate
3. idagdag yearly contribution
4. i-save ang summary ng year
5. ulitin hanggang maabot ang target years

Result: may timeline ka ng investment progress taon-taon.

## Interactive warm-up 🔥

1. Bakit useful ang early validation before loop?  
2. Bakit `InvestmentResult[]` ang type ng `annualResults`?  
3. Anong dalawang possible return types ng function na ito?

Tamang sagot:
- para maiwasan invalid calculations
- para siguradong consistent ang structure ng bawat yearly entry
- `string` at `InvestmentResult[]`

## Recap 🎯

- Added na ang core calculator logic
- Gumamit tayo ng destructuring + validation + loop
- Naka-store per year ang result objects sa array
- Correctly aligned na ang function sa union return type
