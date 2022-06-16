// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
// copies all enumerable properties from one or more objects and produces an object with all combined

const example1 = {name: "John Adams", id: 1234};
const example2 = {state: "FL", city: "Miami"};

const merge = Object.assign(example1, example2);
console.log(merge);