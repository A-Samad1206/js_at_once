// Function without any name.
// Have to wrap within (), make it an expression
// and return function object
((a, b) => {
  console.log(a, b);
})(10, 30);
// As can not be accessed after creation thats why have assign
// to a variable, for later use
const fn = function () {};

// no need to wrap inside (), becoz assigning it to variable fn
// make it a valid expression.
