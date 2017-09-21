import { assert } from 'chai';

import { LinkedList } from './index'

describe('Testing Linked List', function () {
  it('Initialize empty Linked List', function () {
    const list = new LinkedList()
    const listString = list.toString()
    assert(listString === '', "List should be empty")
    assert(list.length === 0, "List length should be 0")
  })

  it('Add one node', function () {
    const list = new LinkedList()
    list.add(1)
    const listString = list.toString()
    assert(listString === '1', "List should contain one node")
    assert(list.length === 1, "List length should be 1")
  })

  it('Add several nodes', function () {
    const list = new LinkedList()
    list.add(1)
    list.add(3)
    list.add(7)
    list.add(2)
    list.add(2)
    const listString = list.toString()
    assert(listString === '1 3 7 2 2', "List should contain several nodes")
    assert(list.length === 5, "List length should be 5")
  })

  it('Testing insert after', function () {
    const list = new LinkedList()
    list.add(1)
    list.add(3)
    list.add(7)
    list.add(2)
    list.add(2)
    list.insertAfter(7, 99)
    list.insertAfter(17, 100)
    const listString = list.toString()
    assert(listString === '1 3 7 99 2 2', "List should contain several nodes")
    assert(list.length === 6, "List length should be 6")
  })

  it('Testing remove', function () {
    const list = new LinkedList()
    list.add(1)
    list.add(3)
    list.add(7)
    list.add(2)
    list.add(2)
    list.remove(7)
    const listString = list.toString()
    assert(listString === '1 3 2 2', "List should contain several nodes")
    assert(list.length === 4, "List length should be 4")
  })

  it('Testing getByIndex', function () {
    const list = new LinkedList()
    list.add(1)
    list.add(3)
    list.add(7)
    assert(list.getByIndex(0) === 1, "Should get value by index 0")
    assert(list.getByIndex(1) === 3, "Should get value by index 0")
    assert(list.getByIndex(2) === 7, "Should get value by index 0")
    assert(list.length === 3, "List length should be 3")
  })
})
