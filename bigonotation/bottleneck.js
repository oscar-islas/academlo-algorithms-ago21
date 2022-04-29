function search(array, n){
  let sortedArr = [];

  //Cuello de botella
  sortedArr = bubbleSort(array); //O(n^2); 

  for(let i = 0; i < sortedArr.length; i++){
    if(sortedArr[i] === n){
      return sortedArr[i]; 
    }
  } //O(n)

  return -1;
} //O(n^2)












function search(array, n){
  let sortedArr = [];

  sortedArr = mergeSort(array); //O(n log n);

  for(let i = 0; i < sortedArr.length; i++){
    if(sortedArr[i] === n){
      return sortedArr[i]; 
    }
  } //O(n)

  return -1;
} //O(n log n);