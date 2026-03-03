# 209. Adjust Webpack Config 🧪

## Section 16: Using Webpack with TypeScript

For latest webpack-dev-server compatibility, include these:

```js
devServer: {
  static: [
    {
      directory: path.join(__dirname),
    },
  ],
},
output: {
  filename: "bundle.js",
  path: path.resolve(__dirname, "dist"),
  publicPath: "/dist/",
},
```

## Important

`publicPath` should be `"/dist/"` (with leading slash), not just `"dist"`.

## Para sa non-developer 👇

Parang tamang routing sign para mahanap ng dev server ang generated assets.

## Recap 🎯

- Small config details here prevent broken dev-server asset loading
