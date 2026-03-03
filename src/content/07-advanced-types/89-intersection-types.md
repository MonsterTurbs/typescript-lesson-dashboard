# 89. Intersection Types ➕

## Section 7: Advanced Types

Intersection type means pag-combine ng multiple types into one gamit `&`.

## Example

```ts
type FileData = {
  path: string;
  content: string;
};

type Status = {
  isOpen: boolean;
  errorMessage?: string;
};

type AccessedFileData = FileData & Status;
```

`AccessedFileData` now has:
- `path`
- `content`
- `isOpen`
- optional `errorMessage`

## Another use case

```ts
type DatabaseData = {
  connectionURL: string;
  credentials: string;
};

type AccessedDatabaseData = DatabaseData & Status;
```

Reuse mo si `Status` sa ibang data sources without duplicate typing.

## Para sa non-developer 👇

Parang pinagsamang dalawang forms:
- Form A fields + Form B fields
- result = isang mas kumpletong form

## Interactive warm-up 🎯

1. Anong symbol ginagamit sa intersection types?  
2. Nababawasan ba ang properties o nadadagdagan?  
3. Bakit useful ito sa reusable shared fields?

Tamang sagot:
- `&`
- nadadagdagan (combined)
- para iwas duplicate definitions

## Recap 🚀

- Intersection types combine multiple type contracts
- Great for shared + specialized type composition
