# 236. The Special `children` Prop & Optional Props 👶

`children` ay special React prop. I-type mo rin ito kapag gagamitin.

```tsx
import type { ReactNode } from 'react';

interface HeaderProps {
  image: { src: string; alt: string };
  children?: ReactNode;
}
```

## Note

- `children?` = optional
- puwede ring gawing required kung kailangan

## Para sa non-developer 👇

Parang gift box: may default laman, pero puwedeng lagyan pa ng extra content.
