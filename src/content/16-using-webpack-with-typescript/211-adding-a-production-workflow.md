# 211. Adding a Production Workflow 🚢

## Section 16: Using Webpack with TypeScript

Separate production config for optimized deploy output.

## Typical pattern

- `webpack.config.js` for development
- `webpack.config.prod.js` for production

Production highlights:
- `mode: "production"`
- source maps often disabled/reduced
- optional cleanup plugin before new build

```bash
npm run build
```

## Para sa non-developer 👇

Parang may training setup at may final release setup, magkaiba ang priorities.

## Recap 🚀

- Dedicated prod workflow gives smaller, optimized deployment bundles
