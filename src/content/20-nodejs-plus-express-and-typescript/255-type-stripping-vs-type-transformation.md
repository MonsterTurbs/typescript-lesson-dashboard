# 255. Type Stripping vs Type Transformation 🧠

Dalawang mode concept:

- **Type stripping**: tinatanggal lang ang TS-only syntax
- **Type transformation**: kino-convert din ang TS features to JS equivalents

## Why this matters

Features like `enum` need transformation, hindi sapat ang strip-only.

```bash
node --experimental-transform-types app.ts
```

## Practical note

Strip-only is usually faster, pero may feature limitations.

## Para sa non-developer 👇

Parang light cleanup vs full conversion process: mas mabilis ang una, mas complete ang pangalawa.
