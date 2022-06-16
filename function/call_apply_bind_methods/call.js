// call method
// The call method for functions allows you to re-use a method from an object for another object
const lufthansa = {
  airline: "lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

const book = lufthansa.book;

book.call(lufthansa, 239, "Cristian Malaga");
book.call(lufthansa, 239, "Malaga Cristian");

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

book.call(eurowings, 222, "Cristian Malaga");
book.call(eurowings, 222, "Malaga Cristian");

// you can use the spread operator from es6
book.call(eurowings, ...flightData);
