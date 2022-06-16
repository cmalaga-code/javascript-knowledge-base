// returns a new array
// calls a function for every array element
// array.map(function(currentValue, index, arr), thisValue)
// https://www.w3schools.com/jsref/jsref_map.asp

const username = ["John", "Annie", "Robert"];

username.map((element, index) => console.log("Element:", element + "!", "Index:", index));