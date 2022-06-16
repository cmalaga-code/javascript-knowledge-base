// create one booking function for each using bind

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

const bookEW = book.bind(eurowings);
bookEW(23, "Steven Williams");

const bookLU = book.bind(lufthansa);
bookLU(23, "Steven Williams");
