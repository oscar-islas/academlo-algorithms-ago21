class Heap {
  constructor(){
    this.data = [];
  }

  insert(value){
    this.data.push(value);
    //Le paso el indice del elemento que acabo de insertar
    this.moveUp(this.data.length - 1); 
  }

  moveUp(index){
    let element = this.data[index]; //El nuevo nodo/elemento a insertar

    while(index > 0){
      let parentIndex = Math.ceil((index-1)/2); //Obtenemos el indice
      let parent = this.data[parentIndex];  //Valor

      if(parent <= element) break;

      this.swap(index, parentIndex); //nuevo elemento, padre
      index = parentIndex;
    }
  }

  moveDown(index){
    let length = this.data.length;
    let leftSwapped = false;
    let rightSwapped = false;
    while(index >= 0){
      let element = this.data[index]; //Valor del nodo raíz
      let leftChild = (2*index) + 1;
      let rightChild = (2*index) + 2;
      leftSwapped = false;
      rightSwapped = false;

      let leftChildValue = this.data[leftChild];
      if(leftChild < length){
        if(leftChildValue < element){
          this.swap(leftChild, index); //intercambio hijo de la izquierda con el padre
          leftSwapped = true;
        }
      }

      if(rightChild < length){
        let rightChildValue = this.data[rightChild];
        if(rightChildValue < (leftSwapped ? leftChildValue : element)){
          this.swap(rightChild, index); //intercambio hijo de la derecha con el padre
          rightSwapped = true;
        }
      }
      if(rightSwapped || leftSwapped){
        if(leftSwapped){
          index = (2*index) + 1;
        }else{
          index = (2*index) + 2;
        }
      }else{
        break;
      };
    }
  }

  swap(a, b){
    //a -> nuevo elemento
    //b -> padre
    let aux = this.data[a];
    this.data[a] = this.data[b];
    this.data[b] = aux;
  }

  remove(){
    let last = this.data.pop();

    if(this.data.length > 0){
      this.data[0] = last; //Sustituimos la raíz por el elemento que se encuentra a extrema derecha
      this.moveDown(0);
    }
  }
}

const myHeap = new Heap();
myHeap.insert(10);
myHeap.insert(5);
myHeap.insert(8);
myHeap.insert(2);
myHeap.insert(17);
myHeap.insert(15);
myHeap.insert(14);
// myHeap.remove();
console.log(myHeap.data);