// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
// returns an object describing the config of an object

const averageScore = {baseball: 2.3}

const description = Object.getOwnPropertyDescriptor(averageScore, "baseball")

console.log(description.configurable);
console.log(description.value);
