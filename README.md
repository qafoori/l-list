# Linked lists

Lightweight zero-dependency implementation if various linked lists in TypeScript.

You can use it to improve the performance of your node or browser applications built with JavaScript/TypeScript

This package contains four different implementations of linked lists:

1. Singly linked list (`new SinglyLinkedList<T>()`)
2. Doubly linked list (`new DoublyLinkedList<T>()`)
3. Circular singly linked list (`new CircularSinglyLinkedList<T>()`)
4. Circular doubly linked list (`new CircularDoublyLinkedList<T>()`)

All linked lists contains similar properties and methods.

Here is what each class contains:

> In all examples below, we used `SinglyLinkedList` implementation. But the usages are just the same for all implementations.

## `.toArray<T>(): T[]`

> Converts the linked list to a native array

```ts
const lList = new SinglyLinkedList<number>()
const array = lList.appendTail(1).appendTail(2).appendTail(3).toArray()
// [1, 2, 3]
```

## `.appendHead<T>(value: T): this`

> Appends a new node to the head

```ts
const lList = new SinglyLinkedList<number>()
const array = lList.appendHead(1).appendHead(2).appendHead(3).toArray()
// [3, 2, 1]
```

## `.appendTail<T>(value: T): this`

> Appends a new node to the tail

```ts
const lList = new SinglyLinkedList<number>()
const array = lList.appendTail(1).appendTail(2).appendTail(3).toArray()
// [1, 2, 3]
```

## `.appendAt<T>(index: number, value: T): this`

> Appends a new node to the given index

```ts
const lList = new SinglyLinkedList<number>()
const array = lList
  .appendTail(1)
  .appendTail(2)
  .appendTail(3)
  .appendAt(2, 10)
  .toArray()
// [1, 2, 10, 3]
```

## `.clear<T>(): this`

> Removes all nodes

```ts
const lList = new SinglyLinkedList<number>()
const array = lList.appendTail(1).appendTail(2).appendTail(3).clear().toArray()
// []
```

## `.reverse<T>(): this`

> Reverses the node's positions

```ts
const lList = new SinglyLinkedList<number>()
const array = lList
  .appendTail(1)
  .appendTail(2)
  .appendTail(3)
  .reverse()
  .toArray()
// [3, 2, 1]
```

## `.indexOf<T>(value: T): number`

> Finds first node with the given value and returns the index of that

```ts
const lList = new SinglyLinkedList<number>()
const index = lList.appendTail(1).appendTail(2).appendTail(3).indexOf(2)
// 1
```

## `.indexOfAll<T>(value: T): number[]`

> Finds all nodes with the given value and returns the indexes of them

```ts
const lList = new SinglyLinkedList<number>()
const indexes = lList.appendTail(1).appendTail(2).appendTail(2).indexOfAll(2)
// [1, 2]
```

## `.isEmpty<T>(): boolean`

> Checks if the linked list is empty

```ts
const lList = new SinglyLinkedList<number>()
const isEmpty = lList.isEmpty()
// true
```

## `.removeHead<T>(): this`

> Removes the head node

```ts
const lList = new SinglyLinkedList<number>()
const array = lList.appendHead(1).appendHead(2).removeHead().toArray()
// [1]
```

## `.removeTail<T>(): this`

> Removes the tail node

```ts
const lList = new SinglyLinkedList<number>()
const array = lList.appendHead(1).appendHead(2).removeTail().toArray()
// [2]
```

## `.removeAt<T>(index: number): this`

> Removes node at the given index

```ts
const lList = new SinglyLinkedList<number>()
const array = lList.appendTail(1).appendTail(2).removeAt(0).toArray()
// [2]
```

## `.removeBy<T>(value: T): this`

> Finds fist node by the given value and removes that

```ts
const lList = new SinglyLinkedList<number>()
const array = lList
  .appendTail(1)
  .appendTail(2)
  .appendTail(2)
  .removeBy(2)
  .toArray()
// [1, 2]
```

## `.removeAllBy<T>(value: T): this`

> Removes all nodes by the given value

```ts
const lList = new SinglyLinkedList<number>()
const array = lList
  .appendTail(1)
  .appendTail(2)
  .appendTail(2)
  .removeAllBy(2)
  .toArray()
// [1]
```

## `.getHead<T>(): Node<T> | null`

> Returns the head node

```ts
const lList = new SinglyLinkedList<number>()
const headValue = lList
  .appendTail(1)
  .appendTail(2)
  .appendTail(3)
  .getHead().value
// 1
```

## `.getTail<T>(): Node<T> | null`

> Returns the tail node

```ts
const lList = new SinglyLinkedList<number>()
const tailValue = lList
  .appendTail(1)
  .appendTail(2)
  .appendTail(3)
  .getTail().value
// 3
```

## `.getAt<T>(index: number): Node<T>`

> Returns node at the given index

```ts
const lList = new SinglyLinkedList<number>()
const value = lList.appendTail(1).appendTail(2).appendTail(3).getAt(1).value
// 2
```

## `.getBy<T>(value: T): Node<T> | null`

> Finds and returns first node by the given value

```ts
const lList = new SinglyLinkedList<number>()
const value = lList.appendTail(1).appendTail(2).appendTail(3).getBy(1).value
// 1
```

## `.getAllBy<T>(value: T): Node<T>[]`

> Finds and returns all nodes by the given value

```ts
const lList = new SinglyLinkedList<number>()
const values = lList
  .appendTail(1)
  .appendTail(2)
  .appendTail(2)
  .getAllBy(2)
  .map(node => node.value)
// [2, 2]
```

## `.getNthFromEnd<T>(value: T): Node<T>[]`

> Finds and returns first node from the end (reversely)

```ts
const lList = new SinglyLinkedList<number>()
const value = lList
  .appendTail(1)
  .appendTail(2)
  .appendTail(3)
  .appendTail(4)
  .appendTail(5)
  .getNthFromEnd(1).value
// 4
```

## `.length`

> Returns the length of the linked list

```ts
const lList = new SinglyLinkedList<number>()
const list = lList
  .appendTail(1)
  .appendTail(2)
  .appendTail(3)
  .appendTail(4)
  .appendTail(5).length
// 5
```
