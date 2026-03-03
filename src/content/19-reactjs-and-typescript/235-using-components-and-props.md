# 235. Using Components & Props 🧱

Kapag typed ang component, required din ang tamang props sa paggamit.

```tsx
import Header from './components/Header';
import goalsImg from './assets/goals.jpg';

<Header image={{ src: goalsImg, alt: 'A list of goals' }} />
```

## Benefit

TypeScript hihinto agad kung kulang o mali ang prop structure.

## Para sa non-developer 👇

Parang plug na may tamang shape lang ang kasya, kaya iwas wrong connection.
