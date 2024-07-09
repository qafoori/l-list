export interface CircularSinglyNode<T> {
  value: T
  next: CircularSinglyNode<T> | null
}
