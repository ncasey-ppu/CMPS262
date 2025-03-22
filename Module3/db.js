const Pool = require("pg").Pool;

const pool = new Pool({
    //user: "nikki",
    user: "ncasey",
    //host: "localhost",
    host: "dpg-cvf0i05umphs73epqre0-a",
    //database: "classicMovies",
    database: "classicmovies",
    password: "B2uXGFQOYFhkmrCwlWtHSPbrCbT8bx2s",
    //port: "5433",
    port: "5432",
});

module.exports = pool;