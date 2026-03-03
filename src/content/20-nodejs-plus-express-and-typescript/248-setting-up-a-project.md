# 248. Setting Up a Project 🧱

Basic Node + TypeScript project setup.

```bash
npm init -y
npm install --save-dev typescript
```

`package.json` idea:

```json
{
  "type": "module",
  "scripts": {
    "compile": "tsc",
    "start": "node dist/app.js"
  }
}
```

`tsconfig.json` essentials:

- `target: es2022`
- `module: NodeNext`
- `strict: true`
- `outDir: dist`

## Para sa non-developer 👇

Parang nagse-setup ka ng workshop: tools, output folder, at standard workflow bago magsimula ang actual app.
