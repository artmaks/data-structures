function Queue() {
  this.array = []
}

Queue.prototype.enqueue = function(data) {
  this.array.push(data)
}

Queue.prototype.dequeue = function() {
  return this.array.shift()
}

Queue.prototype.empty = function() {
  return this.array.length <= 0
}

Queue.prototype.size = function() {
  return this.array.length
}

export {
  Queue,
}
