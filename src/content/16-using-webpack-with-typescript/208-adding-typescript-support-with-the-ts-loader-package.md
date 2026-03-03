# 208. Adding TypeScript Support with the ts-loader Package 🔌

## Section 16: Using Webpack with TypeScript

Need natin turuan si Webpack paano i-handle ang `.ts` files.

```js
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  devtool: "inline-source-map",
};
```

## Result

Webpack can now compile TS and include it in bundled output.

## Para sa non-developer 👇

Parang nagdagdag ka ng translator station sa assembly pipeline.

## Recap ✅

- `ts-loader` + module rules enable TS-aware bundling
