function insertionSort(arr) {
  let length = arr.length;
  let i, j;
  for(i = 0; i < length; i++){
    if(arr[i]<arr[0]){
      //Quitar el elemento en la posición i
      //Agregarlo al inicio del arreglo
      //unshift agrega un elemento al inicio del arreglo
      arr.unshift(arr.splice(i,1)[0]);
    }else{
      if(arr[i] < arr[i-1]){
        //Comenzaremos a posicionar el numero más pequeño (arr[i]) a la izquierda
        //hasta encontrar su posición
        for(let j = i; j > 0; j--){
          if(arr[j-1] <= arr[i] && arr[i] > arr[j-1]){
            //Eliminar el elemento que ocupa la posición i
            //Después lo insertaremos en la posición j donde i > j
            arr.splice(j,0,arr.splice(i,1)[0]);
            break;
          }
        }
      }
    }
  }
  return arr;
}

let nArr = [5, 7, 9, 13, 3, 2, 12];
console.log(insertionSort(nArr));
