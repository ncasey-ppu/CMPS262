const Pool = require("pg").Pool;

const pool = new Pool({
    user: "nikki",
    host: "localhost",
    database: "classics",
    port: "5433",
});

module.exports = pool;