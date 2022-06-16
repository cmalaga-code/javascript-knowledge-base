// can use this to iterate through an array
// meant only to give you the current element
const grades = [
    80,
    87,
    99,
    20,
    60
];

// for (let element of grades) {
//     console.log(element);
// }

// how do you get the element index ?
for (let [index, element] of grades.entries()) console.log(index);

console.log(grades.entries());