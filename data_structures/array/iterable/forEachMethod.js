// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// executes a function per element in iterable object

const amountExample = [440.23, 22.33, 99.44];

const exampleObject = {
    amountProperty: []
}

amountExample.forEach(element => exampleObject.amountProperty.push("$" + element.toString()));

console.log(exampleObject.amountProperty);

