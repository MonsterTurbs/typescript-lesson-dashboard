# 241. Handling Form Submission 📝

Manual form handling with typed React event.

```tsx
import type { FormEvent } from 'react';

function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  // extract data
}
```

## Why type the event?

Para sure na tama ang event API na ginagamit mo sa form context.

## Para sa non-developer 👇

Parang front desk: hino-hold muna ang default submit para ma-validate/process bago i-save.
