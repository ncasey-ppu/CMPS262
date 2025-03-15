const express = require('express');
const app = express();

const port = 3001;

//Homepage
app.get('/', (req, res) => {
    res.sendFile("./homepage.html", { root: __dirname });
});

//About page
app.get('/about', (req, res) => {
    res.send('<h1>About Us</h1><p>This is a simple Express application for learning purposes.</p>');
});

//Contact page
app.get('/contact', (req, res) => {
    res.send(`
        <h1>Contact Us</h1>
        <form method="GET" action="/submit">
            <!-- Beginning of form -->
            <label>Name:<input type="text" id="fullname" name="fullname" size="35" maxlength="50"></label>
            <br><br>
            <label>Email:<input type="text" id="email" name="email" size="50" maxlength="50"></label>
            <br><br>
            <label>Other form of contact:<input type="text" id="other" name="other" size="40" maxlength="50"></label>
            <br><br>
            <input type="submit" value="Submit">
        </form>
    `);
});

//Submit
app.get('/submit', (req, res) => {
    const { fullname, email, other } = req.query;
    res.send(`
        <h1>Thank you, ${fullname}!</h1>
        <p>We have received your message:</p>
        <ul>
            <li>Email: ${email}</li>
            <li>Other contact: ${other}</li>
        </ul>
        `);
});

//Start our service
app.listen(port, () => {
    console.log(`Server is running at localhost:${port}`);
});