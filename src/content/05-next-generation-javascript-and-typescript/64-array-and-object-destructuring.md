# 64. Array & Object Destructuring 🧩

## Section 5: Next-generation JavaScript & TypeScript

Destructuring = mabilis na paraan para kumuha ng values mula sa array/object  
at i-store sa variables/constants.

## Array destructuring

```ts
const hobbies = ["Sports", "Cooking", "Reading"];

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobby1); // "Sports"
console.log(hobby2); // "Cooking"
console.log(remainingHobbies); // ["Reading"]
```

## Object destructuring

```ts
const person = { firstName: "Max", age: 30 };

const { firstName: userName, age } = person;

console.log(userName); // "Max"
console.log(age);      // 30
```

`firstName: userName` = rename habang kinukuha ang value.

## Important notes

- Array destructuring follows order
- Object destructuring uses key names
- Hindi nababago ang original array/object; values are copied out

## Para sa non-developer 👇

Parang mabilisang unpacking:
- Array: una, pangalawa, natira
- Object: kunin mo yung value ng specific label (key)

Hindi mo binubura ang original source; kumukuha ka lang ng kopya ng needed values. 😄

## Interactive warm-up 🎯

1. Sa array destructuring, by order ba o by name ang pagkuha?  
2. Sa object destructuring, puwede bang i-rename ang variable name?  
3. Nabubura ba ang original `person` object after destructuring?

Tamang sagot:
- by order
- oo (`firstName: userName`)
- hindi

## Recap 🚀

- Destructuring makes extraction concise and readable
- Arrays use positions; objects use property names
- Alias renaming is possible for object properties
