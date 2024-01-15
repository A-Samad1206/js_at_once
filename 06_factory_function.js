// Function create and return object.
// Problem is the redundancy and inefficient usage of memory
// For example if the object have method, how many object
// created by factory function that many methods copies would
// would cloned in the memory.
// Solution 1 - Moving all the method into object, and assigned those methods
// manually to the factory
// function returned object indiviually, that is cumbersome task and not scalabale.
// solution is Object.create - Allow to inherit properties from other obejct

let person1 = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  },
};

console.log(person1.getFullName());

let person2 = {
  firstName: 'Jane',
  lastName: 'Doe',
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  },
};

console.log(person2.getFullName());

// The problem is that the more objects you want to create,
// the more duplicate code you have.

// Solution - Define a funciton which create a object

function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    getFullName() {
      return firstName + ' ' + lastName;
    },
  };
}

let person1_FF = createPerson('John', 'Doe');
let person2__FF = createPerson('Jane', 'Doe');

console.log(person1_FF.getFullName());
console.log(person2__FF.getFullName());

// Move getFullName to another object
var personActions = {
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  },
};

person1_FF.getFullName = personActions.getFullName;
person2_FF.getFullName = personActions.getFullName;

console.log(person1_FF.getFullName());
console.log(person2_FF.getFullName());

// ======================= More efficient
var personActions = {
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  },
};

function createPerson(firstName, lastName) {
  let person = Object.create(personActions);
  person.firstName = firstName;
  person.lastName = lastName;
  return person;
}
