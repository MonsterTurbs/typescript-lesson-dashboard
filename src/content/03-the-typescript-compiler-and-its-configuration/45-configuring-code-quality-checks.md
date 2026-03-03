# 45. Configuring Code Quality Checks 🧹

## Section 3: The TypeScript Compiler (and its Configuration)

Hindi lang compile at type checking ang kaya ng `tsconfig.json`.
Pwede mo rin itong gamitin para sa extra code quality checks. 🚀

Ang mga checks na ito ay hindi directly tungkol sa types,
pero malaking tulong para mas malinis at mas maintainable ang code mo.

## Core quality checks ✅

```json
{
  "compilerOptions": {
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

## 1) `noUnusedLocals` 🧠

Nagwa-warning/error kapag may local variable ka na dineclare pero hindi ginamit.

```ts
function greet() {
  const message = 'Hello!';
  const temp = 123; // unused
  console.log(message);
}
```

Benefit:
- less clutter
- mas clear kung alin talaga ang important sa logic

## 2) `noUnusedParameters` 📦

Nagwa-warning/error kapag may function parameter na hindi mo naman ginagamit.

```ts
function add(a: number, b: number, debug: boolean) {
  return a + b; // debug is unused
}
```

Benefit:
- cleaner function signatures
- less confusion sa ibang magbabasa ng code

## 3) `noFallthroughCasesInSwitch` 🔀

Hinuhuli ang `switch` cases na dumudulas sa next case nang walang `break` o `return`.

```ts
const role = 'admin';

switch (role) {
  case 'admin':
    console.log('Admin access');
  case 'guest':
    console.log('Guest access');
    break;
}
```

Sa example sa taas, magfa-fallthrough ang `admin` papuntang `guest` case.
Possible bug ito kung hindi intentional.

## Paliwanag para sa non-developer 👇

Isipin mo itong 3 checks bilang "linis patrol":
- tinatanggal ang mga bagay na wala nang gamit
- hinuhuli ang nakakalitong function inputs
- hinuhuli ang logic mistakes sa branching

Result: mas madaling i-maintain at i-debug ang codebase. ✅

## Interactive warm-up 🔥

1. Aling setting ang para sa unused local variables?  
2. Aling setting ang para sa unused function parameters?  
3. Aling setting ang tumutulong iwasan ang accidental switch fallthrough?

Tamang sagot:
- `noUnusedLocals`
- `noUnusedParameters`
- `noFallthroughCasesInSwitch`

## Practical reminder 💡

These checks are small, but high-impact sa real projects.
Kapag naka-enable sila, mas disciplined ang team at mas konti ang silent bugs.

## Recap 🎯

- `tsconfig.json` can do more than type checking
- Quality checks help catch common code issues early
- `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`
- Great defaults for cleaner and safer code
