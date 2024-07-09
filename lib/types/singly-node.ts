export interface SinglyNode<T> {
  value: T
  next: SinglyNode<T> | null
}
