function* generate() {
  console.log('invoked 1st time');
  yield 1;
  console.log('invoked 2nd time');
  yield 2;
}

const gen = generate();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
