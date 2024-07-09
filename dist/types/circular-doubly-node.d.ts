export interface CircularDoublyNode<T> {
    value: T;
    next: CircularDoublyNode<T> | null;
    prev: CircularDoublyNode<T> | null;
}
