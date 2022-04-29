//Implementación de un Stack usando un Array
class Stack{
  constructor(){
    this.data = [];
    this.top = null;
  }

  push(value){
    this.data.push(value);
    this.top = value;
    return this;
  }

  pop(){
    this.data.pop(); //[4,5,6] -> 6 -> [4,5]
    if(this.data.length - 1 >= 0){
      this.top = this.data[this.data.length - 1];
    }else{
      this.top = null;
    }
    return this;
  }

  peek(){
    //Para obtener el elemento que se encuentra en la cima (top)
    return this.top;
  }
}

const myStack = new Stack();
myStack.push(4);
myStack.push(7);
myStack.push(8);
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack.peek());

