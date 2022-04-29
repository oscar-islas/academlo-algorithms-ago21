function foo(x){
  // if(x>=3){
  //   return;
  // }
  x++;
  foo(x);
}

foo(0);