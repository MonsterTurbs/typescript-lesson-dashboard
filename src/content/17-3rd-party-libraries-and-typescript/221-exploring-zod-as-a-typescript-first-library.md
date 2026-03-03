# 221. Exploring Zod as a TypeScript-first Library 🧪

Si Zod ay library para sa **runtime validation** na bagay na bagay sa TypeScript.

## Basic schema

```ts
import { z } from 'zod';

const dataSchema = z.object({
  title: z.string(),
  id: z.number(),
  values: z.array(z.string()),
});
```

## Parsing data

```ts
const parsedData = dataSchema.parse(rawData);
```

- valid data: tuloy ang flow ✅
- invalid data: error agad ❌

## Para sa non-developer 👇

Parang quality inspector si Zod bago pumasok sa system ang data.
