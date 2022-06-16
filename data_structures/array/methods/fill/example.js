// can fill elements in an array with a value
// fills specific elements in an array with a value
// does this inplace & does not return a copy of the array
// https://www.w3schools.com/jsref/jsref_fill.asp
// array.fill(value, start, end)

const arrayExample = [
    1,
    2,
    3,
];

arrayExample.fill("Replace_Value", 0, 3)
console.log(arrayExample)
