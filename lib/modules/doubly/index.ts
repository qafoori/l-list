import { DoublyNode, LinkedList } from '../../types'
import { Node } from './node'

export class DoublyLinkedList<T> implements LinkedList<T, Node<T>> {
  head: DoublyNode<T> | null
  tail: DoublyNode<T> | null
  length: number

  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  printAll(): this {
    let current = this.head
    while (current) {
      console.log(current.value)
      current = current.next
    }
    return this
  }

  toArray(): T[] {
    const arr: T[] = []
    let current = this.head
    while (current) {
      arr.push(current.value)
      current = current.next
    }
    return arr
  }

  appendHead(value: T): this {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
    }
    this.length++
    return this
  }

  appendTail(value: T): this {
    const newNode = new Node(value)
    if (!this.tail) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.prev = this.tail
      this.tail.next = newNode
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

    let current: DoublyNode<T> | null = this.head
    let prev: Node<T> | null = null
    let next: Node<T> | null = null

    while (current) {
      next = current.next
      current.next = prev
      current.prev = next
      prev = current
      current = next
    }

    this.tail = this.head
    this.head = prev

    return this
  }

  indexOf(value: T): number {
    let index = 0
    let current = this.head
    while (current) {
      if (current.value === value) {
        return index
      }
      current = current.next
      index++
    }
    return -1
  }

  indexOfAll(value: T): number[] {
    const indexes: number[] = []
    let index = 0
    let current = this.head
    while (current) {
      if (current.value === value) {
        indexes.push(index)
      }
      current = current.next
      index++
    }
    return indexes
  }

  isEmpty(): boolean {
    return this.length === 0
  }

  removeHead(): this {
    if (!this.head) {
      return this
    }
    this.head = this.head.next
    if (this.head) {
      this.head.prev = null
    } else {
      this.tail = null
    }
    this.length--
    return this
  }

  removeTail(): this {
    if (!this.tail) {
      return this
    }
    this.tail = this.tail.prev
    if (this.tail) {
      this.tail.next = null
    } else {
      this.head = null
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
    while (current) {
      if (current.value === value) {
        const temp = current
        current = current.next
        this.removeAt(this.indexOf(temp.value))
      } else {
        current = current.next
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
    let current = this.head
    while (current) {
      if (current.value === value) {
        return current
      }
      current = current.next
    }
    return null
  }

  getAllBy(value: T): Node<T>[] {
    const nodes: Node<T>[] = []
    let current = this.head
    while (current) {
      if (current.value === value) {
        nodes.push(current)
      }
      current = current.next
    }
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
    return 'DoublyLinkedList'
  }
}
