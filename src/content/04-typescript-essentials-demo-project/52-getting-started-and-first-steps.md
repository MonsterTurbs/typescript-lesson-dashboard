# 52. Getting Started & First Steps 🧱

## Section 4: TypeScript Essentials Demo Project

Simula na tayo ng actual demo project setup! 🚀  
Nasa brand-new empty project folder tayo, so clean slate ito.

## Step 1: Create `tsconfig.json`

Unang command:

```bash
tsc --init
```

Bakit ito ang first step?
- para project-based compilation ang setup
- hindi mo na kailangang i-compile file-by-file
- consistent ang compiler rules sa buong project

## Step 2: Set important config

Sa `tsconfig.json`, i-adjust natin ang:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "strict": true
  }
}
```

Notes:
- `target: "ES2022"` = modern JavaScript output
- `strict: true` = mas solid type safety habang nagde-develop

For this basic project, okay na ang default ng ibang settings.

## Step 3: Create project file

Gawa tayo ng:
- `calculator.ts`

Dito natin ilalagay ang TypeScript logic ng demo app.

## Project idea natin 💡

Gagawa tayo ng **investment calculator** (terminal-based, hard-coded inputs muna).

Plan:
- `calculateInvestment(...)`  
  tatanggap ng investment data at magbabalik ng yearly results array
- `printResults(...)`  
  tatanggap ng results at magpi-print ng readable output

## Suggested input data structure

```ts
type InvestmentInput = {
  initialAmount: number;
  annualContribution: number;
  expectedReturnRate: number;
  duration: number;
};
```

## Suggested result structure

```ts
type InvestmentResult = {
  year: number;
  totalContributions: number;
  valueEndOfYear: number;
};
```

## Example usage flow

```ts
const input: InvestmentInput = {
  initialAmount: 100000,
  annualContribution: 20000,
  expectedReturnRate: 0.08,
  duration: 5,
};

const results = calculateInvestment(input);
printResults(results);
```

## Paliwanag para sa non-developer 👇

Parang savings/investment planner ito:
- may initial na ipon
- may regular na dagdag bawat taon
- may expected growth rate
- may target years

Goal ng app: ipakita year-by-year kung magkano na ang total value mo.

## Interactive challenge 🔥

Try mo muna on your own bago next lesson:

1. I-setup ang `tsconfig.json` gamit `tsc --init`  
2. Gumawa ng `calculator.ts`  
3. Idefine ang input at result types  
4. Gumawa ng initial version ng `calculateInvestment` at `printResults`

Hindi kailangan perfect agad, importante ma-practice mo ang:
- type definitions
- function signatures
- structured TypeScript thinking

## Recap 🎯

- `tsc --init` for project setup
- set `target` and keep `strict: true`
- build a simple terminal investment calculator
- focus on types + functions + clean flow
