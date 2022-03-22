// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// returns a new array with the results of running a function on each element

const arrayExample = [33.44, 55.55, 1220.44];

console.log(arrayExample.map(element => {
    return element**2;
}));