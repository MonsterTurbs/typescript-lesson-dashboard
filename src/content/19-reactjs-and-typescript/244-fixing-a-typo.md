# 244. Fixing a Typo 🩹

Correct `handleSubmit` version:

```tsx
function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const enteredGoal = goalRef.current!.value;
  const enteredSummary = summaryRef.current!.value;

  // validation...
  onAdd(enteredGoal, enteredSummary);
}
```

## Quick note

Small typos sa refs/events puwedeng mag-cause ng weird behavior, kaya malaking tulong ang TS checks.
