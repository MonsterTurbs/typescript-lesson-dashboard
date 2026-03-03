# 164. DOM Element Selection & OOP Rendering 🧠

## Section 13: Practice Time! Let's build a Drag & Drop Project

Start tayo sa `ProjectInput` class para i-render ang form from template.

```ts
this.templateElement = document.getElementById("project-input")! as HTMLTemplateElement;
this.hostElement = document.getElementById("app")! as HTMLDivElement;
```

Then import template content and attach to host element.

## Para sa non-developer 👇

Parang kumuha ka ng hidden UI blueprint tapos idinikit mo sa visible app area.

## Recap ✅

- Class-based rendering gives cleaner UI structure kaysa scattered DOM code
