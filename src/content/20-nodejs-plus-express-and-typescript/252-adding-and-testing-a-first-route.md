# 252. Adding & Testing a First Route 🧪

Gamit ang Express Router, puwedeng ihiwalay ang todo routes.

```ts
import express from 'express';
import { addTodo } from '../data.js';

const router = express.Router();

router.post('/todos', (req, res) => {
  const text = req.body.text;
  const addedTodo = addTodo(text);
  res.json({ message: 'Todo added', todo: addedTodo });
});

export default router;
```

Sa main app:

```ts
app.use(express.json());
app.use(todoRoutes);
```

## Para sa non-developer 👇

Parang may hiwalay kang counter para sa specific service (todos) para mas maayos ang processing.
