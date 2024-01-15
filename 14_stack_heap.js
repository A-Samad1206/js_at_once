const a = 10;
const ch = 'ac';

const obj = {
  a: 10,
  b: 20,
};
const refToObj = obj;
/* 
JS allcoates meemory for three variable in stack namely a, ch and obj.
Create memory for object on heap, and link [obj] variable on stack to it.
And would allocate more space to the object as needed at runtime.
*/

/*
Unlike a reference value, a primitive value cannot have properties.
This means that you cannot add a property to a primitive value.
*/

/*
    Assigning obj to refToObj is like symbolic link.
    obj and refToObj pointing to same obj.
 */
