class Node {
  constructor(value){
    this.value = value; //Valor
    this.next = null; //Puntero
  }
}

class LinkedList {
  constructor(){
    this.head = null; //Cabeza
    this.tail = null; //Cola
    this.size = 0;
  }

  insert(value){
    let newNode = new Node(value); //Creamos el nodo
    if(!this.head){ //Cuando la lista enlazada está vacia
      this.head = newNode;
      this.tail = newNode;
    }else{
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  search(value){
    let currentNode = this.head;
    while(currentNode){
      if(currentNode.value === value){
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  delete(value){
    let currentNode = this.head;
    if(currentNode.value === value){
      this.head = currentNode.next;
      this.size--;
    }else{
      while(currentNode){
        let prevNode = currentNode;
        let target = currentNode.next ? currentNode.next : false;
        if(currentNode.next && target.value === value){
          prevNode.next = target.next;
          this.size--;
        }
        currentNode = currentNode.next;
      }
    }
  }

  swap(nodeA, nodeB){

  }
}

const myLinkedList = new LinkedList();
myLinkedList.insert(2);
myLinkedList.insert(4);
myLinkedList.insert(5);
myLinkedList.insert(3);
console.log(myLinkedList.delete(2));
console.log(JSON.stringify(myLinkedList));