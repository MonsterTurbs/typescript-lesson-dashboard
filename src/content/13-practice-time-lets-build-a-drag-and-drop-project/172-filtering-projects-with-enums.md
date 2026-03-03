# 172. Filtering Projects with Enums 🔎

## Section 13: Practice Time! Let's build a Drag & Drop Project

Filter project list based on current list type (`active` or `finished`).

```ts
const relevantProjects = projects.filter(prj => {
  if (this.type === "active") {
    return prj.status === ProjectStatus.Active;
  }
  return prj.status === ProjectStatus.Finished;
});
```

## Also fix duplicate rendering

Clear list first before re-rendering items.

## Para sa non-developer 👇

Parang bawat column pinapakita lang ang cards na pasok sa status niya.

## Recap ✅

- Filtering + controlled re-render keeps UI accurate
