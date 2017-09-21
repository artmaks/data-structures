import { assert } from 'chai';

import { ArrayWrapper } from './index'


function compareArrays(a, b) {
  const compareResult = a.toString() === b.toString()
  assert(compareResult, "Arrays are not equal")
}

describe('Testing Array Wrapper', function () {
  it(`Initialize empty array`, function () {
    const a = []
    const b = new ArrayWrapper()
    compareArrays(a, b)
  })

  it(`Testing push method`, function () {
    const a = []
    const b = new ArrayWrapper()

    a.push(1)
    b.push(1)

    compareArrays(a, b)
  })

  it(`Testing get element by index method`, function () {
    const a = []
    const b = new ArrayWrapper()

    a.push(1)
    a.push(2)
    a.push(3)
    b.push(1)
    b.push(2)
    b.push(3)

    assert(a[1] === b.getElementByIndex(1), "Element by index 1 incorect")
  })
})
