// Complexity in for loop - Keeping tracks of counter variable in case
// nested loops.
// for_of loop:- was introduced.
//  for_of...loop is able to iterate over any iterable object.

/*Iteration protocol - They are two
Iterable protocol:- An object is an iterable when it implements an API that 
answer two question
1.) Is there any 
Have a next method that return object have two properties {done:boolea}
Iterator protocol


An object is iterator if it have method [Symbol.iterator] that take no argument but return {next:, value}

Clean up:- [Symbol.iterator] may optionally return a method called return, which is invoked
if iteration is stoppred premaurely, here resource clean up can be placed.
*/

class Sequence {
  constructor(start = 0, end = Infinity, interval = 1) {
    this.start = start;
    this.end = end;
    this.interval = interval;
  }
  [Symbol.iterator]() {
    let counter = 0;
    let nextIndex = this.start;
    return {
      next: () => {
        if (nextIndex <= this.end) {
          let result = { value: nextIndex, done: false };
          nextIndex += this.interval;
          counter++;
          return result;
        }
        return { value: counter, done: true };
      },
      return: () => {
        console.log('cleaning up...');
        return { value: undefined, done: true };
      },
    };
  }
}

let evenNumbers = new Sequence(2, 10, 2);

let iterator = evenNumbers[Symbol.iterator]();
let result = iterator.next();

while (!result.done) {
  console.log(result.value);
  result = iterator.next();
}

for (const num of evenNumbers) {
  console.log(num);
}

// Clean up
for (const num of evenNumbers) {
  if (num > 7) {
    break;
  }
  console.log(num);
}

// Problem - As we have to explicitly define the next function and maintain the state.
//

class Sequence1 {
  constructor(start = 0, end = Infinity, interval = 1) {
    this.start = start;
    this.end = end;
    this.interval = interval;
  }
  *[Symbol.iterator]() {
    for (let index = this.start; index <= this.end; index += this.interval) {
      yield index;
    }
  }
}

const s = new Sequence1(2, 10, 5);
for (let num of s) {
  console.log(num);
}
