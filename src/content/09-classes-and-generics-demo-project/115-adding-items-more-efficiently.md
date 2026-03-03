# 115. Adding Items More Efficiently ⚡

## Section 9: Classes & Generics - Demo Project

May optimization tayo: iwasan ang pag-loop from root every add.

## Add a `tail` pointer

```ts
class LinkedList<T> {
  private root?: ListNode<T>;
  private tail?: ListNode<T>;
  private length = 0;

  add(value: T) {
    const node = new ListNode(value);

    if (!this.root || !this.tail) {
      this.root = node;
      this.tail = node;
      this.length++;
      return;
    }

    this.tail.next = node;
    this.tail = node;
    this.length++;
  }
}
```

## Why faster?

Dati: hinahanap pa ang last node via loop.  
Ngayon: direct update na agad sa `tail`.

## Para sa non-developer 👇

Parang may last-seat marker sa train:
- dati iniikot mo pa lahat para hanapin dulo
- ngayon alam mo agad saan ikakabit ang bagong car

Less work bawat add operation.

## Interactive warm-up 🎯

1. Ano purpose ni `tail`?  
2. Bakit kailangan i-update si `tail` after insert?  
3. Ano na-avoid natin compared sa previous approach?

Tamang sagot:
- direct reference sa last node
- para always tama ang end pointer
- full traversal loop bawat add

## Recap 🚀

- `tail` makes append operations more efficient
- Better runtime behavior for growing lists
