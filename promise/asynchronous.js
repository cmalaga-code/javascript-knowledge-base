
// miliseconds

const promise = new Promise((resolve, reject) =>{
    setTimeout(resolve, 1000, 'Hiii')
});

const promise2 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 2000, 'POOOKIE')
});

const promise3 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 3000, 'IS IT ME YOU ARE LOOKING FOR')
});

// promise.all waits for all of the promises to complete
Promise.all([promise, promise2, promise3])
    .then(values => {
        console.log(values);
});
