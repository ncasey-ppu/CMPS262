const express = require('express');
const app = express();

const port = 3001;

//Homepage
app.get('/', (req, res) => {
    res.send('<h1>Welcome to My Express App!</h1>');
});

//About page
app.get('/about', (req, res) => {
    res.send('<h1>About Us</h1><p>This is a simple Express application for learning purposes.</p>');
});

//Contact page
app.get('/contact', (req, res) => {
    res.send('
        <h1>Contact Us</h1>
        <form action="send-email.php" method="post">
            Name:
            <br>
            <input type="text" name="full name" size="35" maxlength="40">
            <br><br>
            Email:
            <br>
            <input type="text" name="email" size="40" maxlength="50">
            <br><br>
            Other form of contact:
            <br>
            <input type="text" name="other" size="30" maxlength="50">
            <br><br>
            <input type="submit" value="Submit">
        </form>');
});

//Start our service
app.listen(port, () => {
    console.log(`Server is running at localhost:${port}`);
});