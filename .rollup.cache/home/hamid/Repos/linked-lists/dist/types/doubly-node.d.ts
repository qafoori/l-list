export interface DoublyNode<T> {
    value: T;
    next: DoublyNode<T> | null;
    prev: DoublyNode<T> | null;
}
