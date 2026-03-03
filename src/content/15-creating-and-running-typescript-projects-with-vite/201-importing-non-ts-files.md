# 201. Importing non-TS Files 🧩

## Section 15: Creating & Running TypeScript Projects with Vite

With Vite, puwede kang mag-import ng non-TS assets in TS files:
- CSS
- SVG/images
- other supported static assets

```ts
import "./style.css";
import logo from "./logo.svg";
```

## Important

This is a build-tool capability (Vite behavior), not plain TypeScript feature alone.

## Para sa non-developer 👇

Parang iisang system na bahala sa code + design assets integration.

## Recap 🚀

- Vite resolves and processes non-TS imports for you in modern workflows
