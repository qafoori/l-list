import { CircularSinglyNode } from '../../types';
export declare class Node<T> implements CircularSinglyNode<T> {
    value: T;
    next: Node<T> | null;
    constructor(value: T);
}
