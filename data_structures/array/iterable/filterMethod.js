// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// returns a new array with the element values that satisfy a test
// uses a function

const amountExample = [2233.44, 44.23, 99.00];

const newArray = amountExample.filter(element => element >= 2233.44);
// returns only the first element

console.log(newArray);
