# 253. Finishing The Basic App ✅

Dagdagan pa ng routes: list all, get one, update, delete.

```ts
router.get('/todos', (req, res) => {
  res.json({ todos: getTodos() });
});

router.patch('/todos/:id', (req, res) => {
  const updated = updateTodo(+req.params.id, req.body.text);
  res.json({ message: 'Todo updated', todo: updated });
});
```

## Error handling middleware

```ts
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: 'An error occurred.' });
});
```

## Para sa non-developer 👇

Parang kumpletong CRUD operations na sa admin panel: add, view, edit, remove.
