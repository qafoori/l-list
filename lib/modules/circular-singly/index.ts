import { CircularSinglyNode, LinkedList } from '../../types'
import { Node } from './node'

export class CircularSinglyLinkedList<T> implements LinkedList<T, Node<T>> {
  head: CircularSinglyNode<T> | null
  tail: CircularSinglyNode<T> | null
  length: number

  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  printAll(): this {
    if (!this.head) {
      return this
    }
    let current = this.head
    do {
      console.log(current.value)
      current = current.next!
    } while (current !== this.head)
    return this
  }

  toArray(): T[] {
    const arr: T[] = []
    if (!this.head) {
      return arr
    }
    let current = this.head
    do {
      arr.push(current.value)
      current = current.next!
    } while (current !== this.head)
    return arr
  }

  appendHead(value: T): this {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      newNode.next = newNode // Point to itself to make it circular
    } else {
      newNode.next = this.head
      this.head = newNode
      this.tail!.next = this.head // Update the tail to point to the new head
    }
    this.length++
    return this
  }

  appendTail(value: T): this {
    const newNode = new Node(value)
    if (!this.tail) {
      this.head = newNode
      this.tail = newNode
      newNode.next = newNode // Point to itself to make it circular
    } else {
      this.tail.next = newNode
      this.tail = newNode
      this.tail.next = this.head // Update the tail to point to the head
    }
    this.length++
    return this
  }

  appendAt(index: number, value: T): this {
    if (index < 0 || index > this.length) {
      throw new Error('Index out of bounds')
    }
    if (index === 0) {
      return this.appendHead(value)
    }
    if (index === this.length) {
      return this.appendTail(value)
    }
    const newNode = new Node(value)
    let current = this.head
    for (let i = 0; i < index - 1; i++) {
      current = current!.next
    }
    newNode.next = current!.next
    current!.next = newNode
    this.length++
    return this
  }

  clear(): this {
    this.head = null
    this.tail = null
    this.length = 0
    return this
  }

  reverse(): this {
    if (!this.head || !this.head.next) {
      return this
    }

    let prev = null
    let current = this.head
    let next = null
    let first = this.head

    do {
      next = current.next
      current.next = prev
      prev = current
      current = next
    } while (current !== this.head)

    this.head.next = prev
    this.tail = this.head
    this.head = prev

    return this
  }

  indexOf(value: T): number {
    if (!this.head) {
      return -1
    }
    let index = 0
    let current = this.head
    do {
      if (current.value === value) {
        return index
      }
      current = current.next!
      index++
    } while (current !== this.head)
    return -1
  }

  indexOfAll(value: T): number[] {
    const indexes: number[] = []
    if (!this.head) {
      return indexes
    }
    let index = 0
    let current = this.head
    do {
      if (current.value === value) {
        indexes.push(index)
      }
      current = current.next!
      index++
    } while (current !== this.head)
    return indexes
  }

  isEmpty(): boolean {
    return this.length === 0
  }

  removeHead(): this {
    if (!this.head) {
      return this
    }
    if (this.head === this.tail) {
      this.head = null
      this.tail = null
    } else {
      this.head = this.head.next!
      this.tail!.next = this.head
    }
    this.length--
    return this
  }

  removeTail(): this {
    if (!this.head) {
      return this
    }
    if (this.head === this.tail) {
      this.head = null
      this.tail = null
    } else {
      let current = this.head
      while (current!.next !== this.tail) {
        current = current!.next
      }
      current!.next = this.head
      this.tail = current
    }
    this.length--
    return this
  }

  removeAt(index: number): this {
    if (index < 0 || index >= this.length) {
      throw new Error('Index out of bounds')
    }
    if (index === 0) {
      return this.removeHead()
    }
    if (index === this.length - 1) {
      return this.removeTail()
    }
    let current = this.head
    for (let i = 0; i < index - 1; i++) {
      current = current!.next
    }
    current!.next = current!.next!.next
    this.length--
    return this
  }

  removeBy(value: T): this {
    const index = this.indexOf(value)
    if (index !== -1) {
      return this.removeAt(index)
    }
    return this
  }

  removeAllBy(value: T): this {
    let current = this.head
    let index = 0
    while (current && index < this.length) {
      if (current.value === value) {
        current = current.next
        this.removeAt(index)
      } else {
        current = current.next!
        index++
      }
    }
    return this
  }

  getHead(): Node<T> | null {
    return this.head
  }

  getTail(): Node<T> | null {
    return this.tail
  }

  getAt(index: number): Node<T> {
    if (index < 0 || index >= this.length) {
      throw new Error('Index out of bounds')
    }
    let current = this.head
    for (let i = 0; i < index; i++) {
      current = current!.next
    }
    return current!
  }

  getBy(value: T): Node<T> | null {
    if (!this.head) {
      return null
    }
    let current = this.head
    do {
      if (current.value === value) {
        return current
      }
      current = current.next!
    } while (current !== this.head)
    return null
  }

  getAllBy(value: T): Node<T>[] {
    const nodes: Node<T>[] = []
    if (!this.head) {
      return nodes
    }
    let current = this.head
    do {
      if (current.value === value) {
        nodes.push(current)
      }
      current = current.next!
    } while (current !== this.head)
    return nodes
  }

  getNthFromEnd(index: number): Node<T> {
    if (index < 0 || index >= this.length) {
      throw new Error('Index out of bounds')
    }
    let fast = this.head
    let slow = this.head
    for (let i = 0; i <= index; i++) {
      fast = fast!.next
    }
    while (fast !== this.head) {
      fast = fast!.next
      slow = slow!.next
    }
    return slow as Node<T>
  }

  toString(): string {
    return 'CircularSinglyLinkedList'
  }
}
