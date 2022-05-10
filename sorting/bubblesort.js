function bubbleSort(arr){
  let i, j, temp;
  let length = arr.length;
  let pasos = 0;

  for(i = 0; i < length - 1; i++){
    for(j = 0; j < length - i - 1; j++){
      if(arr[j] > arr[j+1]){
        //Intercambio de numeros
        temp = arr[j]; 
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      pasos++;
    }
    pasos++;
  }
  console.log(pasos);
  return arr;
} //O(n^2)

function bubbleSortOptimized(arr){
  let i, j, temp, swapped;
  let length = arr.length;
  let pasos = 0;
  for(i = 0; i < length - 1; i++){
    swapped = false;
    for(j = 0; j < length - i - 1; j++){
      if(arr[j] > arr[j+1]){
        //Intercambio de numeros
        temp = arr[j]; 
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
      pasos++;
    }
    pasos++;
    if(swapped === false){
      break;
    }
  }
  console.log(pasos);
  return arr;
}

let nArr = [5, 3, 8, 4, 6];
console.log(bubbleSortOptimized(nArr));