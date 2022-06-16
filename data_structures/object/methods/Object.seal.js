// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal
// seals an object so you cannot add properties & mark as non-config
// returns object being sealed

const objectExample = {
    one: 1,
    two: 2
};

console.log(Object.seal(objectExample));

