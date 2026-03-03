# 91. Discriminated Unions 🏷️

## Section 7: Advanced Types

Discriminated union = union types na may shared tag field (usually `type`) for easy narrowing.

## Example

```ts
type FileSource = {
  type: "file";
  path: string;
};

type DBSource = {
  type: "db";
  connectionURL: string;
};

type Source = FileSource | DBSource;

function loadData(source: Source) {
  if (source.type === "file") {
    console.log(source.path);
    return;
  }

  console.log(source.connectionURL);
}
```

## Why this pattern is nice

- super clear narrowing signal
- less fragile than checking random property existence
- easy to maintain as type definitions evolve

## Para sa non-developer 👇

Parang may label ang bawat package:
- `type: "file"` -> sa file counter
- `type: "db"` -> sa database counter

Label pa lang, alam na agad ang tamang process.

## Interactive warm-up 🎯

1. Ano ang shared property sa discriminated unions?  
2. Paano mag-narrow sa file case?  
3. Bakit mas maintainable ito?

Tamang sagot:
- commonly `type`
- `if (source.type === "file")`
- explicit at stable ang discriminator

## Recap 🚀

- Discriminated unions give predictable narrowing
- Excellent pattern for complex union-based logic
