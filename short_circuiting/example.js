// we use logical operators to bring comparison operators together
// short circuiting exits if the condition is met & the rest of the condition wont affect the already evaluated result
// logical operators can use any data types

// truthy value with short circuit below
console.log(3 || "John");
// and operator works different from the or operator
console.log(0 && "John") // and operator short circuits and returns the first falsy value * (when both are truthy then the last truthy is returned)
