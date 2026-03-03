# 238. Component Functions & Types: An Alternative 🔄

May older pattern gamit `FC` type from React.

```tsx
import type { FC } from 'react';

const CourseGoals: FC<CourseGoalsProps> = ({ goals }) => {
  return <ul>{/* ... */}</ul>;
};
```

## Recommendation

Mas common ngayon ang direct function + typed props parameter.

## Para sa non-developer 👇

Parang dalawang valid na style ng pagsulat ng parehong instruction manual.
