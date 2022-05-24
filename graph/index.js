class Graph {
  constructor(){
    this.adjacencyList = {};
  }

  addVertex(vertex){
    if(!this.adjacencyList[vertex]){
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(source, destination){
    //Dirigido
    if(!this.adjacencyList[source]){
      this.addVertex(source);
    }
    this.adjacencyList[source].push(destination);
    //No dirigido
    // if(!this.adjacencyList[source]){
    //   this.addVertex(source);
    // }
    // if(!this.adjacencyList[destination]){
    //   this.addVertex(destination);
    // }
    // this.adjacencyList[source].push(destination);
    // this.adjacencyList[destination].push(source);
  }

  removeEdge(source, destination){
    this.adjacencyList[source] = this.adjacencyList[source].filter( vertex => vertex !== destination);
  }

  removeVertex(vertex){
    delete this.adjacencyList[vertex];
  }

  showConnections(source){
    const currentNode = this.adjacencyList[source];
    let connections = '';
    for(let vertex of currentNode){
      connections += vertex + ','
    }
    console.log(source, '--->', connections)
  }
}

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addEdge('0', '1');
myGraph.addEdge('0', '3');
myGraph.addEdge('1', '2');
myGraph.addEdge('2', '4');
myGraph.addEdge('2', '5');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '5');
myGraph.showConnections('2');