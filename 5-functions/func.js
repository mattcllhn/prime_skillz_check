// 1 - Write a function declaration
// that takes no arguments and
// returns the value 4
function declaredThis(){
  return 4;
}
// 2 - Write a function declaration
// that takes two arguments and
// returns the value of the result
// of the multiplication of both
// arguments
function declaredF(a, b){
  return a*b;
}

// 3 - Write a function expression
// that takes one argument and
// console logs that value.
var expression = function(arg){
  console.log(arg);

};

// 4 - Write a function declaration
// that takes a number and divides it
// by two.
function divideByTwo(num){
  num/=2;
  return num;
}

// 5 - Call the function from 4 and
// pass it into the function from 2 called with
// the arguments 10, 20. Console log the result.
console.log(divideByTwo(declaredF(10,20)));
