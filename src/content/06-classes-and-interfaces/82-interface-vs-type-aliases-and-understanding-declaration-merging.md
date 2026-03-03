# 82. Interface vs Type Aliases & Declaration Merging ⚖️

## Section 6: Classes & Interfaces

Madaling tanong: kung puwede ang `type`, bakit `interface` pa?

## Similar use

```ts
interface Authenticatable {
  email: string;
}

type AuthenticatableType = {
  email: string;
};
```

Pareho silang puwedeng mag-define ng object shape sa maraming cases.

## Key difference: declaration merging (interface only)

```ts
interface Authenticatable {
  email: string;
}

interface Authenticatable {
  role: "user" | "admin";
}
```

Ima-merge ni TypeScript ang dalawang interface definitions.

Sa `type`, hindi puwedeng ulitin ang same name nang ganito.

## Kailan ito useful?

Kapag may external library interface ka na gusto mong i-extend without editing original source.

## Para sa non-developer 👇

Parang contract addendum:
- original contract exists
- may bagong annex/add-on clause
- automatic merged contract ang final rule

## Interactive warm-up 🎯

1. Alin may declaration merging: `type` o `interface`?  
2. Pareho ba silang useful for object shape definition?  
3. Kailan practical ang interface merging?

Tamang sagot:
- `interface`
- oo
- kapag nag-a-augment ng existing external definitions

## Recap ✅

- `type` and `interface` often overlap
- Declaration merging is a notable interface advantage
- Choice is often style/preference unless specific feature needed
