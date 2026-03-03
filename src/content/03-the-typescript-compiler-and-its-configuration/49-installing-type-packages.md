# 49. Installing Type Packages 📦

## Section 3: The TypeScript Compiler (and its Configuration)

Habang lumalaki ang TypeScript projects mo, madalas gagamit ka ng:
- Node.js APIs (like `node:fs`)
- third-party libraries (React, lodash, etc.)

At dito papasok ang common issue:
minsan hindi alam ni TypeScript ang types ng mga ito out of the box. 🤔

## Typical error scenario

Example:

```ts
import fs from 'node:fs';
```

Possible TypeScript error:
- cannot find module `node:fs` or its type declarations

Ibig sabihin:
alam ng JavaScript/Node runtime ang module,
pero kulang pa si TypeScript ng type information.

## Step 1: Ensure Node project setup

Kung wala ka pang `package.json`, initialize mo muna:

```bash
npm init -y
```

Optional (for ESM style projects), puwede mong ilagay sa `package.json`:

```json
{
  "type": "module"
}
```

## Step 2: Install type declarations

Para sa Node.js APIs, install:

```bash
npm install --save-dev @types/node
```

Bakit `--save-dev`?
Kasi types ay development-time helper lang.
Hindi sila kailangan sa runtime JavaScript execution.

## After installation ✅

Kapag installed na ang `@types/node`:
- mawawala usually ang missing type error
- mas accurate autocomplete at IntelliSense
- makikita mo expected argument/return types ng Node APIs

Example:

```ts
import fs from 'node:fs';

const content = fs.readFileSync('notes.txt', { encoding: 'utf-8' });
console.log(content);
```

Now, may proper type hints ka na para sa `readFileSync` parameters/options.

## Paliwanag para sa non-developer 👇

Isipin mo si TypeScript bilang translator.
Kapag may bagong library/API ka, kailangan niya ng dictionary para maintindihan ito.

`@types/...` packages = dictionaries na nagtuturo kay TypeScript
kung ano ang shape ng functions, parameters, at return values.

## Interactive warm-up 🔥

1. Kapag hindi alam ni TypeScript ang library types, ano ang kulang?  
2. Para sa Node APIs, anong package ang common na ini-install?  
3. Bakit madalas dev dependency ang type packages?

Tamang sagot:
- type declarations
- `@types/node`
- dahil compile/dev time lang sila needed

## Practical reminder 💡

Hindi lahat ng types built-in sa TypeScript.
Normal at expected ang pag-install ng type packages,
especially kapag gumagamit ka ng Node APIs at third-party libraries.

## Recap 🎯

- TypeScript needs type declarations to understand many external APIs/libs
- `@types/node` gives Node.js API type support
- install type packages as dev dependencies in most cases
- better IDE support + safer code pagkatapos ma-install
