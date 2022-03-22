// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
// loops & executes a block of code if condition is true

const stateArray = ["Florida", "Georgia", "California"];

let stateArrayLength = stateArray.length;
let i = 0;
while (stateArrayLength > 0){
    console.log(stateArray[i])
    stateArrayLength --
    i ++
}