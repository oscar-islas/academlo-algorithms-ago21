function permutation(str){
  let results = [];
  permutationRecursive(str, "", results.push.bind(results));
  return results;
}

function permutationRecursive(str, prefix, results){
  if(str.length === 0){
    results(prefix);
    return prefix;
  }else{
    for(let i = 0; i < str.length; i++){ //O(n)
      let rem = str.substring(0, i) + str.substring(i + 1);
      permutationRecursive(rem, prefix + str.charAt(i), results);
    }
  }
}


function checkPermutations(b){
  let permutations = permutation("abbc");
  let indexes = [];
  for(let i = 0; i < b.permutations; i++){
    b.includes(permutations[i]);
  }
}