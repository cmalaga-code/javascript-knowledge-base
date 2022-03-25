const http = require('http');

const server = http.createServer((request, response) => {
    console.log("header", request.header)
    console.log("method", request.method)
    console.log("url", response.url)
    const user = {
        name: "John",
        age: 29
    }
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(user));
});

server.listen(3001);