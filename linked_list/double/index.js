class Node {
  constructor(value){
    //¿Cuáles son las propiedades del nodo para una lista enlazada doble?
    this.next = null; //Puntero para el siguiente nodo
    this.prev = null; //Puntero para el nodo previo
    this.value = value;
  }
}

class LinkedListDoubly {
  constructor(){
    //¿Cuáles son las propiedades para una lista enlazada doble?
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insert(value){
    let newNode = new Node(value);

    if(this.head){
      this.head.prev = newNode;
      newNode.next = this.head;
    }

    if(!this.tail){
      this.tail = newNode;
    }

    this.head = newNode;
    this.size++;
    return newNode;
  }

  delete(value){
    
  }

  print(){
    let list = [];
    let currentNode = this.head;
    while(currentNode){
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return list;
  }

  printReverse(){
    let list = [];
    let currentNode = this.tail;
    while(currentNode){
      list.push(currentNode.value);
      currentNode = currentNode.prev;
    }
    return list;
  }
}

const myLinkedListDoubly = new LinkedListDoubly();

myLinkedListDoubly.insert(4);
myLinkedListDoubly.insert(7);
console.log(myLinkedListDoubly.print());
console.log(myLinkedListDoubly.printReverse());