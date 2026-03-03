# 46. Example tsconfig.json & Deep Dive 🧭

## Section 3: The TypeScript Compiler (and its Configuration)

Real talk: nakaka-intimidate talaga ang `tsconfig.json` sa una. 😅  
Over the years, sobrang daming options ang nadagdag, kaya normal lang kung overwhelming siya.

Good news: hindi mo kailangan aralin lahat agad. ✅

## Practical reality sa real projects 🚀

Sa maraming projects, especially kung gawa gamit tools like Vite,
usually may pre-configured `tsconfig.json` ka na.

So kadalasan:
- hindi mo sisimulan from scratch
- magte-tweak ka lang ng iilang settings (strictness, target, paths, etc.)

## Kapag gusto mo mag-deep dive 📚

Kung gusto mong maintindihan ang specific settings,
best source pa rin ang official TypeScript TSConfig Reference.

Hindi mo kailangan kabisaduhin lahat,
ang kailangan mo lang maintindihan ay yung relevant sa project mo ngayon.

## Example basic tsconfig (standalone projects)

```json
{
  "target": "ES2022",
  "compilerOptions": {
    "esModuleInterop": true,
    "skipLibCheck": true,
    "target": "es2022",
    "allowJs": true,
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noUnusedLocals": true,
    "module": "NodeNext",
    "outDir": "dist",
    "sourceMap": true,
    "lib": ["es2022", "dom", "dom.iterable"]
  }
}
```

## Quick deep-dive ng key options 🔍

- `esModuleInterop: true`  
  Para smoother ang pag-mix ng ESM at CommonJS imports.

- `skipLibCheck: true`  
  Nilalaktawan ang type-check ng `.d.ts` files ng third-party libs para mas mabilis builds.

- `target: "es2022"`  
  Modern JS output target (good default for modern environments).

- `allowJs: true`  
  Helpful sa migration kung may `.js` files ka pa.

- `strict: true`  
  Turns on strict type safety checks.

- `noUncheckedIndexedAccess: true`  
  Kapag index access (`arr[i]`, `obj[key]`), mas explicit na posibleng `undefined`.

- `noUnusedLocals: true`  
  Huli agad ang unused local vars.

- `module: "NodeNext"`  
  Good default for modern Node module behavior.

- `outDir: "dist"`  
  Compile output folder.

- `sourceMap: true`  
  Better debugging experience.

- `lib: ["es2022", "dom", "dom.iterable"]`  
  Includes browser DOM types; kung pure Node project, madalas tinatanggal ang DOM libs.

## Paliwanag para sa non-developer 👇

Isipin mo ang `tsconfig.json` na parang settings panel ng game:
- graphics quality
- controls
- difficulty level

Hindi mo kailangan galawin lahat ng settings para makapaglaro.
Adjust mo lang yung may direct effect sa experience mo.

Ganun din sa TypeScript:
focus sa high-impact options muna, then refine kapag needed.

## Interactive warm-up 🔥

1. Kailangan mo bang i-master lahat ng tsconfig options before mag-start?  
2. Aling setting ang usual para maging strict ang type checking?  
3. Aling setting ang nagsasabi kung saan mapupunta compiled files?

Tamang sagot:
- hindi
- `strict`
- `outDir`

## Important note for bundlers/tooling ⚠️

Yung sample config sa taas ay useful baseline para sa standalone/manual setups.
Pero kapag gumagamit ka ng third-party build tools/bundlers,
maaaring hindi ito exact fit.

Sa ganung case, mas okay na:
- gamitin ang generated config ng tool
- mag-tweak ka na lang on top of it

## Recap 🎯

- `tsconfig.json` looks scary, but you only need key options first
- tools like Vite usually generate good defaults for you
- sample configs are useful for understanding and standalone setups
- tweak incrementally based on project needs
