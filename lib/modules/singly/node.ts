import { SinglyNode } from '../../types'

export class Node<T> implements SinglyNode<T> {
  value: T
  next: Node<T> | null

  constructor(value: T) {
    this.value = value
    this.next = null
  }
}
