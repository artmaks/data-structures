function ArrayWrapper() {
  this.array = []
}

ArrayWrapper.prototype = {
  get length() {
    return this.array.length
  }
}

ArrayWrapper.prototype.push = function (item) {
  this.array.push(item)
}

ArrayWrapper.prototype.toString = function () {
  return this.array.join(',')
}

ArrayWrapper.prototype.getElementByIndex = function(id) {
  return this.array[id]
}

export {
  ArrayWrapper
}
