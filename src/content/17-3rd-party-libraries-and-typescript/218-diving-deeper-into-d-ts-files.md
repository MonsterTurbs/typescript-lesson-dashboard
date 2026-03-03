# 218. Diving Deeper Into `.d.ts` Files 🔍

Kung gumagawa ka ng library, importante ang `.d.ts` para sa TypeScript users.

## 3 common ways to ship a library

- ship `.ts` source directly
- ship `.js` + sariling `.d.ts`
- ship `.js` + rely on `@types/<library>` ecosystem

## Simple declaration sample

```ts
declare module 'my-lib' {
  export function parse(input: string): { ok: boolean };
}
```

## Para sa non-developer 👇

Parang product packaging:
- may product mismo (`.js`)
- may instruction leaflet (`.d.ts`)
