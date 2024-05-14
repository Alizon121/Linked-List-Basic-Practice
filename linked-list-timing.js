const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/


// The time complexities for the below methods are 0(1) and O(n), respectively
let newLink = new LinkedList()

let startHead = Date.now();
console.log(newLink.addToHead(10));
console.log(newLink.addToHead(30))
let endHead = Date.now()
console.log(`single Linked List takes: ${endHead - startHead}ms to run`);

let startTail = Date.now();
console.log(newLink.addToTail(10));
console.log(newLink.addToTail(30))
let endTail = Date.now()
console.log(`single Linked List takes: ${endTail - startTail}ms to run`);

// The time complexities for the below methods are both O(1)

let newDoubleLink = new DoublyLinkedList();

const startDoubleHead = Date.now();
console.log(newDoubleLink.addToHead(10));
console.log(newDoubleLink.addToHead(30));
const endDoubleHead = Date.now()

console.log(`Double linked list takes ${endDoubleHead - startDoubleHead}ms to run`);

const startDoubleTail = Date.now();
console.log(newDoubleLink.addToTail(10));
console.log(newDoubleLink.addToTail(30));
const endDoubleTail = Date.now()

console.log(`Double linked list takes ${endDoubleTail - startDoubleTail}ms to run`);