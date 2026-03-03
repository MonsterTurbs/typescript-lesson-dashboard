# 171. More Classes & Custom Types 🧱

## Section 13: Practice Time! Let's build a Drag & Drop Project

Replace loose `any` with strong custom models.

```ts
enum ProjectStatus {
  Active,
  Finished
}

class Project {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public people: number,
    public status: ProjectStatus
  ) {}
}
```

## Why important?

Mas accurate autocomplete + fewer bugs + clearer intent.

## Para sa non-developer 👇

Parang pinalitan mo generic notes ng formal structured record template.

## Recap 🚀

- Custom classes/enums make app domain explicit and safer
