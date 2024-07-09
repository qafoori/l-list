import { CircularDoublyNode } from '../../types'

export class Node<T> implements CircularDoublyNode<T> {
  value: T
  next: Node<T> | null
  prev: Node<T> | null

  constructor(value: T) {
    this.value = value
    this.next = null
    this.prev = null
  }
}
