let apple = {
  valueOf: function () {
    return 10;
  },
};

let orange = {
  toString: function () {
    return 10;
  },
};
// console.log(apple > 10); // false
// console.log(orange == 20); // true
console.log(apple == orange);
/*
When objects are compared, 
valueOf method is called,if absemt toString is called.
 */
