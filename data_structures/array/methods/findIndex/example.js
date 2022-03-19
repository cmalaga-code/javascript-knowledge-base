// similar to find but instead it returns the index of the first element that passes test
// return new array and does not make changes inplace
// https://www.w3schools.com/jsref/jsref_findindex.asp
// array.findIndex(function(currentValue, index, arr), thisValue)

const age = [3, 22, 55, 10];

console.log(age.findIndex((element) => {return element === 55}));
