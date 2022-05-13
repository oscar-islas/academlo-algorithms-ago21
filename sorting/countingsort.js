function countingSort(arr){
  let maxValue = Math.max(...arr);
  let countingArr = new Array(maxValue+1).fill(0);
  let result = Array.from(arr);
  //Count Arr
  for(let i = 0; i < arr.length; i++){
    countingArr[arr[i]] = countingArr[arr[i]] + 1; 
  }
  //Cumulative Arr
  let cumulativeArr = Array.from(countingArr);
  for(let i = 0; i < countingArr.length; i++){
    if(countingArr[i-1] !== undefined){
      cumulativeArr[i] = cumulativeArr[i-1] + cumulativeArr[i];
    }
  }
  let fixedArr = Array.from(cumulativeArr);
  fixedArr.pop();
  fixedArr.unshift(0);
  for(let i = 0; i < arr.length; i++){
    result[fixedArr[arr[i]]] = arr[i];
    fixedArr[arr[i]]+=1;
  }
}

let nArr = [3,5,7,2,5,10,9,1,2,3,4];
countingSort(nArr);