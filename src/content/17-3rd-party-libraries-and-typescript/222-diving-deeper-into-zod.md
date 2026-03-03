# 222. Diving Deeper Into Zod 🧠

Maganda kay Zod: isang schema lang, tapos may runtime checks + strong TypeScript inference.

## Example with unions

```ts
import { z } from 'zod';

const schema = z.object({
  title: z.string(),
  values: z.array(z.union([z.string(), z.number()])),
});

const parsed = schema.parse(input);
```

`parsed` now has reliable inferred type based sa schema.

## Why this is powerful

- less manual type duplication
- safer data handling
- clearer contracts sa team

## Para sa non-developer 👇

Parang may iisang checklist na ginagamit ng lahat,
para consistent at tama lagi ang format ng data.
