function selectionSort(arr) {
  let length = arr.length;
  let max, i, j, temp;
  //max -> indice que ocupa el numero más grande de la lista
  // de numeros no ordenados
  for (i = 0; i < length - 1; i++) {
    max = length - i - 1;
    for (j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[max]) {
        max = j;
      }
    }
    //Intercambio que haremos una vez que
    //terminemos de comparar todos los numeros
    //de la lista
    if (max !== i) {
      temp = arr[length - 1 - i];
      arr[length - 1 - i] = arr[max];
      arr[max] = temp;
    }
  }
  return arr;
}

function selectionSortMin(arr) {
  let length = arr.length;
  let min, i, j, temp;
  //min -> indice que ocupa el numero más pequeño de la lista
  // de numeros no ordenados
  for (i = 0; i < length - 1; i++) {
    min = i;
    for (j = i + 1; j < length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    //Intercambio que haremos una vez que
    //terminemos de comparar todos los numeros
    //de la lista
    if (min !== i) {
      // temp = arr[i];
      // arr[i] = arr[min];
      // arr[min] = temp;
      temp = arr.splice(i, 1)[0];
      tempTwo = arr.splice(min-1, 1)[0];
      nArr.splice(i, 0, tempTwo);
      nArr.splice(min, 0, temp);
    }
  }
  return arr;
}

let nArr = [5, 7, 9, 13, 3];
console.log(selectionSortMin(nArr));
