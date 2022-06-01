// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
// iterates through an iterable object using a condition & loop counter
// if the condition is valid it will continue

const exampleArray = [1, 2, 3, 5];

for (let i = 0; i < exampleArray.length; i ++){
    console.log(`counter: ${i}, array length: ${exampleArray.length}`);
}