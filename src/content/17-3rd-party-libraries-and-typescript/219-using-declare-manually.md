# 219. Using `declare` Manually ✍️

Kapag may global variable mula sa ibang script at di alam ni TS, puwede kang mag-`declare`.

```ts
declare var MODE: string;

const selectedMode = MODE;
```

## Kailan useful?

- legacy scripts
- small gaps sa type info
- quick bridge habang walang full typings

## Important note

`declare` adds type knowledge lang, **hindi** ito gumagawa ng actual runtime variable.

## Para sa non-developer 👇

Parang sticky note sa team board:
“Meron tayong value na `MODE`, text type siya.”
