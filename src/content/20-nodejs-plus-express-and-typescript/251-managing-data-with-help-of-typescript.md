# 251. Managing Data with Help of TypeScript 📦

Define tayo ng Todo model at typed utility functions.

```ts
interface Todo {
  id: number;
  text: string;
}

let todos: Todo[] = [];

export function addTodo(text: string) {
  const newTodo: Todo = { id: Math.random(), text };
  todos.push(newTodo);
  return newTodo;
}
```

## Why this is useful

TypeScript catches shape mismatches early (e.g., wrong property names).

## Para sa non-developer 👇

Parang inventory template: pare-pareho ang format ng bawat item para iwas sabit.
