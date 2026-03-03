# 112. Creating List & Node Classes 🧱

## Section 9: Classes & Generics - Demo Project

Start tayo sa basic structure: `LinkedList` + `ListNode`.

## Core setup

```ts
class ListNode {}

class LinkedList {
  private root?: ListNode;
  private length = 0;
}

const list = new LinkedList();
```

## Why `private`?

Gusto natin controlled ang internal state:
- hindi basta mababago from outside
- methods ng class ang bahala sa safe updates

## Why optional `root`?

Initially empty ang list, so puwedeng `undefined` muna si root.

## Para sa non-developer 👇

Parang warehouse system:
- may central manager (`LinkedList`)
- may item containers (`ListNode`)
- internal records (`root`, `length`) hindi dapat direct pakialaman ng outsiders

## Interactive warm-up 🎯

1. Bakit optional ang `root` sa simula?  
2. Ano benefit ng `private` sa internals?  
3. Ano role ni `length` property?

Tamang sagot:
- dahil empty pa ang list
- controlled/safe state management
- mabilis malaman ilang items ang laman

## Recap ✅

- You established the class skeleton
- Next step: add logic for inserting and linking nodes
