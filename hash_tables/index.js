class HashTable{
  constructor(size){
    this.data = new Array(size); //Donde almacenaremos los pares clave/valor
  }

  _hash(key){
    let hash = 0;

    for(let i = 0; i < key.length; i++){
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }

  set(key, value){
    //1. Convertimos la llave (key) a entero usando la hash function
    let address = this._hash(key); //O(n)

    //2. Comprobar que dentro del arreglo en la posición address no tengamos un par clave/valor
    if(!this.data[address]){
      this.data[address] = []; //O(1)
    }

    //3. Accedemos al indice [address] del arreglo data y colocamos el par clave/valor
    //Esto resolvería la colisión
    this.data[address].push([key, value]); //O(n)
    return this.data; //O(1)
  } //O(2n + 2) -> O(n)

  get(key){
    //1. Convertimos la llave (key) a entero usando la hash function
    let address = this._hash(key); //O(n)

    //2. Obtenemos el almacen (bucket) donde están almacenados los pares clave/valor
    let currentBucket = this.data[address]; //O(1)

    //3. Iteramos sobre al almacen para encontrar la clave
    if(currentBucket.length > 0){
      for(let i = 0; i < currentBucket.length; i++){ //O(n)
        if(currentBucket[i][0] === key){
          return currentBucket[i][1];
        }
      }
    }else{
      return undefined;
    }
  } //O(n)

  keys(){
    // Regresar todas las claves almacenadas en esta estructura de datos
    let keysArr = [];
    //Iterar sobre data
    for(let i = 0; i < this.data.length; i++){ //O(n)
      let currentBucket = this.data[i];
      if(currentBucket && currentBucket.length > 0){ //O(k)
        for(let j = 0; j < currentBucket.length; j++){
          keysArr.push(currentBucket[j][0]);
        }
      }
    }
    return keysArr;
  } //O(nk)
}

const myHashTable = new HashTable(7);
myHashTable.set("name", "Academlo");
myHashTable.set("lastname", "Info");
myHashTable.set("email", "info@academlo.com");
myHashTable.set("password", "@academlo1234");
myHashTable.set("active", true);
console.log(myHashTable.keys());
