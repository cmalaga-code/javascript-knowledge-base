// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string

const questionOne = new Promise((resolve, reject) => {
    if (true){
        return setTimeout(resolve, 4000, "success")
    }
    else {
        return setTimeout(reject, 4000, "fail")
    }
})

// #2) Run the above promise and make it console.log "success"
questionOne.then(response  => {
    console.log(response)
}).catch(() => console.log("error"))

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
const questionThree = Promise.resolve( setTimeout(() => {
    console.log("success");
    }, 4000)
);

// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed').catch(() => console.log("Ooops something went wrong"))

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'https://swapi.dev/api/people/1',
  'https://swapi.dev/api/people/2',
  'https://swapi.dev/api/people/3',
  'https://swapi.dev/api/people/4'
];

Promise.all(urls.map(urls => {
    fetch(urls).then(response => response.json())
})).then(results => {
    console.log('1', results[0])
    console.log('2', results[1])
    console.log('3', results[2])
    console.log('4', results[3])
}).catch((err) => { 
    console.log("fail",err)
});

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?
