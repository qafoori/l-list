import { CircularSinglyLinkedList } from '../modules'

describe('TEST CIRCULAR-SINGLY-LINKED-LIST', () => {
  it('should convert linked list to array', () => {
    const lList = new CircularSinglyLinkedList()
    lList.appendTail(1).appendTail(2).appendTail(3)
    expect(lList.toArray()).toEqual([1, 2, 3])
  })

  it('should append a new node to the head', () => {
    const lList = new CircularSinglyLinkedList()
    lList.appendHead(1).appendHead(2)
    expect(lList.toArray()).toEqual([2, 1])
  })

  it('should append a new node to the tail', () => {
    const lList = new CircularSinglyLinkedList()
    lList.appendTail(1).appendTail(2)
    expect(lList.toArray()).toEqual([1, 2])
  })

  it('should append a new node to the 2nd index', () => {
    const lList = new CircularSinglyLinkedList()
    lList.appendTail(1).appendTail(2).appendTail(3).appendAt(2, 10)
    expect(lList.toArray()).toEqual([1, 2, 10, 3])
  })

  it('should empty the linked list', () => {
    const lList = new CircularSinglyLinkedList()
    lList.appendTail(1).appendTail(2).appendTail(3).clear()
    expect(lList.toArray()).toEqual([])
  })

  it('should reverse the linked list', () => {
    const lList = new CircularSinglyLinkedList()
    lList.appendTail(1).appendTail(2).appendTail(3).reverse()
    expect(lList.toArray()).toEqual([3, 2, 1])
  })

  it('should find the index of given value', () => {
    const lList = new CircularSinglyLinkedList()
    lList.appendTail(1).appendTail(2).appendTail(3)
    expect(lList.indexOf(2)).toEqual(1)
  })

  it('should find the all index of given value', () => {
    const lList = new CircularSinglyLinkedList()
    lList.appendTail(1).appendTail(2).appendTail(2)
    expect(lList.indexOfAll(2)).toEqual([1, 2])
  })

  it('should check if linked list is empty', () => {
    const emptyList = new CircularSinglyLinkedList()
    const filledList = new CircularSinglyLinkedList()
    filledList.appendTail(1).appendTail(2).appendTail(2)
    expect([emptyList.isEmpty(), filledList.isEmpty()]).toEqual([true, false])
  })

  it('should remove the head node', () => {
    const lList = new CircularSinglyLinkedList()
    lList.appendHead(1).appendHead(2).removeHead()
    expect(lList.toArray()).toEqual([1])
  })

  it('should remove the tail node', () => {
    const lList = new CircularSinglyLinkedList()
    lList.appendHead(1).appendHead(2).removeTail()
    expect(lList.toArray()).toEqual([2])
  })

  it('should remove node at the given index', () => {
    const lList = new CircularSinglyLinkedList()
    lList.appendTail(1).appendTail(2).removeAt(0)
    expect(lList.toArray()).toEqual([2])
  })

  it('should remove first node by the given value', () => {
    const lList = new CircularSinglyLinkedList()
    lList.appendTail(1).appendTail(2).appendTail(2).removeBy(2)
    expect(lList.toArray()).toEqual([1, 2])
  })

  it('should remove all nodes by the given value', () => {
    const lList = new CircularSinglyLinkedList()
    lList.appendTail(1).appendTail(2).appendTail(2).removeAllBy(2)
    expect(lList.toArray()).toEqual([1])
  })

  it('should return the head node', () => {
    const lList = new CircularSinglyLinkedList()
    lList.appendTail(1).appendTail(2).appendTail(3)
    expect(lList.getHead().value).toEqual(1)
  })

  it('should return the tail node', () => {
    const lList = new CircularSinglyLinkedList()
    lList.appendTail(1).appendTail(2).appendTail(3)
    expect(lList.getTail().value).toEqual(3)
  })

  it('should return node at the given index', () => {
    const lList = new CircularSinglyLinkedList()
    lList.appendTail(1).appendTail(2).appendTail(3)
    expect(lList.getAt(1).value).toEqual(2)
  })

  it('should return node by the given value', () => {
    const lList = new CircularSinglyLinkedList()
    lList.appendTail(1).appendTail(2).appendTail(3)
    expect(lList.getBy(1).value).toEqual(1)
  })

  it('should return all nodes by the given value', () => {
    const lList = new CircularSinglyLinkedList()
    lList.appendTail(1).appendTail(2).appendTail(2)
    expect(lList.getAllBy(2).map(node => node.value)).toEqual([2, 2])
  })

  it('should reversely return the node at the given index', () => {
    const lList = new CircularSinglyLinkedList()
    lList.appendTail(1).appendTail(2).appendTail(3).appendTail(4).appendTail(5)
    expect(lList.getNthFromEnd(1).value).toEqual(4)
  })

  it('should return the size of the linked list', () => {
    const lList = new CircularSinglyLinkedList()
    lList.appendTail(1).appendTail(2).appendTail(3).appendTail(4).appendTail(5)
    expect(lList.length).toEqual(5)
  })
})
