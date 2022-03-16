// make your own promise

const promise = new Promise((resolve, reject) => {
    if (true){
        resolve('Stuff Worked');
    } else {
        reject('Error, it broke');
    }
});


// catch produces own error | will check everything before
promise
    .then(result => {
        return result + "!"
    })
    .then(result2 => {
        console.log(result2)
    })
    .catch(() => console.log("Error!"))