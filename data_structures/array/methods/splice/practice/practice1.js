const order = ["Wings", "Burger", "Fries"];

// returns the removed item & adds a element
console.log(order.splice(0, 1, "Wings-2.0"));
// print the order array with new element (mutated)
console.log(order);
