// Is responsible for holding data and pointing to the next node
class LinkedListNode {
  constructor(val) {
    this.value = val; // -> data value
    this.next = null; // -> pointer
  }
}

// This class represents the data structure of the list
// This class allows us to manipulate the list (e.g. add, remove, traverse)
class LinkedList {
  constructor() {
    // this.head = null and this.length = 0 say the list is empty
    this.head = null
    this.length = 0
  }

  addToHead(val) {
    const newNode = new LinkedListNode(val, this.head);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  addToTail(val) {
// We need to add a node as the last tail -> newNode = this.next? Have this node point to Null. Increase the length
// Why is there no this.head parameter passed in the instance?



    const newNode = new LinkedListNode(val)
    // Initialize a variable to indicate the current node
    let current;


    // if list's empty
    if (!this.head) {
      this.head = newNode
    } else { 
      // if there is already a head
      // 1. reassign head node
      current = this.head

      // 2. while this.head points to another node.
      while(current.next) {
        // reassign the current node to the next node
        current = current.next
      }
      // When outside of the loop, the current node is reassigned to the new instance.
      current.next = newNode
    }
    this.length++
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
