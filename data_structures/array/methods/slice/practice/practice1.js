// does not mutate the org array but creates another array in memory from the org.
// end argument - the begining is the len of the new array

let arr = ["a", "b", "c", "d", "e"];

console.log(arr.slice(2, 4));
console.log(arr.slice(1, -2));
console.log(arr.slice(0, -3));
// create a shallow copy of an array with slice()
let newArray = arr.slice();
