// looks like the spread operator
// does the opposite of the spread operator
// used to collect multiple elements & put them into an array
// spread vs rest (spread: unpack an array, rest: pack an array)
// spread operator is used on the right hand side of the assignment operator =
// rest pattern / parameters
const [a , ...b] = [1, 2, 3, 4, 5, 6];
// spread with rest and destructuring (*rest operator must be the last element & can only be one rest)
const [firstElement, ...restElements] = [a, ...b];
console.log(restElements);
console.log(b);
function restParameterExample(...x) {
    return x;
}
console.log(restParameterExample([1, 2, 3, 4, 5]));

// object with rest
const { z, ...y } = b;
console.log(y);

// use a function to add all of the int with a rest parameter *can accept any number of arguments
// const add = function(...num) {
//     let sum = 0;
//     for (let i = 0; i < num.length; i ++) sum += num[i];
//     return sum;
// }
// console.log(add(100, 100, 100, 100 , 100));
// use spread and rest together
const add = function(...num) { // rest parameter
    let sum = 0;
    for (let i = 0; i < num.length; i ++) sum += num[i];
    return sum;
}
const numbers = [100, 100, 100, 100 , 100]
console.log(add(...numbers)); // spread