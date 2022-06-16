// example 1
function car (model, make, year){
    this.model = model;
    this.make = make;
    this.year = year;
}

let myCar = new car("Escape", "Ford", "2014");

console.log(myCar);