# 215. Problem: Using JavaScript Libraries with TypeScript ⚠️

Kapag nag-import ka ng pure JavaScript library (hal. `lodash`) sa TypeScript project, puwedeng mag-error si TypeScript.

## Common error

```ts
import _ from 'lodash';

const chunks = _.chunk([1, 2, 3, 4], 2);
```

Possible message:
`Could not find a declaration file for module 'lodash'`

## Bakit nangyayari ito?

Dahil JavaScript library si `lodash`, at wala agad type info na kailangan ni TypeScript.

## Para sa non-developer 👇

Parang may bagong teammate ka pero walang role description.
Hindi alam ng team (TypeScript) ano exact task niya.

## Quick takeaway 🚀

- JS library works, pero kailangan ng extra type definitions sa TS world
