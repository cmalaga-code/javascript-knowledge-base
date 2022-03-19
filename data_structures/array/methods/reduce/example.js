// returns the functions accumulated result
// does not change the org array
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

const amount = [200.00, 33.40, 50.23];

let arraySum = amount.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
let arrayDifference = amount.reduce((previousValue, currentValue) => previousValue - currentValue, 0)

console.log("array sum:", arraySum, "array difference:", arrayDifference);
