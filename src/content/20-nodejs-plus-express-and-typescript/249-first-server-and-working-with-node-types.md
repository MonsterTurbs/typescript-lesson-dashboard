# 249. First Server & Working with Node Types 🌐

Kapag Node built-ins ang gamit (`node:http`), kailangan ng Node type defs.

```bash
npm install --save-dev @types/node
```

```ts
import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.end('Hello World');
});

server.listen(3000);
```

## Why `@types/node`?

Para maintindihan ni TypeScript ang Node APIs at object shapes (`req`, `res`, etc.).

## Para sa non-developer 👇

Parang binigyan mo ng manual ang system tungkol sa available server tools.
