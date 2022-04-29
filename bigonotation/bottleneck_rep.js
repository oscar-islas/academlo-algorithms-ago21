function countPairs(array, sum){
  let count = 0;
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length; j++){
      if((array[i] + array[j] === sum) && j !== i){
        count++;
      }
    }
  }
  return count;
} //O(n^2)

//array = [1, 2, 3, 4]
//sum = 4
//[1, 3]

function countPairs(array, sum){
  let count = 0;
  let hashTable = {};
  for(let i = 0; i < array.length; i++){
    hashTable[array[i]] = true;
  } //O(n)

  for(let i = 0; i < array.length; i++){
    let r = sum - array[i];
    if(hashTable[r]){
      count++;
    }
  } //O(n)
  return count;
} //O(n)