/*

In sync generator, next reposne is predicteable.
But in case async operator like I/O ops, reading file streams.
async geneator is same as generator  except that its next return a promise.
To iterate over the async iterator we use for await loop.
*/

async function* asyncSequence(start, end) {
  for (let i = start; i <= end; i++) {
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(i);
      }, 1000);
    });
  }
}
(async () => {
  let seq = asyncSequence(1, 5);

  for await (let num of seq) {
    console.log(num);
  }
})();

// Async iterator - Accessing file stream
class AsyncSequence {
  constructor(start = 0, end = Infinity, interval = 1) {
    this.start = start;
    this.end = end;
    this.interval = interval;
  }
  [Symbol.asyncIterator]() {
    let counter = 0;
    let nextIndex = this.start;
    return {
      next: async () => {
        if (nextIndex <= this.end) {
          let result = {
            value: nextIndex,
            done: false,
          };
          nextIndex += this.interval;
          counter++;

          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(result);
            }, 1000);
          });
        }
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({
              value: counter,
              done: true,
            });
          }, 1000);
        });
      },
    };
  }
}
