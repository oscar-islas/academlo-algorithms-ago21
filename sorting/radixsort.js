function countingSort(arr, originalArr){
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
  //Fixed Arr -> recorrer el indice de cumulative arr
  let fixedArr = Array.from(cumulativeArr);
  fixedArr.pop();
  fixedArr.unshift(0);
  for(let i = 0; i < arr.length; i++){
    result[fixedArr[arr[i]]] = originalArr[i];
    fixedArr[arr[i]]+=1;
  }
  return result;
}

function radixSort(arr){
  let lsdArr = [];
  let maxValue = Math.max(...arr);
  let digitSize = maxValue.toString().length;
  for(let i = 0; i < digitSize; i++){
    for(let j = 0; j < arr.length; j++){
      let number = arr[j].toString();
      let lsd = number[number.length -1 - i];
      if(lsd === undefined){
        lsdArr.push(0);
      }else{
        lsdArr.push(Number(lsd));
      }
    }
    arr = countingSort(lsdArr, arr);
    lsdArr = [];
  }
  return arr;
}

let nArr = [12,34,51,100,120,32,100,1];
console.log(radixSort(nArr));