// if certain property does not exist than undefined is returned immediatly
// example
// undefined will be returned if property does not exist.
// you can have multiple optional chaining
// test if the value on the left exist
const cars = {
    amount: { name: "yes"}, 
    year: "2020 - 2022",
    exampleMethod: function(x, y) { return x + y; }
};

// if (cars.amount?.name) console.log(`Hey the property exist! ${cars.amount.name}`);
// get an error below
console.log(cars?.age?.name);
// get undefined below
// console.log(cars.amount?.test);

// nullish coelecing operator with optional chaining
console.log(cars.exampleMethod?.(2, 11) ?? "Method does not exist");