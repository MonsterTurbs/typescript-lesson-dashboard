# 207. Adding Entry & Output Configuration 🛠️

## Section 16: Using Webpack with TypeScript

Create `webpack.config.js` and define core paths.

```js
const path = require("path");

module.exports = {
  entry: "./src/app.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
```

## Why these matter

- `entry`: starting file of dependency graph
- `output`: where and how final bundle is emitted

## Para sa non-developer 👇

Parang sabihin mo saan magsisimula ang factory at saan ilalabas ang final product.

## Recap 🚀

- Entry/output config is the backbone of webpack build flow
