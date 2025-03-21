const pool = require('../../db');
const queries = require('./queries');

//Get All Data
const getMovies = (req, res) => {
    pool.query(queries.getMovies, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

//Get Data by Param
//Add New Data by Param
//Modify Data by Param

module.exports = {
    getMovies,
};