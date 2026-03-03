# 130. Conditional Types - Another Example 🧪

## Section 10: Deriving Types From Types

Another practical idea: return type depends on incoming object shape.

## Example

```ts
type FullNamePerson = {
  firstName: string;
  lastName: string;
};

type FullNameOrNothing<T> = T extends FullNamePerson ? string : never;

function getFullName<T extends object>(person: T): FullNameOrNothing<T> {
  if (
    "firstName" in person &&
    "lastName" in person &&
    person.firstName &&
    person.lastName
  ) {
    return `${person.firstName} ${person.lastName}` as FullNameOrNothing<T>;
  }

  throw new Error("No firstname and/or last name found.");
}
```

## What happens

- if object has required full-name shape -> return type becomes `string`
- otherwise -> return type becomes `never`

## Para sa non-developer 👇

Parang eligibility check:
- kumpleto requirements -> may valid output
- kulang requirements -> invalid path

Type level pa lang, reflected na ang rules.

## Interactive warm-up 🎯

1. Ano return type kapag match si `T` sa `FullNamePerson`?  
2. Ano return type kapag hindi match?  
3. Ano main advantage ng ganitong pattern?

Tamang sagot:
- `string`
- `never`
- mas precise at self-documenting function contracts

## Recap 🚀

- Conditional types can express behavior-based return contracts
- Useful in advanced generic function design
