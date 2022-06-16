// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible
// determines if a new value can be added to an object
// returns true if you can add a new value to an object

const example = {
    exampleProp: 2
};

console.log(Object.isExtensible(example));