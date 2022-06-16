// returns a new array with every element in the array that satisfies a test/condition
// does not perform changes inplace
// https://www.w3schools.com/jsref/jsref_filter.asp
// array.filter(function(currentValue, index, arr), thisValue)

const age = [23, 45, 99, 22, 10];
const newArray = age.filter((element, index) => {return element >= 18});

console.log(newArray);



