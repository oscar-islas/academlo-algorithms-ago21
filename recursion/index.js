//Recursividad es una función que se llama así misma dentro del cuerpo de la función


//Iterativa

//5*4*3*2*1
//1*2*3*4*5 -> Iterativa
function factorialIterative(n){
  let result = 1;
  for(let i = 1; i <= n; i++){
    console.log(`${result} x ${i}`)
    result *= i;
  }
  return result;
}


//Recursiva
//5*4*3*2*1
function factorialRecursive(n){
  let result = 1;
  //Caso base
  if(n === 1){
    // Vamos a acercarnos a nuestro caso base
    return result;
  }

  //Caso recursivo
  return n * factorialRecursive(n-1);
}

//Crear una función recursiva que nos permita sumar dos numeros
function sumRecursive(a, b){
  //Caso base
  if(b === 0){
    return a;
  }
  //Caso recursivo
  return 1 + sumRecursive(a, b-1);
}

console.log(sumRecursive(2, 3));

// 2 + 3 -> 5

//sumRecursive(2, 0) -> 2
//sumRecursive(2, 1) -> [ 1 + sumRecursive(2, 0) ] -> 3
//sumRecursive(2, 2) -> [ 1 + sumRecursive(2, 1) ] -> 4
//sumRecursive(2, 3) -> [ 1 + sumRecursive(2, 2) ] -> 5


function prodRecursive(a, b){
  //Caso base
  if(b === 1){
    return a;
  }
  //Caso recursivo
  return a + prodRecursive(a, b-1);
}

function prodRecursiveB(a, b){
  //Caso base
  if(b === 1){
    return a;
  }
  //Caso recursivo
  return sumRecursive(a, prodRecursive(a, b-1));
}

console.log(prodRecursiveB(2,3));
// 2 * 3 -> 6 
// 2 + 2 + 2 -> 6

//prodRecursive(2, 1) -> 2
//prodRecursive(2, 2) -> 4 return a + prodRecursive(2, 1)
//prodRecursive(2, 3) -> 6 return a + prodRecursive(2, 2)

function powerRecursive(a, b){
  if(b === 0){
    return 1;
  }

  return a * powerRecursive(a, b-1);
}

function powerRecursiveB(a, b){
  if(b === 0){
    return 1;
  }

  return prodRecursive(a, powerRecursiveB(a, b-1));
}

console.log(powerRecursiveB(2,1));
// 2^3
// 2 * 2 * 2

// 2^2
// 2 * 2

// 2^4
// 2 * 2 * 2 * 2

// powerRecursive(2, 0) -> 1
// powerRecursive(2, 1) -> a * powerRecursive(2, 0) = 2
// powerRecursive(2, 2) -> a * powerRecursive(2, 1) = 4
// powerRecursive(2, 3) -> a * powerRecursive(2, 2) = 8

// powerRecursiveB(2, 1) -> prodRecursive(a, powerRecursive(2, 0))