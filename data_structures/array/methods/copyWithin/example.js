// copies array elements to another position 
// overwrites existing values
// array.copyWithin(target, start, end)
// returns value and does not modify inplace
// https://www.w3schools.com/jsref/jsref_copywithin.asp

const arrayExample = [1,2,3,4];

console.log(arrayExample.copyWithin(3,0,1));