# 42. Exploring tsconfig Options: Target & Libs 🔍

## Section 3: The TypeScript Compiler (and its Configuration)

Ngayon, sisimulan na natin i-explore ang `tsconfig.json` options.  
Hindi natin aaralin lahat agad, kasi marami talagang advanced at niche settings.

Focus muna tayo sa pinaka-practical: `target` at `lib`. 🚀

## Quick context 🧠

Sa top part ng `tsconfig`, may ilang project setup options na pang-advanced scenarios.
Example: multi-project/monorepo setups na puwedeng mag-cause ng mabigat na memory usage.

Sa normal projects, madalas hindi mo muna kailangan galawin ang mga iyon.

## Option 1: `target` 🎯

`target` ang nagsasabi kung anong JavaScript version ang output ng TypeScript compiler.

Example:

```json
{
  "compilerOptions": {
    "target": "ES2016"
  }
}
```

Puwede mo ring gawing mas modern:

```json
{
  "compilerOptions": {
    "target": "ES2022"
  }
}
```

### Kailan ka pipili ng mas luma o mas bago?

- Need mo suportahan old browsers?  
  Gumamit ng older target (e.g., `ES2016`).
- Modern browsers/environment lang ang users mo?  
  Puwede mas modern target (e.g., `ES2022`).

## Option 2: `lib` 📚

`lib` ang nagco-control kung aling built-in type libraries ang available sa project.

Halimbawa, bakit may types kang gaya ng `HTMLElement`?
Kasi included ang DOM library types.

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022", "DOM"]
  }
}
```

Since array ang `lib`, puwede kang mag-combine ng multiple libraries.

## Paliwanag para sa non-developer 👇

Isipin mo:
- `target` = language style ng final output mo
- `lib` = dictionary/reference books na puwedeng gamitin ng TypeScript

Kung walang tamang dictionary, may words/types na hindi niya makikilala.

## Interactive warm-up 🔥

1. Aling setting ang nagde-define ng JS version ng compiled output?  
2. Aling setting ang nagde-define ng available built-in type libraries?  
3. Kung frontend app na may browser APIs, anong library ang usually kailangan?

Tamang sagot:
- `target`
- `lib`
- `DOM`

## Important practical note 💡

Maraming options sa `tsconfig`, pero huwag ma-overwhelm.
Sa real-world setups (like projects scaffolded by tools such as Vite),
madalas pre-configured na ang maraming settings para sa'yo.

Kaya best approach:
- unahin ang important options
- i-adjust lang kapag may clear requirement

## Recap ✅

- Hindi lahat ng `tsconfig` options kailangan galawin
- `target` controls JS output version
- `lib` controls available built-in type definitions
- Start simple, then tweak only when needed
