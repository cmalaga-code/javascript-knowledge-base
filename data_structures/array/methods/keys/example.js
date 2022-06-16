// does not change the org array
// returns an array iterator object with the keys of the array
// array.keys()
// https://www.w3schools.com/jsref/jsref_keys.asp

const cars = ["Ford", "Chevy", "GMC", "Lexus", "Hyundai", "Tesla"];

const arrayIteratorkeys = cars.keys();

for (i of arrayIteratorkeys){
    console.log(i);
}
