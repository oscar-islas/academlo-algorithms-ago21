class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack{
  constructor(maxSize){
    this.top = null;
    this.bottom = null;
    this.minValue = null;
    this.maxValue = null;
    this.maxSize = maxSize;
    this.size = 0;
  }

  insert(value){
    const newNode = new Node(value);
    if(!this.top){
      this.top = newNode;
      this.bottom = newNode;
      this.minValue = newNode;
      this.maxValue = newNode;
    }else{
      newNode.next = this.top; //Apuntamos al elemento que está en la cima
      this.top = newNode;
      this.minValue = this.checkMin(newNode);
      this.maxValue = this.checkMax(newNode);
    }
    this.size++;
    return this;
  }

  peek(){
    return this.top;
  }

  isEmpty(){
    return this.size === 0;
  }

  isFull(){
    return this.size === this.maxSize;
  }

  pop(){ //O(1) -> O(n) peor de los casos
    if(this.size > 0){
      let topNode = this.top;
      if(topNode === this.maxValue){
        console.log('Se está tratando de eliminar el valor más grande de la pila');
        this.maxValue = this.nextMaxValue(); //O(n)
      }
      this.top = topNode.next;
      this.size--;
      return topNode;
    }
  }

  checkMin(node){
    //Comprobar si el nodo que está ingresando es un nodo con el valor más pequeño que se encuentra en la pila
    if(node.value <= this.minValue.value){
      /* Regresamos el nodo que acaba de ingresar indicando 
      * que ese será el más pequeño que ha ingresado en la pila 
      */
      return node; 
    }
    return this.minValue; //Regresamos el nodo con el valor más pequeño de la pila
  }

  checkMax(node){
    //Comprobar si el nodo que está ingresando es un nodo con el valor más grande que se encuentra en la pila
    if(node.value > this.maxValue.value){
      /* Regresamos el nodo que acaba de ingresar indicando 
      * que ese será el más grande que ha ingresado en la pila 
      */
      return node; 
    }
    return this.maxValue; //Regresamos el nodo con el valor más pequeño de la pila
  }

  nextMaxValue(){
    let currentNode = this.top.next;
    let maxValue = currentNode;
    while(currentNode){
      if(currentNode.value > maxValue.value){
        maxValue = currentNode;
      }
      currentNode = currentNode.next;
    }
    return maxValue;
  } //O(n)

  min(){
    return this.minValue.value;
  }

  max(){
    return this.maxValue.value;
  }
}

const myStack = new Stack(6);
myStack.insert(3);
myStack.insert(2);
myStack.insert(1);
myStack.insert(5);
myStack.insert(7);
myStack.insert(11);
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.max());
// console.log(JSON.stringify(myStack.top));