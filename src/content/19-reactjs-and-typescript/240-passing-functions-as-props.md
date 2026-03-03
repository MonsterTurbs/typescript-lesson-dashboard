# 240. Passing Functions as Props 🔁

Para gumana ang delete button, magpasa ng callback mula parent papuntang child.

```tsx
interface CourseGoalsProps {
  goals: Goal[];
  onDelete: (id: number) => void;
}
```

Sa parent:

```tsx
function handleDeleteGoal(id: number) {
  setGoals((prev) => prev.filter((goal) => goal.id !== id));
}
```

## Para sa non-developer 👇

Parang remote control: child component ang pipindot, parent ang mag-aapply ng pagbabago.
