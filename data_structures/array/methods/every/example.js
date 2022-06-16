// returns true if all values in a array satisfys a condition from a function
// https://www.w3schools.com/jsref/jsref_every.asp
// array.every(function(currentValue, index, arr), thisValue)
// method returns true if the function returns true for all elements.
// method returns false if the function returns false for one element.
// does not make changes inplace
// dont use on empty array

const money = [3000, 2003];

const userCheck = user.every((element, index) => {
    if (element > 500){
        return true
    }
});

console.log(userCheck);