// returns the selected items in an array as a new array
// does not change the org array
// array.slice(start, end)
// https://www.w3schools.com/jsref/jsref_slice_array.asp

const people = ["John", "Hannah", "Han"];

let newArray = people.slice(0, 2);

console.log(newArray);