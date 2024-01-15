// It is a funciton which preserve the outer scope in its inner scope.

let x = 1;

// Following wold print 2.
// setTimeout(() => {
//   console.log(x);
// }, 3000);

//Solution is this, as it create a new
// activation  record on stack and then call it.
function fn(y) {
  setTimeout(() => {
    console.log(y);
  }, 3000);
}

fn(x);

x++;

// IIFE - preserve the scope, by declaring and invoking the function
for (var a = 0; a < 5; a++) {
  ((x) => {
    setTimeout(() => {
      console.log(x);
    }, x * 1000);
  })(a);
}

// In each iteration create a new lexical scope,
// but chain previous lexical scope to new one
// to preserve previous value of counter a.
for (let a = 0; a < 5; a++) {
  setTimeout(() => {
    console.log(a);
  }, a * 1000);
}
