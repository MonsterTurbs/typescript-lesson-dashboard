# 175. Using a Getter ✨

## Section 13: Practice Time! Let's build a Drag & Drop Project

Use getter for cleaner people label text (`1 person` vs `x persons`).

```ts
get persons() {
  if (this.project.people === 1) {
    return "1 person";
  }
  return `${this.project.people} persons`;
}
```

## Para sa non-developer 👇

Parang smart formatter: automatic tamang wording based sa count.

## Recap 🚀

- Getters are great for computed display-friendly values
