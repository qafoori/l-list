import { CircularDoublyNode, LinkedList } from '../../types'
import { Node } from './node'

export class CircularDoublyLinkedList<T> implements LinkedList<T, Node<T>> {
  head: CircularDoublyNode<T> | null
  tail: CircularDoublyNode<T> | null
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
      newNode.prev = newNode // Point to itself to make it circular
    } else {
      newNode.next = this.head
      newNode.prev = this.tail
      this.head.prev = newNode
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
      newNode.prev = newNode // Point to itself to make it circular
    } else {
      newNode.prev = this.tail
      newNode.next = this.head
      this.tail.next = newNode
      this.head!.prev = newNode
      this.tail = newNode
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
    newNode.prev = current
    current!.next!.prev = newNode
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

    let current = this.head
    let prev: Node<T> | null = null
    let next: Node<T> | null = null

    do {
      next = current.next
      current.next = current.prev
      current.prev = next
      prev = current
      current = next!
    } while (current !== this.head)

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
      this.head.prev = this.tail
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
      this.tail = this.tail!.prev
      this.tail!.next = this.head
      this.head!.prev = this.tail
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
    for (let i = 0; i < index; i++) {
      current = current!.next
    }
    current!.prev!.next = current!.next
    current!.next!.prev = current!.prev
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
        current = current.next!
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
    let current: Node<T>
    if (index < this.length / 2) {
      current = this.tail!
      for (let i = 0; i < index; i++) {
        current = current.prev!
      }
    } else {
      current = this.head!
      for (let i = 0; i < this.length - 1 - index; i++) {
        current = current.next!
      }
    }
    return current
  }

  toString(): string {
    return 'CircularDoublyLinkedList'
  }
}
