# 98. Revising the "Record" Type 🧰

## Section 7: Advanced Types

`Record` is a built-in utility type for key-value object typing.

## Equivalent concept

Custom index type:

```ts
type DataStore = {
  [key: string]: number | boolean;
};
```

Record version:

```ts
type DataStoreRecord = Record<string, number | boolean>;
```

Pareho ang core idea:
- key type: `string`
- value type: `number | boolean`

## Why use `Record`?

- concise syntax
- easy to read once familiar
- common in real-world TS codebases

## Para sa non-developer 👇

Parang template ng dictionary:
- lahat ng entries may text key
- lahat ng values dapat pasok sa allowed kinds

Cleaner shorthand lang si `Record`.

## Interactive warm-up 🎯

1. Anong dalawang type arguments ang need ni `Record`?  
2. Equivalent ba ito sa index signature use cases?  
3. Kailan ka pipili ng custom type instead of `Record`?

Tamang sagot:
- key type and value type
- oo, madalas
- kapag mas gusto mong explicit custom naming/context

## Recap 🚀

- `Record<K, V>` is practical shorthand for typed key-value objects
- Choose style based on readability and team preference
