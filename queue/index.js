class Node {
  //¿Dos propiedades de un nodo de una lista enlazada (simple) ?
  constructor(value){
    this.prev = null;
    this.value = value;
  }
}

class Queue {
  constructor(){
    //¿Tres propiedades de las colas (queue)?
    this.rear = null;
    this.front = null;
    this.size = 0;
  }

  enqueue(value){
    //Agregar un nuevo elemento a la cola
    const newNode = new Node(value);
    if(this.size === 0){
      this.rear = newNode;
      this.front = newNode;
    }else{
      this.rear.prev = newNode;
      this.rear = newNode;
    }
    this.size++;
    return this;
  }

  dequeue(){
    //Quitar un elemento de la cola
    if(!this.front){
      //Paramos la ejecución de la operación cuando no tengamos elementos en la estructura
      return null; 
    }
    if(this.front === this.rear){
      this.rear = null;
    }
    const nodeRemoved = this.front;
    this.front = this.front.prev;
    this.size--;
    return nodeRemoved;
  }

  peek(){
    return this.front;
  }

  isEmpty(){
    return this.size === 0;
  }
}

const myQueue = new Queue();
myQueue.enqueue(7);
myQueue.enqueue(8);
myQueue.enqueue(9);
myQueue.dequeue();
myQueue.dequeue();
console.log(JSON.stringify(myQueue.front));