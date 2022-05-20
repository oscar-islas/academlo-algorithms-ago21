class Node {
  constructor(value) {
    this.value = value;
    this.left = null; //Puntero izq
    this.right = null; //Puntero der
  }
}

class BinarySearchTree {
  constructor() {
    //Puntero raíz
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    let currentNode = this.root; //Para poder hacer las comparaciones
    if (!this.root) {
      //Agregar el nodo como la raíz del árbol
      this.root = newNode;
    } else {
      //Recorrer nuestro árbol
      while (true) {
        if (currentNode.value > value) {
          //Comprobar si existe un nodo a la izquierda
          if (!currentNode.left) {
            currentNode.left = newNode;
            return;
          }
          currentNode = currentNode.left;
        } else if (currentNode.value < value) {
          //Comprobar si existe un nodo a la derecha
          if (!currentNode.right) {
            currentNode.right = newNode;
            return;
          }
          currentNode = currentNode.right;
        } else {
          //No se admite valores duplicados
          return;
        }
      }
    }
  }

  search(value) {
    if (!this.root) {
      return null;
    }

    let currentNode = this.root;
    currentNode['depth'] = 0;
    if (currentNode.value === value) {
      return currentNode;
    }

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }

      currentNode.depth++;
      if (currentNode.value > value) {
        //Recorrer del lado izquierdo
        currentNode.left.depth = currentNode.depth;
        currentNode = currentNode.left;
      } else {
        //Recorremos del lado derecho
        currentNode.right.depth = currentNode.depth;
        currentNode = currentNode.right;
      }
    }
    return currentNode;
  }

  //Recorrido -> Traverse
  inOrder() {
    if (!this.root) {
      return null;
    }

    let list = [];

    //Recorrido recursivo
    function traverse(currentNode) {
      if (currentNode.left) {
        traverse(currentNode.left);
      }
      //Agregar los elementos a la lista
      list.push(currentNode.value);
      if (currentNode.right) {
        traverse(currentNode.right);
      }
    }

    traverse(this.root);
    return list;
  }

  findMin() {
    if (!this.root) {
      return null;
    }

    let currentNode = this.root;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }

  findMax() {
    if (!this.root) {
      return null;
    }
    let currentNode = this.root;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode;
  }

  depth(value) {
    if (value === null) return -1;
    else {
      let lDepth = maxDepth(node.left);
      let rDepth = maxDepth(node.right);
      if (lDepth > rDepth) return lDepth + 1;
      else return rDepth + 1;
    }
  }

  height() {
    let depth = 0;

    let q = [];

    q.push(this.root);
    q.push(null);
    while (q.length > 0) {
      let temp = q.shift();

      if (temp == null) depth += 1;

      if (temp != null) {
        if (temp.left) q.push(temp.left);

        if (temp.right) q.push(temp.right);
      }

      else if (q.length > 0) q.push(null);
    }
    return depth;
  }
}

const myTree = new BinarySearchTree();
myTree.insert(10);
myTree.insert(4);
myTree.insert(9);
myTree.insert(15);
myTree.insert(12);
myTree.insert(16);
myTree.insert(18);
myTree.insert(3);
console.log(myTree.height(16));

// console.log(JSON.stringify(myTree.root));
