const Pool = require("pg").Pool;

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
    password: "B2uXGFQOYFhkmrCwlWtHSPbrCbT8bx2s",
    port: "5432",
});

module.exports = pool;