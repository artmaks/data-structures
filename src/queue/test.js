import { assert } from 'chai';

import { Queue } from './index'

describe('Testing Queue', function () {
  it('Initialize empty Queue and check for empty', function () {
    const queue = new Queue()
    assert(queue.empty(), "Queue should be empty")
  })

  it('Testing enqueue and dequeue', function () {
    const queue = new Queue()
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    assert(!queue.empty(), "Queue shouldn't be empty")
    assert(queue.dequeue() === 1, "Dequeue should be 1")
    assert(queue.dequeue() === 2, "Dequeue should be 2")
    assert(queue.dequeue() === 3, "Dequeue should be 3")
    assert(queue.empty(), "Queue should be empty")
  })

})
