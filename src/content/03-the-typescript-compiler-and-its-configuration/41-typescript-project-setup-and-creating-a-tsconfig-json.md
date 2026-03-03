# 41. TypeScript Project Setup & Creating a tsconfig.json 🛠️

## Section 3: The TypeScript Compiler (and its Configuration)

Ngayon naman, setup time tayo.  
Paano natin iko-configure ang behavior ni TypeScript sa isang project?

Sagot: gamit ang `tsconfig.json` file. 🚀

## Core idea 🎯

TypeScript config ay usually **per project**.
Ibig sabihin, bawat project folder puwedeng may sariling rules.

Kapag may `tsconfig.json` ka:
- susundin ito ng TypeScript compiler
- susundin din ito ng IDE mo (like VS Code)

So parehong aligned ang compile results at editor errors mo. ✅

## Quick setup command

```bash
tsc --init
```

Kapag ni-run mo ito sa project folder, automatic gagawa ng:
- `tsconfig.json`

## Ano ang laman ng generated file? 🤔

Default `tsconfig.json` usually:
- maraming options
- karamihan naka-comment out
- may short explanations per option

Normal lang na mukhang mahaba at overwhelming sa simula.
Good news: hindi mo kailangan alamin lahat agad. 😌

## Important reminder 💡

Hindi lahat ng options ay kailangan sa typical projects.

Maraming settings:
- niche use cases lang
- para sa special project structures (e.g., monorepo)
- historical/backward compatibility reasons

Sa practical workflow, focus ka muna sa pinaka-important options.

## Paliwanag para sa non-developer 👇

Isipin mo ang `tsconfig.json` bilang:
"Rulebook ng project mo."

Imbis na isa-isang manual instruction kada compile,
meron kang central settings file na sinusunod ng tools.

Parang school policy:
- iisang handbook
- lahat ng classes sumusunod
- less confusion, mas consistent output

## Interactive warm-up 🔥

1. Anong command ang mabilis gumawa ng TypeScript config file?  
2. Ano ang file na ginagawa ng command na iyon?  
3. Kailangan ba master mo agad lahat ng options sa `tsconfig.json`?

Tamang sagot:
- `tsc --init`
- `tsconfig.json`
- hindi

## Sample generated config (simplified)

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "strict": true,
    "outDir": "dist"
  }
}
```

Simple meaning:
- `target`: JS version ng output
- `strict`: higpit ng type checks
- `outDir`: destination folder ng compiled files

## Saan magde-deep dive kapag kailangan? 📚

Kapag need mo ng advanced/niche settings,
best reference ang official TypeScript docs,
lalo na ang **TSConfig Reference**.

Doon mo makikita:
- full option list
- detailed behavior
- examples per setting

## Recap 🚀

- TypeScript config is usually project-based
- `tsc --init` creates `tsconfig.json`
- compiler + IDE both use this config
- hindi mo kailangang aralin lahat ng options agad
- focus muna sa important/common settings
