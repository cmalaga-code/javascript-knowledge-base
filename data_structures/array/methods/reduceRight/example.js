// executes a reducer function for each array element
// right to left in array
// returns accumulated result
// array.reduceRight(function(total, currentValue, currentIndex, arr), initialValue)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight

const amount = [200.00, 33.40, 50.23];

let arraySum = amount.reduceRight((total, currentValue, i) => {
    // show it goes from right to left
    console.log(i)
    total + currentValue
}, 0);

let arrayDifference = amount.reduceRight((total, currentValue, i) => {
    // show it goes from right to left
    console.log(i)
    total - currentValue
}, 0);

console.log("array sum:", arraySum, "array difference:", arrayDifference);