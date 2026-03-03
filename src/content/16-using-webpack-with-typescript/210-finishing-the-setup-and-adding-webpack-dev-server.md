# 210. Finishing the Setup & Adding webpack-dev-server 🧭

## Section 16: Using Webpack with TypeScript

Use dev server for faster local workflow.

`package.json` script example:

```json
{
  "scripts": {
    "start": "webpack-dev-server"
  }
}
```

## Key additions

- `mode: "development"` for dev-friendly behavior
- proper `publicPath` to make in-memory bundle load correctly

## Para sa non-developer 👇

Parang live workshop mode: auto-rebuild and quick refresh habang nagde-dev ka.

## Recap ✅

- Dev server setup completes smooth local Webpack + TS development loop
