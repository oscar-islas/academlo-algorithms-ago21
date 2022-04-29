function linearSearch(input, n){
  for(let i = 0; i < input.length; i++){
    if(input[i] === n){
      return true;
    }
  }
  return false;
}

const numbers = [3, 5, 9, 2, 1];
console.log(linearSearch(numbers, 10));

//Mejor de los casos O(1) -> Cuando se encuentra al principio
//Caso promedio O(n/2) -> 2.5 pasos
//Peor casos O(n) -> 5 pasos