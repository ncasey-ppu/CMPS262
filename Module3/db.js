const Pool = require("pg").Pool;
require('dotenv').config();
const dbPassword = process.env.DB_PASSWORD;

const pool = new Pool({
    //local
    /*
    user: "nikki",
    host: "localhost",
    database: "classicMovies",
    port: "5433", */

    //Production
    user: "ncasey",
    host: "dpg-cvf0i05umphs73epqre0-a",
    database: "classicmovies",
    password: dbPassword,
    port: "5432",
});

module.exports = pool;