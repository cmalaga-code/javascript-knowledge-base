const resturant = new Object();

resturant.numGuest = 0;

const guests = resturant.numGuest || 10;
// console.log(guests);

// nullish coalecing operator fixes our issue with logical operator ||
const guest2 = resturant.numGuest ?? 10;

console.log(guest2);

// makes 0 or '' truthy values
// only nullish values will short circuit