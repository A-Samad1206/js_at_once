console.log(typeof NaN); // number

console.log(NaN == NaN); // false
/** Interperation of this output
 * NaN means non-deterministic non-numeric value,
 * so what to compare to evalue to truthy, that why give falsy.
 */

console.log(null === null);
// true ,interperate it like,
// null is pointing to specific portion onto
// memory remain constant. Like in cpp, nullptr point.

const obj = {};
const objF = obj;

console.log(obj === objF);
