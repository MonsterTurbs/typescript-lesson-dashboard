# 239. Managing State 🧠

Use `useState` para dynamic ang goals list.

```tsx
import { useState } from 'react';

const [goals, setGoals] = useState([
  { id: 1, title: 'Learn TS', description: 'Learn TS from the ground up.' },
]);
```

## Tip

Madalas inferred na ang type from initial value. Puwede ring explicit generic kung needed.

## Para sa non-developer 👇

Parang live list ito na puwedeng magbago habang ginagamit ang app.
