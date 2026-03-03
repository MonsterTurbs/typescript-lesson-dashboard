# 93. "Outsourcing" Type Guards & Using Type Predicates 🧠

## Section 7: Advanced Types

Reusable type checks? Ilagay sa helper function.  
Modern TS can infer type predicates from these checks.

## Example

```ts
type FileSource = { type: "file"; path: string };
type DBSource = { type: "db"; connectionURL: string };
type Source = FileSource | DBSource;

function isFile(source: Source) {
  return source.type === "file";
}

function loadData(source: Source) {
  if (isFile(source)) {
    console.log(source.path); // narrowed to FileSource
    return;
  }

  console.log(source.connectionURL); // narrowed to DBSource
}
```

## Why helpful

- reuse guard logic in many places
- keep business logic clean
- keep narrowing behavior consistent

## Para sa non-developer 👇

Parang reusable validator function:
- isang beses mo ginawa ang rule
- kahit saan mo kailangan, tawag mo lang

Less copy-paste, less mistakes.

## Interactive warm-up 🎯

1. Ano advantage ng hiwalay na `isFile(...)` function?  
2. Ano na-ni-narrow kapag nag-`true` ang `isFile(source)`?  
3. Bakit magandang pattern ito sa malaking codebase?

Tamang sagot:
- reusable checking logic
- `source` becomes `FileSource`
- cleaner at mas maintainable na checks

## Recap 🚀

- Type guard helpers improve reuse and readability
- Type predicates power safer downstream code
