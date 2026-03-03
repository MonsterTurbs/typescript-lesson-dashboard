# 116. Accessing the Data & Compiling + Running the Code ▶️

## Section 9: Classes & Generics - Demo Project

Since private ang internals, gumawa tayo ng public helper methods.

## Example methods

```ts
class LinkedList<T> {
  private root?: ListNode<T>;
  private tail?: ListNode<T>;
  private length = 0;

  getNumberOfElements() {
    return this.length;
  }

  print() {
    let current = this.root;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}
```

Usage demo:

```ts
const numberList = new LinkedList<number>();
numberList.add(10);
numberList.add(5);
numberList.add(-3);

console.log(numberList.getNumberOfElements());
numberList.print();
```

## Compile and run

```bash
tsc
node linked-list.js
```

Expected order:
- length output first (`3`)
- then values: `10`, `5`, `-3`

## Para sa non-developer 👇

Parang inventory report:
- may total item count method
- may list-all-items method

Kahit private ang storage internals, may safe way pa rin para makita results.

## Interactive warm-up 🎯

1. Bakit hindi direct ma-access ang `root` at `length` from outside?  
2. Ano role ng `print()` method?  
3. Anong commands para i-compile at i-run ang code?

Tamang sagot:
- private sila
- i-traverse at i-output lahat ng node values
- `tsc` then `node linked-list.js`

## Recap ✅

- Public methods expose useful info safely
- Project now behaves like a usable linked-list utility
