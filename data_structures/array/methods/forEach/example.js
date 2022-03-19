// does not work on empty elements
// executes a function on each element in array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

const grade = [90, 85, 72, 80];
const outcome = [];

grade.forEach((element, index) => {
    console.log("Element:",element,"index:",index);
    if (element >= 85){
        // add element at the end
        outcome.push({grade:element, pass: true});
    } else {
        outcome.push({grade:element, pass: false});
    }
})

console.log(outcome);