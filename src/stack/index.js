function Node(data) {
  this.data = data
  this.next = null
}

function Stack() {
  this.head = null
}

Stack.prototype.push = function(data) {
  const node = new Node(data)

  if(!this.head) {
    this.head = node
  } else {
    node.next = this.head
    this.head = node
  }
}

Stack.prototype.empty = function() {
  return !this.head
}

Stack.prototype.peek = function() {
  return this.head ? this.head.data : null
}

Stack.prototype.pop = function() {
  if(!this.head) 
    return null

  const res = this.head.data
  this.head = this.head.next
  return res
}

export {
  Stack,
}