# 37. The "unknown" Type 🧩

## Section 2: TypeScript Basics & Basic Types

May isa pang special type na sobrang useful kapag hindi mo alam ang exact shape ng incoming data: `unknown`. 🚀

Madaling isipin na kapareho siya ng `any`, pero may important difference:
- `any` = bahala ka na, walang guard rails
- `unknown` = kailangan mo munang mag-check bago gamitin

## Bakit kailangan ang `unknown`? 🤔

Sa real apps, puwede kang makatanggap ng values galing sa:
- API
- database
- external file
- ibang system na hindi fully predictable

Kapag hindi mo sure ang data type, `unknown` ang safer default.

## `any` vs `unknown`

```ts
function processAny(val: any) {
  val.log(); // no TypeScript error, pero risky
}
```

```ts
function processUnknown(val: unknown) {
  // val.log(); // TypeScript error: unknown pa si val
}
```

Sa `unknown`, pinipilit ka ni TypeScript na mag-type checks muna.

## Type narrowing with runtime checks 🛡️

```ts
function processUnknown(val: unknown) {
  if (
    typeof val === 'object' &&
    !!val &&
    'log' in val &&
    typeof (val as { log: unknown }).log === 'function'
  ) {
    (val as { log: () => void }).log();
  }
}
```

Dito, step-by-step nating pinapatunayan na safe tawagin ang `log()`.

## Paliwanag para sa non-developer 👇

Parang may random parcel ka:
- `any` = buksan at gamitin agad kahit hindi mo alam laman
- `unknown` = check muna label, laman, at instructions bago gamitin

Mas safe si `unknown` dahil hindi ka basta pinapagamit ng uncertain value.

## Interactive warm-up 🔥

1. Alin ang mas safe kapag hindi mo alam ang input type: `any` o `unknown`?  
2. Bakit kailangan ng checks bago gamitin ang `unknown` value?  
3. Ano ang tawag sa process na nagpapaliit ng broad type papuntang specific type?

Tamang sagot:
- `unknown`
- para maiwasan runtime errors
- type narrowing

## Recap 💡

- `unknown` is safer than `any`
- kailangan ng checks bago gamitin ang value
- common ito sa generic/library-style code
- malaking tulong sa mas robust at less error-prone apps
