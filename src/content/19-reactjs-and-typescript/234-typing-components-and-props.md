# 234. Typing Components & Props 🧩

Sa React + TS, i-type natin ang props para safe at clear.

```tsx
type HeaderProps = {
  image: {
    src: string;
    alt: string;
  };
};

export default function Header({ image }: HeaderProps) {
  return <img {...image} />;
}
```

## Key idea

Component function pa rin ito, pero typed ang input (`props`).

## Para sa non-developer 👇

Parang order form: malinaw kung anong fields lang ang puwedeng tanggapin.
