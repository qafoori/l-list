import { CircularDoublyNode } from '../../types';
export declare class Node<T> implements CircularDoublyNode<T> {
    value: T;
    next: Node<T> | null;
    prev: Node<T> | null;
    constructor(value: T);
}
