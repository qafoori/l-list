import { Node } from './node';
export class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    printAll() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
        return this;
    }
    toArray() {
        const array = [];
        let current = this.head;
        while (current) {
            array.push(current.value);
            current = current.next;
        }
        return array;
    }
    appendHead(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    appendTail(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    appendAt(index, value) {
        if (index < 0 || index > this.length) {
            throw new Error('Index out of bounds');
        }
        if (index === 0) {
            return this.appendHead(value);
        }
        if (index === this.length) {
            return this.appendTail(value);
        }
        const newNode = new Node(value);
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
        this.length++;
        return this;
    }
    clear() {
        this.head = null;
        this.tail = null;
        this.length = 0;
        return this;
    }
    reverse() {
        if (!this.head || !this.head.next) {
            return this;
        }
        let prev = null;
        let current = this.head;
        let next = null;
        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.tail = this.head;
        this.head = prev;
        return this;
    }
    indexOf(value) {
        let index = 0;
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }
    indexOfAll(value) {
        const indexes = [];
        let index = 0;
        let current = this.head;
        while (current) {
            if (current.value === value) {
                indexes.push(index);
            }
            current = current.next;
            index++;
        }
        return indexes;
    }
    isEmpty() {
        return this.length === 0;
    }
    removeHead() {
        if (!this.head) {
            return this;
        }
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return this;
    }
    removeTail() {
        if (!this.head) {
            return this;
        }
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return this;
        }
        let current = this.head;
        while (current.next !== this.tail) {
            current = current.next;
        }
        current.next = null;
        this.tail = current;
        this.length--;
        return this;
    }
    removeAt(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index out of bounds');
        }
        if (index === 0) {
            return this.removeHead();
        }
        if (index === this.length - 1) {
            return this.removeTail();
        }
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        current.next = current.next.next;
        this.length--;
        return this;
    }
    removeBy(value) {
        const index = this.indexOf(value);
        if (index !== -1) {
            return this.removeAt(index);
        }
        return this;
    }
    removeAllBy(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                this.removeBy(value);
            }
            current = current.next;
        }
        return this;
    }
    getHead() {
        return this.head;
    }
    getTail() {
        return this.tail;
    }
    getAt(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index out of bounds');
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }
    getBy(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    }
    getAllBy(value) {
        const nodes = [];
        let current = this.head;
        while (current) {
            if (current.value === value) {
                nodes.push(current);
            }
            current = current.next;
        }
        return nodes;
    }
    getNthFromEnd(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index out of bounds');
        }
        const targetIndex = this.length - 1 - index;
        let current = this.head;
        for (let i = 0; i < targetIndex; i++) {
            current = current.next;
        }
        return current;
    }
}
//# sourceMappingURL=index.js.map