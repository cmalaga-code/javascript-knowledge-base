'use strict'
// allow you to expand on the array
// EXPAND ARRAY LITERALS --
// PASS ARGUMENTS INTO FUNCTIONS
// creates a completely new array
const arr = [7, 8, 9];
const newArray = [1, 2, ...arr];
console.log(newArray);

// FUNCTION
console.log(...arr);

// destructuring vs spread operator (spread operator takes all of the elements from array & does not create new variables)
// creates a shallow copy of an array
// example of a shallow copy
const shallowCopy = [...arr];
// join two arrays or more
const joinArray = [...shallowCopy, ...arr];
console.log(joinArray);

// Note that the spread operator works on iterables
// 1. Arrays 2. Strings 3. Maps 4. Sets 

// strings
const playerName = "John";

console.log([...playerName]);

// Arrays

const arrayExample22 = [1, 2, 3, 4, 5, 6, 7];
console.log(...arrayExample22);

// Maps

const mapExample = new Map();
mapExample.set('keyExample0', 'Value Example')
mapExample.set('keyExample1', 'Value Example')
mapExample.set('keyExample2', 'Value Example')
mapExample.set('keyExample3', 'Value Example')

console.log(...mapExample);

// sets

const setExample = new Set();
setExample.add(1);
setExample.add(2);
setExample.add(3);
setExample.add(4);

console.log(...setExample);


// since ES2018 the spread operator works on objects
// You can create shallow copies as well
const oldObject = {age: 22, name: "Johnny Mikes"};
const oldShallowCopy = {...oldObject};
const newObject = {...oldObject, newProperty: "Nice!"}

console.log(newObject);
console.log("old copy", oldShallowCopy);