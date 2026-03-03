# 237. Adding Another Component with Props 📋

Gumawa tayo ng `CourseGoals` component na tumatanggap ng list.

```tsx
type Goal = {
  id: number;
  title: string;
  description: string;
};

interface CourseGoalsProps {
  goals: Goal[];
}
```

Then i-render ang `goals.map(...)` sa list items.

## Para sa non-developer 👇

Parang checklist board: bawat goal may ID, title, at maikling description.
