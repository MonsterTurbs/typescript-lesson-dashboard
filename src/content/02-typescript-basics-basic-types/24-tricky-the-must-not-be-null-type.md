# 24. Tricky: The "Must Not Be Null" Type 🧩

## Section 2: TypeScript Basics & Basic Types

May isang TypeScript behavior na medyo nakakalito sa umpisa: ang `{}` type.  
Mukha siyang “empty object type”, pero hindi iyon ang tunay na meaning niya. 👀

## Ang surprising part 🤯

Kapag ginawa mo ito:

```ts
let val: {};

val = 'some text'; // allowed
val = 0; // allowed
val = false; // allowed
val = {}; // allowed
```

Puwede pa rin ang string/number/boolean.  
So clearly, hindi ito “object only”.

## Ano talaga ang meaning ng `{}` type? ✅

Sa TypeScript, ang `{}` type ay:
- anumang value na **hindi** `null`
- at **hindi** `undefined`

Kaya ito ay rejected:

```ts
let val: {};

// val = null; // Error
// val = undefined; // Error
```

## Interactive warm-up 🔥

Quick check:

1. Ang `{}` ba sa type annotation ay “empty object lang”?  
2. Allowed ba ang `''` sa `{}` type?  
3. Allowed ba ang `null` sa `{}` type?

Tamang sagot:
- hindi
- yes
- no

## Bakit mahalagang malaman ito? 💡

Dahil madaling ma-misinterpret ang syntax na `{}`.
Kapag iniisip mong object-only ito, puwede kang magkamali sa type design.

So tandaan:
- bilang **value** sa JavaScript, `{}` = empty object
- bilang **type** sa TypeScript, `{}` = any non-null/undefined value

## Paliwanag para sa non-developer 👇

Isipin mo may gate rule:

- “Bawal lang ang dalawang tao: `null` at `undefined`”
- lahat ng iba, puwedeng pumasok

Ganun ang `{}` type: broad siya, basta hindi nullish value.

## Mini mission 💬

1. Gumawa ng `let sample: {};`  
2. Try assigning string, number, object, array  
3. Try assigning `null` at `undefined`  
4. Observe kung alin ang allowed/rejected

Kapag gets mo ito, mas maiiwasan mo ang confusing type bugs sa object-related code. 🚀
