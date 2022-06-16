// performs a test on each array element using a function
// if one element is true in the test it will return true
// else if none are true it will return false
// array.some(function(value, index, arr), this)
// https://www.w3schools.com/jsref/jsref_some.asp

const age = [10, 13, 14, 50];

let olderThan40 = age.some(function (element, index) {
    return element > 40;
});

console.log(olderThan40);