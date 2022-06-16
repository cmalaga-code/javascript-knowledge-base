// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
// returns a new object using an existing object as prototype

honda = Object.create({})

honda.doors = 2;
honda.weight = 1020;

console.log(honda);