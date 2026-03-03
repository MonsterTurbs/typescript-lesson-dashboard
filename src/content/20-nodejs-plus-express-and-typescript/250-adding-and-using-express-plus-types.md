# 250. Adding & Using Express (+ Types) 🚂

Express ang popular web framework sa Node ecosystem.

```bash
npm install express
npm install --save-dev @types/express
```

```ts
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.listen(3000);
```

## Para sa non-developer 👇

Parang naglagay ka ng mas organized na traffic system para sa web requests.
