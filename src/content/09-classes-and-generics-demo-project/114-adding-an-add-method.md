# 114. Adding an "add" Method ➕

## Section 9: Classes & Generics - Demo Project

Now implement na natin ang insertion logic.

## Node + add logic (core idea)

```ts
class ListNode<T> {
  next?: ListNode<T>;
  constructor(public value: T) {}
}

class LinkedList<T> {
  private root?: ListNode<T>;
  private length = 0;

  add(value: T) {
    const node = new ListNode(value);

    if (!this.root) {
      this.root = node;
    } else {
      let current = this.root;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.length++;
  }
}
```

## What happens here?

- create new node from incoming value
- if empty list: root becomes new node
- if may laman na: hanapin last node, then link its `next` to new node
- increment list length

## Para sa non-developer 👇

Parang queue ng connected boxes:
- kung walang box pa, new box ang una
- kung meron na, ikakabit ang bagong box sa dulo

## Interactive warm-up 🎯

1. Ano ginagawa ng `while (current.next)` loop?  
2. Kailan directly sa `root` nilalagay ang bagong node?  
3. Bakit importante i-increment ang `length`?

Tamang sagot:
- hinahanap ang last node
- kapag empty list
- para mabilis makuha item count

## Recap ✅

- You now have a functional append flow
- Node linking is the core mechanism of linked lists
