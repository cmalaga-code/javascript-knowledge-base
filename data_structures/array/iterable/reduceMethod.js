// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// executes a reducer function on each element & the final value is a single value
const array1 = [1, 2, 3, 4];

firstValue = 22
const final = array1.reduce((previousValue, currentValue) => {
    return previousValue + currentValue
}, firstValue);

console.log(final);