// server
const express = require('express');

const app = express();

// middleware recieves request & can modify & then pass it on with next()
app.use(express.urlencoded({extended: false}));
app.use(express.json());
// app.use((req, res, next) => {
//     console.log("<h1>helloooo</h1>");
//     next();
// });

app.get('/', (req, res) => {
    // automatically does json stringify
    res.send("getting root");
});

app.get('/profile', (req, res) => {
    res.send("getting profile");
});

app.post('/profile', (req, res) => {
    // automatically does json stringify
    console.log(req.body)
    res.send("success");
});
app.listen(3001);