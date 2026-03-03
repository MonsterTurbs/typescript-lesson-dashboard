# 254. Native Node.js TypeScript Support (Without Compilation!) ⚡

Modern Node versions can run `.ts` directly.

```bash
node app.ts
# or older experimental mode:
node --experimental-strip-types app.ts
```

## Important adjustments

- `import type { ... }` for type-only imports
- use `.ts` extensions in imports when not compiling
- tsconfig flags like `allowImportingTsExtensions`, `noEmit`

## Para sa non-developer 👇

Parang direct drive mode: mas konting step, pero kailangan tama ang setup rules.
