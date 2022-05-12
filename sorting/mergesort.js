function mergeSort(arr) {
  //Si el arreglo tiene tamaño 1
  //Regresaremos el arreglo
  if (arr.length === 1) {
    return arr; //Caso base
  }

  const length = arr.length;
  const middle = Math.floor(length / 2);
  const leftSide = arr.slice(0, middle);
  const rightSide = arr.slice(middle);
  //Dividimos la lista hasta tener sublistas con un elemento
  return merge(mergeSort(leftSide), mergeSort(rightSide)); 
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const nArr = [8, 4, 9, 2, 5, 10, 1, 3];

console.log(mergeSort(nArr));
