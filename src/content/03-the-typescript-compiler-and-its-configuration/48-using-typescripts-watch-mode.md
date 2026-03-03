# 48. Using TypeScript's Watch Mode 👀

## Section 3: The TypeScript Compiler (and its Configuration)

Kapag active ka sa coding, nakakapagod kung mano-manong `tsc` ka nang `tsc` kada save. 😅  
Dito sobrang useful ang watch mode.

## What is watch mode? 🚀

Run mo si TypeScript compiler with:

```bash
tsc --watch
```

or short version:

```bash
tsc -w
```

Kapag naka-watch mode:
- bina-watch ni TypeScript ang project files mo (based sa config/include/rootDir)
- bawat save mo, automatic magre-recompile
- hindi mo na kailangang mag-run ng compile command ulit-ulit

## Quick demo flow

1. Start watch mode:

```bash
tsc --watch
```

2. Sa `src/app.ts`, magdagdag ng code:

```ts
function add(a: number, b: number) {
  return a + b;
}

const result = add(5, 7);
console.log(result);
```

3. I-save ang file.
4. Automatic magre-run ulit si compiler at u-update ang output sa `dist/`.

## Paliwanag para sa non-developer 👇

Isipin mo si watch mode na parang auto-save + auto-render combo:
- may assistant kang nakabantay
- kada may pagbabago ka, siya na ang kusang nag-uupdate ng final output

Kaya mas smooth ang development flow at less repetitive ang work.

## Interactive warm-up 🔥

1. Anong command ang ginagamit para auto recompile on save?  
2. Kailangan mo pa bang mano-manong mag-`tsc` kada edit kapag watch mode?  
3. Saan mo usually makikita ang updated compiled files kung may `outDir: "dist"`?

Tamang sagot:
- `tsc --watch` (or `tsc -w`)
- hindi na
- sa `dist` folder

## Practical reminder 💡

- Watch mode is best habang actively coding ka
- Kapag tapos ka na, i-stop mo lang sa terminal (`Ctrl + C`)
- Siguraduhing nasa tamang project root ka when starting watch mode

## Recap 🎯

- `tsc --watch` watches files and recompiles automatically
- great for fast feedback while developing
- less manual commands, mas productive workflow
