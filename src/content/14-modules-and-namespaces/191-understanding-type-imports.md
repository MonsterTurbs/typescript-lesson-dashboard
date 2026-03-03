# 191. Understanding "type" Imports 🏷️

## Section 14: Modules & Namespaces

When importing only TypeScript types/interfaces, you can mark them as type-only imports.

```ts
import type { DragTarget } from "../models/drag-drop.js";
```

Or:

```ts
import { type DragTarget } from "../models/drag-drop.js";
```

## Why helpful?

- clearer intent
- can help tooling/build optimization
- avoids unnecessary runtime import confusion in some setups

## Para sa non-developer 👇

Parang label na “documentation-only item,” hindi runtime object.

## Recap 🎯

- `type` imports are useful especially in stricter/optimized build pipelines
