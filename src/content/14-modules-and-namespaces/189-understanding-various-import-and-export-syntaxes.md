# 189. Understanding Various Import & Export Syntaxes 🧠

## Section 14: Modules & Namespaces

ES Modules have multiple useful variants.

## Named import/export

```ts
export const x = 1;
import { x } from "./file.js";
```

## Namespace-style grouped import

```ts
import * as Validation from "./validation.js";
Validation.validate(...);
```

## Alias import

```ts
import { autobind as Autobind } from "./autobind.js";
```

## Default export/import

```ts
export default class Component {}
import Component from "./base-component.js";
```

## Para sa non-developer 👇

Parang iba-ibang paraan ng pagkuha ng item sa warehouse:
- by exact name
- by grouped package
- by custom nickname

## Recap 🚀

- Know syntax variants to write cleaner and conflict-free imports
