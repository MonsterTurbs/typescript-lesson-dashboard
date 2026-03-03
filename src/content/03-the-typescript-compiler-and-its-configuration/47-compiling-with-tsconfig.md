# 47. Compiling with tsconfig ⚙️

## Section 3: The TypeScript Compiler (and its Configuration)

May `tsconfig.json` ka na, pero bakit minsan parang hindi siya nasusunod? 🤔  
Ito ang common reason: maling way ng pag-run ng compiler.

## The common confusion

Kapag nag-run ka ng:

```bash
tsc src/app.ts
```

single-file compilation ito.
At sa mode na ito, maraming project-level settings sa `tsconfig.json` ang hindi fully nasusunod.

Result:
- puwedeng sa wrong folder ma-output ang JS
- puwedeng hindi tumugma sa expected target/output setup

## Tamang way sa project na may tsconfig ✅

Run mo lang si TypeScript compiler nang walang file argument:

```bash
tsc
```

Important:
- gawin ito sa project root
- same folder kung nasaan ang `tsconfig.json`

Kapag ganito, project mode ang gamit,
kaya maa-apply ang config settings mo tulad ng:
- `outDir`
- `target`
- `sourceMap`
- at iba pang compiler options

## Example flow 🚀

Sample config:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "outDir": "dist",
    "sourceMap": true
  },
  "include": ["src/**/*"]
}
```

Command:

```bash
tsc
```

Expected output:
- `dist/app.js`
- `dist/app.js.map`

## Paliwanag para sa non-developer 👇

Isipin mo si `tsconfig.json` na parang event program ng buong project.

- `tsc src/app.ts` = isang performer lang ang tinawag mo, kaya di nasunod ang full event plan
- `tsc` = buong event ang pinatakbo mo, kaya nasunod lahat ng rules at schedule

## Interactive warm-up 🔥

1. Aling command ang project-aware at sumusunod sa `tsconfig`?  
2. Saan mo dapat i-run ang command na iyon?  
3. Bakit minsan iba ang output kapag `tsc file.ts` ang gamit?

Tamang sagot:
- `tsc`
- sa folder kung nasaan ang `tsconfig.json` (project root)
- dahil single-file mode iyon, hindi full project config flow

## Practical reminder 💡

Kapag project-based setup ka na, gawin mong default habit ang:
- `tsc` para compile
- iwasan ang `tsc <file>` unless may specific reason ka

## Recap 🎯

- `tsc <file>` != full project compile behavior
- `tsc` (no file arg) uses `tsconfig.json`
- run from project root for correct results
- dito nagiging consistent ang output folder at compiled syntax
