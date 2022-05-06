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

// console.log(sumRecursive(2, 3));

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

// console.log(prodRecursiveB(2,3));
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

// console.log(powerRecursiveB(2,1));

// 0, 1, 1, 2, 3, 5, 8, 13, 21
// 0  1  2  3  4  5  6   7   8
function fibIterative(n){
  let fib = [0, 1]; //Caso base

  for(let i = 0; i <= n - 2; i++){
    fib.push(fib[i] + fib[i+1]);
  }

  return fib; //O(n)
}

//O(2^n) -> Complejidad de tiempo
//O(1) -> Espacio
function fibRecursive(n){
  if(n === 0){
    return 0;
  }

  if(n === 1){
    return 1;
  }

  return fibRecursive(n-2) + fibRecursive(n-1);
}

// console.log(fibRecursive(47));

//Programación dinamica (memoization) -> O(n)
//O(n) -> tiempo
//O(n) -> espacio
function fibRecursiveB(n, memo){
  if(n === 0){
    return 0;
  }

  if(n === 1){
    return 1;
  }

  if(memo[n] === 0){
    memo[n] = fibRecursiveB(n-2, memo) + fibRecursiveB(n-1, memo);
  }

  return memo[n];
} //O(n)

function fibDynamic(n){
  return fibRecursiveB(n, new Array(n+1).fill(0));
}

// console.log(fibDynamic(47));


function tripleStep(n, memo){
  if(n === 0){
    return 1;
  }

  if(n < 0){
    return 0;
  }

  if(memo[n] === 0){
    memo[n] = tripleStep(n-1, memo) + tripleStep(n-2, memo) + tripleStep(n-3, memo)
  }

  return memo[n];
}

function tripleStepDP(n){
  return tripleStep(n, new Array(n+1).fill(0));
}

console.log(tripleStepDP(50));