// example 1
(function (){
    console.log("Hello World!")
}
)()
// example 2
(() => {
    console.log("Hello World!")
}
)()
// example 3
(async () => {
    const url = "https://jsonplaceholder.typicode.com/todos/1"
    const promise = await fetch(url)
    const response = await promise.json()
    console.log(response)
}
)()