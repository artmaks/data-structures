import { assert } from 'chai';

import { ArrayWrapperES6 } from './es6'
import { ArrayWrapper } from './index'

const classesForTest = [ArrayWrapper, ArrayWrapperES6]

function compareArrays(a, b) {
  const compareResult = a.toString() === b.toString()
  assert(compareResult, "Arrays are not equal")
}

classesForTest.forEach(TestArray => {
  const className = TestArray.name
  describe(`Testing Array Wrapper for (${className})`, function () {
    it(`Initialize empty array`, function () {
      const a = []
      const b = new TestArray()
      compareArrays(a, b)
    })

    it(`Testing push method`, function () {
      const a = []
      const b = new TestArray()

      a.push(1)
      b.push(1)

      compareArrays(a, b)
    })

    it(`Testing get element by index method`, function () {
      const a = []
      const b = new TestArray()

      a.push(1)
      a.push(2)
      a.push(3)
      b.push(1)
      b.push(2)
      b.push(3)

      assert(a[1] === b.getElementByIndex(1), "Element by index 1 incorect")
    })

    it(`Testing length getter`, function () {
      const a = []
      const b = new TestArray()

      a.push(1)
      b.push(1)

      assert(a.length === b.length, "Length is incorect")
    })
  })
})
