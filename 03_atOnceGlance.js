// Unary operator - usage
// 1 - Convert to Positive
let a = -1;
let pA = +1;

// 2 - Convert a boolean to its numeric value.
let f = false;
let t = true;
console.log(+f);
console.log(+t);

// 3 - Calling valueOf or toString of obejct
// On applying + operator on obj, invoke valueOf(if not present fallback to toString)
// then toString
let obj = {
  valueOf: () => 'valueOf',
  toString: () => 'valueOf',
};

console.log(+obj); // return NaN
let validObj = {
  valueOf: () => -5,
  toString: () => -10,
};

// One caveat - Would not make it positive, because valiObj is not of numeric type.
console.log(+(+validObj));

//  Working
console.log(-+validObj); // +5

// But here it is negating
console.log(-(-validObj)); // -5

// Logical assignment operator

// ||=, &&= and ??=

// a||=b ==> Assign b to a, if a is falsy.
// document.querySelector('.search-result').textContent ||=
//   'Sorry! No result found';

// a&&=b ==> Assign b to a, if a is truthy.
let person = {
  firstName: 'Jane',
  lastName: 'Doe',
};
person.lastName &&= 'Smith';

// a?=b ==> Assign b to a, if a is null or undefined.
person.notProp ??= 'Add it';

// a ?? b
// return b if a is undefined or null.

let result = 1 ?? console.log('Hi');
console.log(result);

//// Function
/*
1.) Hoisting
2.) arguments 
 */
showMe(); // a hoisting example

function showMe() {
  console.log('an hoisting example');
}

let obj1 = {};

// obj1=null;
// console.log(typeof obj1);
console.log(typeof null);

// Destructirng
// Syntatic sugar form of assigning objects properties to variables

// Optional chaining
// Shortcut for accessing nested properties in a series of objects,
// If any part of the chain is empty, it will stop right there and return
// undefined, which save from writing extra codes.

// Object Literal Syntax
// Shorted syntax of defining and creating objects
// 1.) As object is collection of properties, and property is [key,value] pair.
// If value is any variable, of the same nameas of key,
// Insted of writing key:value, simply write key, and reduce code length.
// Same goes with method,
// 2.) Computed proeperty name, allow to write key as expression /
// instead of hardcoding as a string.

// Concise Method syntax :
// In object literal, to define method in object, have to specify the name and funciton
// definintion followed it.
// Concide method make it more succint by just removing colon.

// Call and prototype
function isOdd(number) {
  return number % 2;
}

function getOddNumbers() {
  return Array.prototype.filter.call(arguments, isOdd);
}

let results = getOddNumbers(10, 1, 3, 4, 8, 9);
console.log(results);

// BIG INT
// Used to store value above 2^53-1
// Number.MAX_SAFE_INTEGER
// Does not suport + , but support -
// in dividison / does not return fractional part.
