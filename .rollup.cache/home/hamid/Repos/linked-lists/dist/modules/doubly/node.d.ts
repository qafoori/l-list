import { DoublyNode } from '../../types';
export declare class Node<T> implements DoublyNode<T> {
    value: T;
    next: Node<T> | null;
    prev: Node<T> | null;
    constructor(value: T);
}
