import { LinkedList, SinglyNode } from '../../types'
import { Node } from './node'

export class SinglyLinkedList<T> implements LinkedList<T, Node<T>> {
  private head: SinglyNode<T> | null
  private tail: SinglyNode<T> | null
  public length: number

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
    const array: T[] = []
    let current = this.head
    while (current) {
      array.push(current.value)
      current = current.next
    }
    return array
  }

  appendHead(value: T): this {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }

  appendTail(value: T): this {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail!.next = newNode
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
    let current: SinglyNode<T> | null = this.head
    let next = null

    while (current) {
      next = current.next
      current.next = prev
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
    this.length--
    if (this.length === 0) {
      this.tail = null
    }
    return this
  }

  removeTail(): this {
    if (!this.head) {
      return this
    }
    if (this.head === this.tail) {
      this.head = null
      this.tail = null
      this.length = 0
      return this
    }
    let current: SinglyNode<T> | null = this.head
    while (current!.next !== this.tail) {
      current = current!.next
    }
    current!.next = null
    this.tail = current
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
    while (current) {
      if (current.value === value) {
        this.removeBy(value)
      }
      current = current.next
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
    const targetIndex = this.length - 1 - index
    let current = this.head
    for (let i = 0; i < targetIndex; i++) {
      current = current!.next
    }
    return current as Node<T>
  }

  toString(): string {
    return 'SinglyLinkedList'
  }
}
