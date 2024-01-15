/*
Bag is a type of DS, in which we can store the data, access that data but can not be removed.
*/

class Bag {
  constructor() {
    this.elements = [];
  }
  isEmpty() {
    return this.elements.length === 0;
  }
  add(element) {
    this.elements.push(element);
  }
  *[Symbol.iterator]() {
    for (let element of this.elements) {
      yield element;
    }
  }
}

let bag = new Bag();

bag.add(1);
bag.add(2);
bag.add(3);

for (let e of bag) {
  console.log(e);
}
