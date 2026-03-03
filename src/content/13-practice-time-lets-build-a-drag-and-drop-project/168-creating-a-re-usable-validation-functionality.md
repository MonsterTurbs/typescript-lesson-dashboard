# 168. Creating a Re-Usable Validation Functionality ✅

## Section 13: Practice Time! Let's build a Drag & Drop Project

Gawa tayo reusable `validate(...)` function with config object.

```ts
interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}
```

## Why better?

Imbes paulit-ulit na long `if` checks, may reusable rule-based validator ka.

## Para sa non-developer 👇

Parang standardized form checker na puwedeng gamitin sa iba’t ibang fields.

## Recap ✅

- Config-driven validation scales better than hardcoded checks
