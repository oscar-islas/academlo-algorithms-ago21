function linearSearch(input, inputTwo, n){
  let pasos = 0;
  for(let i = 0; i < input.length; i++){
    pasos++;
    if(input[i] === n){
      return true;
    }
  } //O(n)

  for(let j = 0; j < inputTwo.length; j++){
    pasos++;
    if(input[j] === n){
      return true;
    }
  } //O(m)
  console.log(pasos);
  return false;
}

const numbers = [3, 5, 9, 2, 1]; //5 elementos
const primes = [2, 3, 5, 7, 11, 13]; //6 elementos
console.log(linearSearch(numbers, primes, 10));

// Complejidad O(n+m) -> 
// input -> n
// inputTwo - m