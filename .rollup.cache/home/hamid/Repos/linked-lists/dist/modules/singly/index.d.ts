import { LinkedList } from '../../types';
import { Node } from './node';
export declare class SinglyLinkedList<T> implements LinkedList<T, Node<T>> {
    private head;
    private tail;
    length: number;
    constructor();
    printAll(): this;
    toArray(): T[];
    appendHead(value: T): this;
    appendTail(value: T): this;
    appendAt(index: number, value: T): this;
    clear(): this;
    reverse(): this;
    indexOf(value: T): number;
    indexOfAll(value: T): number[];
    isEmpty(): boolean;
    removeHead(): this;
    removeTail(): this;
    removeAt(index: number): this;
    removeBy(value: T): this;
    removeAllBy(value: T): this;
    getHead(): Node<T> | null;
    getTail(): Node<T> | null;
    getAt(index: number): Node<T>;
    getBy(value: T): Node<T> | null;
    getAllBy(value: T): Node<T>[];
    getNthFromEnd(index: number): Node<T>;
}
