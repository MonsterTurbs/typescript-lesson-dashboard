# 187. Using ES Modules 🌐

## Section 14: Modules & Namespaces

Modern approach: use explicit `import` / `export`.

```ts
export interface DragTarget { ... }

import { DragTarget } from "../models/drag-drop.js";
```

## Key setup notes

- `tsconfig` module target aligned to ES module strategy
- browser script tag should use `type="module"` when needed
- use `.js` in import paths (runtime-resolved compiled files)

## Para sa non-developer 👇

Parang explicit contact list: malinaw kung sino ang hinihingian mo ng data/feature.

## Recap 🎯

- ES modules give clearer, safer dependency management
