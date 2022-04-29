function sum(a, b){
  //Caso base
  if(b === 0){
    return a;
  }

  //Caso recursivo
  return 1 + sum(a, b-1);
}


function product(a, b){
  //Caso base
  if(b === 1){
    return a;
  }

  return sum(a, product(a, b-1));
}

function factorial(a){
  if(a === 1){
    return 1;
  }
  return a * factorial(a-1);
}

function power(a){
  //Crea una funcion recursiva que nos permita elevar un numero al cuadrado
}

console.log(factorial(4));