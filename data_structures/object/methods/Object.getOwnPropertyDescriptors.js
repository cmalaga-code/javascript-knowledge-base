// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors
// returns all property descriptors of a object

const objectExample = {
    property1: 33,
    property2: 34,
    property3: 22
};

const describe = Object.getOwnPropertyDescriptors(objectExample);

console.log(describe.property2.writable);

console.log(describe.property2.value);
