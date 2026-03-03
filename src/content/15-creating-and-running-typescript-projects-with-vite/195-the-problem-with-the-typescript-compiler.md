# 195. The Problem With The TypeScript Compiler 🤔

## Section 15: Creating & Running TypeScript Projects with Vite

`tsc` is great for TypeScript compilation, pero hindi siya full web project builder by default.

## Common issue

Kapag nag-build ka with plain `tsc`:
- `.ts` gets compiled to `.js`
- but non-TS files (`.html`, `.css`, assets) are not automatically handled/copied as needed

Result:
- `dist` can miss important files for deployment

## Para sa non-developer 👇

Parang translator lang si `tsc` ng TS-to-JS, hindi siya full packaging team ng buong website.

## Recap 🎯

- `tsc` solves type compilation, not complete project bundling/asset pipeline
