const exampleArray = [1, 2, 3, 4, 5, 6];
// cannot break out of a forEach loop
// callback
// can call forEach on a map object
exampleArray.forEach(function (element, index, array) {
  console.log(`The element is ${element}.`);
  console.log(`The index is ${index}.`);
  console.log(`The array is ${array}.`);
});

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
  console.log(`${map}`);
});

const currenciesSet = new Set(["USD", "EUR", "GBP"]);

currenciesSet.forEach(function (value, _, set) {
  console.log(`${_}: ${value}`);
  console.log(`${set}`);
});
