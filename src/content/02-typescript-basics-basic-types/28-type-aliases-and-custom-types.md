# 28. Type Aliases & Custom Types 🏷️

## Section 2: TypeScript Basics & Basic Types

Habang lumalaki ang codebase, humahaba rin ang type definitions.
Kapag paulit-ulit mong ginagamit ang same union/object type,
mas magandang gumawa ng **type alias** para reusable at malinis ang code. 🚀

## Bakit kailangan ng type alias? 🤔

Kung ganito ang role type:

```ts
'admin' | 'editor' | 'guest' | 'reader'
```

at kailangan mo ito sa maraming places (variables, function params, objects),
nakakapagod at risky kung copy-paste lang lagi.

Solution: `type` keyword.

## Basic type alias example

```ts
type Role = 'admin' | 'editor' | 'guest' | 'reader';

let userRole: Role = 'admin';

function access(role: Role) {
  console.log(`Checking access for ${role}`);
}
```

Isang source of truth na lang ang role options mo. ✅

## Interactive warm-up 🔥

Quick check:

1. Ano ang keyword para gumawa ng custom type alias?  
2. Bakit better ito kaysa copy-paste ng long union type?  
3. Puwede bang gamitin ang alias sa function parameter at variable?

Tamang sagot:
- `type`
- mas maintainable, less bugs
- yes

## Type alias for object types

Ito ang isa pang super common use case:

```ts
type Role = 'admin' | 'editor' | 'guest' | 'reader';

type User = {
  name: string;
  age: number;
  role: Role;
  permissions: string[];
};

const userA: User = {
  name: 'Max',
  age: 36,
  role: 'admin',
  permissions: ['read', 'write'],
};
```

Kapag binago mo si `Role`, automatic naaapektuhan lahat ng gumagamit nito.

## Paliwanag para sa non-developer 👇

Isipin mo na may company handbook:

- sa halip na ulitin ang same rule sa bawat page,
- gumawa ka ng official rule name, tapos iyon na lang ang nire-reference.

Ganun ang type alias:
- central definition
- reusable everywhere
- less inconsistency sa team code

## Why this matters 💡

- DRY (Don’t Repeat Yourself) ang types
- mas madaling maintenance
- less chance ng subtle mismatches
- cleaner code sa long-term projects

## Mini mission 💬

1. Gumawa ng `type Status = 'todo' | 'doing' | 'done'`  
2. Gumawa ng `type Task = { title: string; status: Status }`  
3. Gumawa ng function na tumatanggap ng `Task`  
4. Subukang mag-assign ng invalid status at observe error

Kapag confident ka sa type aliases, mas mabilis ka nang makakagawa ng scalable at maintainable TypeScript code. 🔥
