# 57. Compilation & Execution ▶️

## Section 4: TypeScript Essentials Demo Project

Ready na ang logic natin.  
Ngayon, i-coconnect na natin lahat at actual na i-run ang app. 🚀

## Step 1: Create `investmentData` object

Gumawa tayo ng input object na sumusunod sa `InvestmentData` type:

```ts
const investmentData: InvestmentData = {
  initialAmount: 5000,
  annualContribution: 500,
  expectedReturnRate: 0.08,
  duration: 10,
};
```

Bakit may explicit type annotation?
- para ma-force ni TypeScript ang tamang shape ng data
- mas madaling mahuli ang missing/maling fields

## Step 2: Connect function calls

```ts
const results = calculateInvestment(investmentData);
printResults(results);
```

Flow:
1. `calculateInvestment(...)` computes yearly results
2. `printResults(...)` shows formatted output

## Step 3: Compile TypeScript code

Since may `tsconfig.json` na tayo, simple compile command lang:

```bash
tsc
```

No need to target individual files.

## Step 4: Run compiled JavaScript with Node.js

Kung ang output file mo ay `calculator.js`, run:

```bash
node calculator.js
```

Kung naka-`outDir: "dist"` ang setup mo:

```bash
node dist/calculator.js
```

## Ano ang makikita sa output? 📊

Makakakuha ka ng per-year breakdown:
- Year 1, Year 2, ... Year 10
- total amount
- total contributions
- total interest earned

At sa last year entry, makikita mo ang final projection
base sa chosen inputs mo.

## Paliwanag para sa non-developer 👇

Parang financial simulation ito:
- naglagay ka ng starting amount
- nagdadagdag ka yearly
- may growth percentage yearly

Tapos binibigyan ka ng app ng progress report taon-taon
hanggang sa end ng target duration.

## Interactive warm-up 🔥

1. Bakit helpful ang explicit `InvestmentData` annotation sa input object?  
2. Anong command ang ginagamit para i-compile ang project with `tsconfig`?  
3. Anong command ang magra-run ng compiled JS sa terminal?

Tamang sagot:
- para ma-validate ang object shape at values
- `tsc`
- `node <compiled-file>.js`

## Try this mini challenge 💡

Palitan mo ang values at observe ang epekto:
- `expectedReturnRate` from `0.08` to `0.05`
- `duration` from `10` to `20`
- `annualContribution` from `500` to `1000`

Then recompile + rerun para makita ang bagong projections.

## Recap 🎯

- Created typed input data
- Connected calculation + printing functions
- Compiled with `tsc`
- Executed with `node`
- Successfully ran a basic TypeScript terminal demo app
