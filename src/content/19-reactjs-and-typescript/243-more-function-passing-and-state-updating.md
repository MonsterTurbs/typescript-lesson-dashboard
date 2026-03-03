# 243. More Function Passing & State Updating ➕

Magpasa ulit ng callback para makapag-add ng bagong goal mula `NewGoal` papuntang `App`.

```tsx
interface NewGoalProps {
  onAdd: (title: string, summary: string) => void;
}

setGoals((prevGoals) =>
  prevGoals.concat({
    id: Math.random(),
    title,
    description: summary,
  })
);
```

## Para sa non-developer 👇

Parang request form ito: child sends new data, parent updates the master list.
