function quickSort(arr, low, high){

  if(low < high){
    let pIndex = partition(arr, low, high); //Indice del Pivote (high)
    quickSort(arr, low, pIndex - 1) //Resolver la mitad de la izquieda
    quickSort(arr, pIndex + 1, high); //Resolver la mitad de la derecha
  }
  return arr;
}

function partition(arr, low, high){
  let i = low - 1;
  let pivot = arr[high];

  for(let j = low; j < high; j++){
    if(arr[j] < pivot){
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i+1, high);
  return i+1;
}

function swap(arr, i, j){
  let temp = arr[i];
  arr[i] = arr[j]
  arr[j] = temp;
}

let nArr = [7, 2, 1, 4, 9, 8, 10, 5];
console.log(quickSort(nArr, 0, nArr.length - 1));