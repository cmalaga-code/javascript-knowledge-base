// returns the first element that passes a test
// return undefined if nothing is found
// is not done inplace
// does not work on empty elements
// array.find(function(currentValue, index, arr),thisValue)
// https://www.w3schools.com/jsref/jsref_find.asp

const age = [3, 4, 5, 6, 4, 5, 7, 4];

const firstFourYearOld = age.find((element) => {return element === 4});

console.log(firstFourYearOld);