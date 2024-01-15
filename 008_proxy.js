/*
Proxy are object that wrap another object(target) and intercept fundamental ops on target object.
It include poperty lookup, assignent etc.
*/

/*

To create a new proxy object, you use the following syntax:

let proxy = new Proxy(target, handler);
Code language: JavaScript (javascript)
In this syntax:

target – is an object to wrap.
handler – is an object that contains methods to control the behaviors of the target. 
The methods inside the handler object are called traps.

get trap - fired when accessing property of target via proxy object.


*/
const user = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
};
const handler = {
  get(target, property) {
    console.log(target);
    console.log(`Property ${property} has been read.`);
    return target[property];
  },
};

const proxyUser = new Proxy(user, handler);

console.log(proxyUser.firstName);
