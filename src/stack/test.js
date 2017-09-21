import { assert } from 'chai';

import { Stack } from './index'

describe('Testing Stack', function () {
  it('Initialize empty Stack and check for empty', function () {
    const stack = new Stack()
    assert(stack.empty(), "Stack should be empty")
  })

  it('Testing push and peek', function () {
    const stack = new Stack()
    stack.push(1)
    stack.push(2)
    stack.push(3)
    assert(stack.peek() === 3, "Peek should be 3")
    assert(stack.peek() === 3, "Peek should be 3")
    assert(stack.peek() === 3, "Peek should be 3")
  })

  it('Testing push and pop', function () {
    const stack = new Stack()
    stack.push(1)
    stack.push(2)
    stack.push(3)
    assert(!stack.empty(), "Stack shouldn't be empty")
    assert(stack.pop() === 3, "Pop should be 3")
    assert(stack.pop() === 2, "Pop should be 2")
    assert(stack.pop() === 1, "Pop should be 1")
    assert(stack.pop() === null, "Pop should be null")
    assert(stack.empty(), "Stack should be empty")
  })

})
