// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// test if atleast one element in a array passes a test
// if pass returns true & if fail returns false

const arrayExample = [4, 2, 14, 2];

const oddNumberTest = arrayExample.some(element => element % 2 !== 0);

console.log(oddNumberTest);