# 242. Working with Refs 🎯

Alternative sa controlled inputs: use refs para basahin input values sa submit.

```tsx
import { useRef } from 'react';

const goalRef = useRef<HTMLInputElement>(null);
const summaryRef = useRef<HTMLInputElement>(null);

const enteredGoal = goalRef.current!.value;
const enteredSummary = summaryRef.current!.value;
```

## Key point

Generic type sa `useRef` para alam ni TypeScript anong element ang ire-reference.

## Para sa non-developer 👇

Parang may direct pointer ka sa form fields para kunin ang latest laman kapag submit.
