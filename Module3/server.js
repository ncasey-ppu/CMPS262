const express = require("express");
const moviesRoutes = require("./src/movies/routes");

const app = express();
const port = 8003;

app.use(express.json());

const cors = require("cors");
app.use(cors({
    origin: '*'
}));

app.get("/", (req, res) => {
    res.send("Hello Point Park University");
});

//API Route
app.use("/api/v1/movies", moviesRoutes);

app.listen(port, () => console.log('running on $(port)'));