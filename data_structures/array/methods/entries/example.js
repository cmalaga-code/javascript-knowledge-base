// https://www.w3schools.com/jsref/jsref_entries.asp
// does not update the array inplace
// returns key value pairs
// array.entries()

const exampleArray = ["name", "age", "number"];

const arrayIterator = exampleArray.entries();

for (let i of arrayIterator){
    console.log(i);
}

