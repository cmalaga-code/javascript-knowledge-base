//  adds or removes array elements inplace
// array.splice(index, howmany, item1, ....., itemX)
// https://www.w3schools.com/jsref/jsref_splice.asp


// example 1 add two elements at index 2
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(2, 0, "Lemon", "Kiwi");

// example 2 remove two elements at index 2
const fruits2 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.splice(2, 2);