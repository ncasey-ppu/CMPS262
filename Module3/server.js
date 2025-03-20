const express = require("express");
const app = express();
const port = 8003;

app.use(express.json());

const cors = required("cors");
app.use(cors({
    origin: '*'
}));

app.get("/", (req, res) => {
    res.send("Hello Point Park University");
});

app.listen(port, () => console.log('running on ${port}'));