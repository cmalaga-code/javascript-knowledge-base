// apply method
// does the same thing that the call method does but you have to use an array for the arguments

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

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const flightData = [584, "Gerogia Cooper"];
book.apply(eurowings, flightData);
console.log(eurowings.bookings);
