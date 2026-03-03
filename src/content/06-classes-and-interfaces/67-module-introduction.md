# 67. Module Introduction 🧭

## Section 6: Classes & Interfaces

Welcome sa bagong section! 🎉  
Dito tayo papasok sa dalawang super important topics sa TypeScript world:
- **Classes** (existing na sa JavaScript, pero mas pinapaganda ni TypeScript)
- **Interfaces** (TypeScript-only feature)

## Big picture ng section na ito

- Classes = blueprint para gumawa ng objects
- TypeScript classes = may extra tools (access modifiers, readonly, abstract, etc.)
- Interfaces = contract na nagsasabi kung anong shape dapat ng object/class

## Bakit mahalaga ito? 🤔

Kapag lumalaki ang project:
- kailangan mas organized ang code
- kailangan clear ang responsibilities ng bawat object/class
- kailangan consistent ang structure para less bugs

## Quick sample

```ts
class User {
  constructor(public name: string) {}
}

interface Authenticatable {
  login(): void;
}
```

## Para sa non-developer 👇

Isipin mo:
- **Class** = template ng ID form
- **Interface** = checklist ng required fields/actions

Kapag malinaw ang template at checklist, mas madali gumawa ng maraming consistent records. ✅

## Interactive warm-up 🎯

1. Alin ang TypeScript-only: class o interface?  
2. Ang classes ba ay JavaScript feature din?  
3. Bakit useful ang interfaces sa team projects?

Tamang sagot:
- interface
- oo
- dahil nagsisilbi silang contract para consistent ang implementation

## Recap 🚀

- Classes: JavaScript feature, enhanced by TypeScript
- Interfaces: TypeScript-exclusive contract/type tool
- Goal ng module: mas structured at scalable na code design
