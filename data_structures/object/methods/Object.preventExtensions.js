// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions
// prevents new properties from being added to an object
// returns the non extensible object

const objectExample = {
    one: 1
};

console.log(Object.preventExtensions(objectExample));
