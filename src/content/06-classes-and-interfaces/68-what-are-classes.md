# 68. What are Classes? 🏗️

## Section 6: Classes & Interfaces

Bago mag-code, solidify muna natin ang concept.

## Ano ang class?

Ang **class** ay blueprint para sa objects.  
Create ka ng isang definition, then puwede kang gumawa ng maraming object instances mula rito.

## Example idea

```ts
class User {
  name: string = "";
  age: number = 0;
}
```

Kapag gumawa ka ng maraming users mula sa class na ito:
- same structure sila (`name`, `age`)
- pero pwedeng iba-iba ang values per user

## Bakit useful?

- reusable structure
- predictable object shape
- mas madaling i-maintain sa malaking codebase

## Para sa non-developer 👇

Parang cookie cutter ang class:
- iisang hulmahan
- maraming cookies ang puwedeng gawin
- same shape, iba-ibang flavor

Ganun din sa objects from a class. 😄

## Interactive warm-up 🎯

1. Class ba ay object na agad?  
2. Puwede bang maraming instances mula sa isang class?  
3. Pareho ba lagi ang values ng lahat ng instances?

Tamang sagot:
- hindi, blueprint pa lang
- oo
- hindi, pwedeng iba-iba ang data

## Recap ✅

- Classes define object blueprints
- One class can create many instances
- Same structure, different data values
