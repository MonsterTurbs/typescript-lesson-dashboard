# 90. More on Type Guards 🛡️

## Section 7: Advanced Types

Type guards help you detect actual value type sa runtime para safe ang access sa properties.

## Example with union type

```ts
type FileSource = { path: string };
type DBSource = { connectionURL: string };
type Source = FileSource | DBSource;

function loadData(source: Source) {
  if ("path" in source) {
    console.log("Opening file at:", source.path);
    return;
  }

  console.log("Connecting to DB:", source.connectionURL);
}
```

## Why this works

`"path" in source` narrows `source` to `FileSource`.  
Pag hindi nag-match, TypeScript infers na `DBSource` na ang natira.

## Para sa non-developer 👇

Parang branch routing:
- if may file path -> file flow
- else -> database flow

Kaya hindi ka makaka-access ng maling field sa maling object type.

## Interactive warm-up 🎯

1. Ano purpose ng type guard?  
2. Sa sample, anong check ang ginamit?  
3. Bakit helpful sa union types?

Tamang sagot:
- para ma-narrow ang concrete type
- `"path" in source`
- dahil magkaiba ang allowed properties per type

## Recap ✅

- Type guards are essential for safe union handling
- They unlock correct autocompletion and error prevention
