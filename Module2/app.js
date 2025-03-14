const express = require('express');
const app = express();

const port = 3001;

//Define a route
app.get('/', (req, res) => {
    res.send('Welcome to My Express App!');
});

app.get('/about', (req, res) => {
    res.send('This is a simple Express application for learning purposes.');
});

//Start our service
app.listen(port, () => {
    console.log(`Server is running at localhost:${port}`);
});