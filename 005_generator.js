/*
Function in JS are execcuted on bases of run-to-completion model, means they can not be paused midway.
Generator give this feature to stop the funciton in midway, then resume the execution form where it was stopped.

Yield - Allow to pause and resume a generator function.

*/

function* gen() {
  console.log('first');
  yield 1;
  console.log('second');
  yield 2;
  console.log('three');
  yield 3;
}

var g = gen();
// g is Genearyor object.

console.log(g.next()); // return object {done:false. value:1}
console.log(g.next());
console.log(g.next());
g = gen();
for (const x of g) {
  console.log(x);
}
console.clear();
///////////////////////////////////////////////////////////////// Caveat
function* generate() {
  let result = yield;
  console.log(`result is ${result}`);
}

g = generate();
console.log(g.next());

console.log(g.next(1000));
console.log(g.next());

function* yieldArrayElements() {
  yield* [20, 30, 40];
}

let a = yieldArrayElements();

console.log(a.next()); // { value: 1, done: false }
console.log(a.next()); // { value: 20, done: false }
console.log(a.next()); // { value: 30, done: false }
console.log(a.next()); // { value: 40, done: false }
