// fetch returns a promise

const url = [
    "https://gorest.co.in/public/v2/users",
    "https://gorest.co.in/public/v2/todos"
];


Promise.all(url.map((url) => {
    return fetch(url).then(response => response.json());
})).then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
}).catch(() => console.log('error'));