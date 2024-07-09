export interface LinkedList<T, Node> {
  length: number

  printAll(): this

  toArray(): T[]

  appendHead(value: T): this

  appendTail(value: T): this

  appendAt(index: number, value: T): this

  clear(): this

  reverse(): this

  indexOf(value: T): number

  indexOfAll(value: T): number[]

  isEmpty(): boolean

  removeHead(): this

  removeTail(): this

  removeAt(index: number): this

  removeBy(value: T): this

  removeAllBy(value: T): this

  getHead(): Node | null

  getTail(): Node | null

  getAt(index: number): Node

  getBy(value: T): Node | null

  getAllBy(value: T): Node[]

  getNthFromEnd(index: number): Node

  toString(): string
}
