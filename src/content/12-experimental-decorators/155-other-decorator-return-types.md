# 155. Other Decorator Return Types 📦

## Section 12: Experimental Decorators

Not all decorators use return values the same way.

## Quick map

- class decorators: can return new constructor/class
- method/accessor decorators: can return new `PropertyDescriptor`
- property/parameter decorators: return values are ignored

## Method/accessor example idea

```ts
function Log3(_: any, __: string, descriptor: PropertyDescriptor) {
  return descriptor;
}
```

## Para sa non-developer 👇

Parang iba-iba ang allowed output format depende sa hook type.

## Recap 🎯

- Know which decorator kinds can actually replace behavior via return value
