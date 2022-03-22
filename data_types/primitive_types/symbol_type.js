// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#symbol_type
// https://developer.mozilla.org/en-US/docs/Glossary/Symbol
// immutable & unique
// produces an anonymous unique value
// can be used as a key of an object property ****

const nameExample = Symbol("this is the description of the unique symbol");

console.log(nameExample.description);
