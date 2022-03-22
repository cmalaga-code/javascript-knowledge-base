// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties
// creates new or modifies properties in an object
// modifies the object inplace
// returns the object with the new or modified properties

const exampleObject = {};

Object.defineProperties(exampleObject, {
    newProperty: {value: 22}
});

console.log(exampleObject);