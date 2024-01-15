/*
Object have
- default key like prototype.
- not have any property which show size
- key can be only strng and symbol.

Map - 
- iteration order follow insertion order
- key or value can be of any type.

Method - 
set(key, value)
get(key)
delete(key);

clear();

has(key);

keys();
values();
entries();
forEach(value, key)
*/

/*
Weak Map
- key can only be obejct.

set();
get();
has();
delete()

*/

const s = new Map([
  [1, 'a'],
  [2, 'y'],
  [3, 'z'],
]);
console.log(s);
console.log(s.size);

const c = {};
const ss = new Set([c, c]);

console.log(ss);
