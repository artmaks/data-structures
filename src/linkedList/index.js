function Node(data) {
  this.data = data
  this.next = null
}

function LinkedList() {
  this.head = null
  this.tail = null
  this.length = 0
}

LinkedList.prototype.add = function(item) {
  const node = new Node(item)

  if(!this.head) {
    this.head = node
    this.tail = node
  } else {
    this.tail.next = node
    this.tail = node
  }
  this.length++
}


LinkedList.prototype.remove = function(data) {
  let current = this.head
  if(!current)
    return false

  if(current.data === data) {
    this.head = current.next
    this.length--
    return true
  }

  while(current.next) {
    if(current.next.data === data) {
      current.next = current.next.next
      this.length--
      return true
    }
    current = current.next
  }
  return false
}

LinkedList.prototype.getByIndex = function(index) {
  if(index > this.length - 1)
    throw Error('List index out of bounds')

  let result = this.head
  for(let i = 0; i < index; i++) {
    result = result.next
  }
  return result.data
}

LinkedList.prototype.insertAfter = function(afterData, data) {
  const node = new Node(data)
  let current = this.head

  while(current) {
    if(current.data === afterData) {
      node.next = current.next
      current.next = node
      this.length++
      return true
    }
    current = current.next
  }

  return false
}


LinkedList.prototype.toString = function() {
  let current = this.head
  let result = ""

  while(current) {
    result += current.data.toString() + ' '
    current = current.next
  }

  return result.trim()
}

const list = new LinkedList()
list.add(1)
console.log(list.toString())
list.remove(1)
list.remove(1)
list.remove(1)
console.log(list.toString())

export {
  LinkedList,
}
