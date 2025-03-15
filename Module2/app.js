const express = require('express');
const app = express();

const port = 3001;

//Homepage
app.get('/', (req, res) => {
    res.sendFile("./homepage.html");
});

//About page
app.get('/about', (req, res) => {
    res.send('<h1>About Us</h1><p>This is a simple Express application for learning purposes.</p>');
});

//Contact page
app.get('/contact', (req, res) => {
    res.sendFile("./contact.html", { root: __dirname});
});

//Start our service
app.listen(port, () => {
    console.log(`Server is running at localhost:${port}`);
});