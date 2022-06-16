// method concat() joins two or more arrays
// returns a new array & does not modify the original
// https://www.w3schools.com/jsref/jsref_concat_array.asp

const arrayOne = [1, 2, 3, 4];
const arrayTwo = [5, 6, 7, 8];
const arrayThree = [9, 10, 11, 12];

const concatArray = arrayOne.concat(arrayTwo,arrayThree);

console.log(concatArray);