# 43. Controlling File Input & Emission 📁

## Section 3: The TypeScript Compiler (and its Configuration)

Sa topic na ito, pag-uusapan natin kung paano mo iko-control:
- saan kukuha ng files si TypeScript
- paano mag-output ng compiled files

Ito ang isa sa pinaka-practical parts ng `tsconfig.json`. 🚀

## 1) `module` setting (imports/exports behavior) 🔌

`module` controls kung paano iha-handle ang `import` at `export`.

Example:

```json
{
  "compilerOptions": {
    "module": "NodeNext"
  }
}
```

Typical notes:
- Node.js projects: common choice ang `NodeNext`
- Bundled projects (Vite/Webpack): often pre-configured na ito for you

## 2) `rootDir` (saan ang source files mo) 🌱

Kung gusto mo nasa `src` folder lahat ng source files:

```json
{
  "compilerOptions": {
    "rootDir": "src"
  }
}
```

Halimbawa:
- `src/app.ts` ang main TypeScript file mo
- mas organized ang project structure

## 3) JavaScript + TypeScript mix support 🧪

Pwede mong i-allow na magkasama ang `.ts` at `.js` files:

```json
{
  "compilerOptions": {
    "allowJs": true,
    "checkJs": true
  }
}
```

- `allowJs`: puwedeng kasama ang JS files sa project
- `checkJs`: basic type checking kahit sa JS files

Useful ito kung gradual migration ka from JavaScript to TypeScript.

## 4) Emission settings (output files) 🏭

### `outDir`

```json
{
  "compilerOptions": {
    "outDir": "dist"
  }
}
```

Compiled JS files ilalagay sa `dist` folder.

### `sourceMap`

```json
{
  "compilerOptions": {
    "sourceMap": true
  }
}
```

Nagge-generate ng source maps para mas madaling mag-debug.

### `noEmit`

```json
{
  "compilerOptions": {
    "noEmit": true
  }
}
```

Type-check lang, walang generated output files.

### `noEmitOnError`

```json
{
  "compilerOptions": {
    "noEmitOnError": true
  }
}
```

By default, minsan nag-eemit pa rin si TypeScript kahit may type errors.
Kapag `true` ito, walang output kapag may errors.

## Paliwanag para sa non-developer 👇

Isipin mo si TypeScript compiler bilang factory:
- `rootDir` = saan kukunin ang raw materials
- `outDir` = saan ilalagay ang finished products
- `noEmit` = quality inspection lang, walang production
- `noEmitOnError` = stop production kapag may defect

## Interactive warm-up 🔥

1. Anong setting ang nagsasabi kung saan ang source files?  
2. Anong setting ang destination folder ng compiled files?  
3. Alin ang setting para walang output kapag may compile/type error?

Tamang sagot:
- `rootDir`
- `outDir`
- `noEmitOnError`

## Practical reminder 💡

Maraming advanced module/import settings sa `tsconfig`,
pero kadalasan setup na iyan ng tools (like Vite/Webpack).

Bilang developer, malaking value na maintindihan mo muna:
- `module`
- `rootDir`
- `allowJs` / `checkJs`
- `outDir`
- `sourceMap`
- `noEmit` / `noEmitOnError`

## Recap ✅

- Controlled mo ang file input via `rootDir`
- Controlled mo ang output via `outDir` at emit settings
- Pwede ang TS + JS hybrid workflow
- Mas predictable ang build process kapag tama ang config
