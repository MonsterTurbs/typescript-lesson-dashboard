# 217. Exploring `.d.ts` Files 📘

Ang `.d.ts` ay **type declaration files**.
Hindi sila runtime logic; type info lang sila para kay TypeScript.

## Typical location

- `node_modules/@types/<library>/...`

## Example idea

```ts
// declaration-style example
export function chunk<T>(array: T[], size?: number): T[][];
```

Ito ang ginagamit ni TS para malaman:
- anong arguments ang expected
- anong return type

## Para sa non-developer 👇

Parang “legend” sa mapa: hindi siya mismong daan,
pero siya ang gabay para hindi ka maligaw.
