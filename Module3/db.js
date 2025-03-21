const Pool = require("pg").Pool;

const pool = new Pool({
    user: "nikki",
    host: "actuallocalhost",
    database: "classics",
    port: "5433",
});

module.exports = pool;