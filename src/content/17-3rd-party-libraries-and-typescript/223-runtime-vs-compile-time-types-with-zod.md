# 223. Runtime vs Compile-time Types with Zod ⚖️

TypeScript alone = compile-time safety.
Zod = runtime validation + compile-time inference.

## Pattern

```ts
import { z } from 'zod';

const dataSchema = z.object({
  title: z.string(),
  id: z.number(),
});

type Data = z.infer<typeof dataSchema>;

function output(data: Data) {
  console.log(data.title, data.id);
}
```

## Key idea

- `z.infer` avoids duplicate manual type definitions
- schema changes automatically reflect in `Data`

## Para sa non-developer 👇

Parang iisang source of truth:
isang form template lang ang sinusunod sa checking at reporting.

## Recap 🚀

- Zod bridges compile-time and runtime confidence in data
