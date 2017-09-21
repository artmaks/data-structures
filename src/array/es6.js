class ArrayWrapperES6 {
  constructor() {
    this.array = []
  }

  push(item) {
    this.array.push(item)
  }

  getElementByIndex(index) {
    return this.array[index]
  }

  toString() {
    return this.array.join(',')
  }

  get length() {
    return this.array.length
  }

}

export {
  ArrayWrapperES6,
}