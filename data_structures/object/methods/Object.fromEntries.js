// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
// transforms a list of key, value pairs into a object property & value
const entries = new Map([
    ['foo', 'bar'],
    ['baz', 42]
]);

const obj = Object.fromEntries(entries);

console.log(obj);