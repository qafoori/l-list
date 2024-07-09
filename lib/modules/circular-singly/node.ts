import { CircularSinglyNode } from '../../types'

export class Node<T> implements CircularSinglyNode<T> {
  value: T
  next: Node<T> | null

  constructor(value: T) {
    this.value = value
    this.next = null
  }
}
