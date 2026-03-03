# 216. Solution: Installing `@types` Packages 🛠️

Fix: i-install ang type definitions package.

```bash
npm install lodash
npm install --save-dev @types/lodash
```

Pagkatapos nito, masaya na si TypeScript at may autocomplete ka na rin. 🎉

```ts
import _ from 'lodash';

const chunks = _.chunk([1, 2, 3, 4], 2);
// inferred: number[][]
```

## Rule of thumb

- `library package` for runtime
- `@types/library` for compile-time typing

## Para sa non-developer 👇

Parang nagbigay ka ng user manual sa bagong tool.
Kaya alam na ng system paano ito gamitin nang tama.
