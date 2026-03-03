# 105. Working with Multiple Generic Parameters 🔀

## Section 8: Generic Types

Kapag magkaibang input types ang kailangan, use multiple generic placeholders.

## Example

```ts
function merge<T, U>(a: T, b: U) {
  return [a, b];
}

const result = merge(1, "Admin"); // (number | string)[]
```

Kung iisa lang placeholder (`T`) sa parehong params,  
TypeScript expects parehong type sila.

## Explicit call (optional)

```ts
const explicit = merge<number, string>(1, "Admin");
```

Usually unnecessary ito dahil magaling mag-infer si TypeScript.

## Para sa non-developer 👇

Parang two-slot form:
- slot A at slot B puwedeng magkaibang category
- basta clear ang rule ng bawat slot

## Interactive warm-up 🎯

1. Kailan kailangan ng multiple generic params?  
2. Ano difference ng `T` at `U` sa sample?  
3. Required ba laging explicit `<number, string>`?

Tamang sagot:
- kapag iba-ibang type ang inputs
- magkaibang placeholders for independent types
- hindi

## Recap 🚀

- Multiple generic params increase flexibility
- Type inference often handles them automatically
