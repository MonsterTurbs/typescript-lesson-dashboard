# 10. Module Introduction 🧭

## Section 2: TypeScript Basics & Basic Types

Ngayong malinaw na kung ano ang TypeScript at bakit ito valuable,
time na para sumabak sa pinaka-core essentials. 🚀

Sa section na ito, bubuo tayo ng matibay na foundation
na gagamitin mo sa lahat ng susunod na modules, kabilang na ang advanced topics.

## Ano ang aasahan mo sa section na ito? 📚

Dito natin aaralin ang mga pinaka-importanteng building blocks:

- built-in types sa TypeScript
- object at array types
- function types
- paggawa ng custom types
- special TypeScript features na kailangan sa real-world projects

## Interactive warm-up 🎯

Quick check bago tayo mag-deep dive:

1. Alin dito ang pinaka-familiar ka na: objects, arrays, o functions?
2. Anong part ang pinaka-gusto mong ma-master agad?
3. Ready ka na bang gawing mas safe at mas predictable ang code mo?

## Mini code snippet preview 👀

```ts
type User = {
  name: string;
  age: number;
  role: 'student' | 'mentor';
};

const users: User[] = [
  { name: 'Ana', age: 21, role: 'student' },
  { name: 'Luis', age: 25, role: 'mentor' },
];

function getAdultStudents(list: User[]) {
  return list.filter((user) => user.age >= 18 && user.role === 'student');
}

console.log(getAdultStudents(users));
```

## Paliwanag para sa non-developer 👇

Isipin mo na may listahan ka ng participants sa isang workshop.

- `type User` = standard form ng details na dapat sundan
- `User[]` = listahan ng lahat ng participants
- `getAdultStudents` = rule na kumukuha lang ng adult na students

Ginagawa ni TypeScript:
- chine-check kung tama ang format ng data
- nagbibigay ng warning kapag may kulang o maling type

So mas less mistakes, mas smooth ang paggawa ng project. ✅

## Bakit mahalaga itong module? 💡

Ito ang magiging base mo para sa buong course.
Kapag na-master mo ang section na ito, mas magiging madali ang pag-intindi sa advanced features sa next modules.

Step by step lang, then mapapansin mo na mas natural na ang TypeScript workflow mo. 🔥
