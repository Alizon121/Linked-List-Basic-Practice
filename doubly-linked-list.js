class DoublyLinkedListNode {
  constructor(val) {
    // this list goes backwards and forwards
    // this.value = data
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
// class that represents data structure for manipulating the nodes.
    this.head = null
    this.tail = null
    this.length = 0
  }

  addToHead(val) {
    let node = new DoublyLinkedListNode(val)
    if (!this.head) {
      this.tail = node;
      this.head = node;
    } else {
    node.next = this.head; // -> sets the pointer for the new node to this.head
      this.head.prev = node; // -> assigning the pointer of the previous node to the new node instance.
      this.head = node;
  }
  this.length++;
}

  addToTail(val) {
    let newNode = new DoublyLinkedListNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode
    }
    else {
      // Assumes there is at least one node in the list.
      // set the tail to the node preceding the tail in the list
      //      Need to point to this node.
      this.tail.next = newNode; // -> tail pointers points to newNode
      newNode.prev = this.tail; // -> newNode previous pointer is pointing to old tail
      this.tail = newNode; // -> this.tail is newNode
    }
      this.length++;
  }



  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}


module.exports = DoublyLinkedList;
