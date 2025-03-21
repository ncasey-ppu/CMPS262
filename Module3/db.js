const Pool = require("pg").Pool;

const pool = new Pool({
    user: "nikki",
    host: "localhost",
    database: "classicMovies",
    port: "5433",
});

module.exports = pool;