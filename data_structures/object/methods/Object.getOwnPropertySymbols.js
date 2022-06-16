// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols
// returns an array of all the symbol properties in a object

const objectExample = {};
let symboleOne = Symbol();
objectExample[symboleOne] = "1";

console.log(Object.getOwnPropertySymbols(objectExample));