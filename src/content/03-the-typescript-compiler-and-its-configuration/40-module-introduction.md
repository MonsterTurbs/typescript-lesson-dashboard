# 40. Module Introduction ⚙️

## Section 3: The TypeScript Compiler (and its Configuration)

Hanggang dito sa course, mostly individual TypeScript files pa lang ang hina-handle natin.
At kapag konti lang ang files, okay pa ang manual compile gamit ang `tsc`.

```bash
tsc app.ts
```

Pero habang lumalaki ang project at dumadami ang source files,
mas nagiging hassle ang pag-compile isa-isa. 😵

Kaya sa section na ito, aaralin natin kung paano i-manage ang TypeScript projects
at paano i-configure ang TypeScript compiler para mas consistent at scalable ang workflow. 🚀

## Bakit mahalaga ang compiler configuration? 🤔

Pwede mong i-configure kung paano magbe-behave ang TypeScript:
- paano mag-type check
- anong JavaScript version ang output
- saan ilalagay ang compiled files
- anong files/folders lang ang isasama

Bonus: karamihan ng IDE/code editors (like VS Code) binabasa rin ang config file,
kaya same rules ang sinusunod ng compiler at editor mo. ✅

## Interactive warm-up 🔥

1. Kung 3 files lang ang project, okay pa ba ang manual compile?  
2. Kung 100+ files na, practical pa ba ang `tsc file-by-file`?  
3. Mas reliable ba kapag iisang config ang sinusunod ng buong team?

Tamang sagot:
- oo
- hindi
- oo

## Code snippet: project-based setup gamit `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "strict": true,
    "outDir": "dist"
  },
  "include": ["src/**/*"]
}
```

```bash
tsc
```

Paliwanag para sa non-developer 👇

Ang `tsconfig.json` ay parang house rules ng buong project.
Imbis na isa-isang utos kada file, may iisang instruction set ka na susundin ng lahat.

- `target`: anong version ng JavaScript ang ilalabas
- `strict`: gaano ka-higpit sa pag-check ng errors
- `outDir`: saan ise-save ang compiled files
- `include`: aling files ang isasama sa process

Kapag `tsc` lang ang ni-run mo, automatic susundin niya lahat ng rules na ito.

## Ano ang focus ng section na ito? 📚

- pag-manage ng TypeScript projects
- pag-control ng compiler behavior
- pag-control ng type checking rules
- pag-control ng compile output

## End goal 🎯

After this section, kaya mo nang mag-setup ng TypeScript projects
na mas organized, mas predictable, at mas madaling i-maintain habang lumalaki ang codebase. 🔥
