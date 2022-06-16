// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
// similar to defineProperties.js
// create a new property inplace on a object or modify and existing property on a object inplace & return the object

const example = {name: "John Doe"};

Object.defineProperty(example, "newProperty", {
    value: "Example",
    writable: false
});

console.log(example);

