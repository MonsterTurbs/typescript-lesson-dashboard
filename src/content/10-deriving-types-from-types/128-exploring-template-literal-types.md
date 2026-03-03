# 128. Exploring Template Literal Types 🧵

## Section 10: Deriving Types From Types

Template literal types let you compose string literal types dynamically.

## Permission combination example

```ts
type ReadPerm = "no-read" | "read";
type WritePerm = "no-write" | "write";

type FilePermissions = `${ReadPerm}-${WritePerm}`;
```

Possible results include:
- `"no-read-no-write"`
- `"no-read-write"`
- `"read-no-write"`
- `"read-write"`

## Event-name generation example

```ts
type DataFile = {
  data: string;
  permissions: FilePermissions;
};

type DataFileEventNames = `${keyof DataFile}Changed`;
// "dataChanged" | "permissionsChanged"
```

## Para sa non-developer 👇

Parang auto-name generator:
- may base labels ka
- pinagsasama sila ng system para gumawa ng valid name combinations

Less manual encoding, more consistency.

## Interactive warm-up 🎯

1. Anong characters ang gamit ng template literal types?  
2. Puwede bang gamitin union literals sa loob ng template type?  
3. Useful ba ito sa event name patterns?

Tamang sagot:
- backticks + `${...}`
- oo
- oo

## Recap 🚀

- Template literal types enable expressive string-type composition
- Great for naming conventions and generated key patterns
