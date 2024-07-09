import { SinglyNode } from '../../types';
export declare class Node<T> implements SinglyNode<T> {
    value: T;
    next: Node<T> | null;
    constructor(value: T);
}
