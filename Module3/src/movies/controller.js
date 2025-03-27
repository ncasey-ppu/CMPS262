const pool = require('../../db');
const queries = require('./queries');

//Get All Data
const getMovies = (req, res) => {
    pool.query(queries.getMovies, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

//Get Data by ID
const getMoviesById = (req, res) => {
    const movieid =parseInt(req.params.movieId);
    if(isNaN(movieid)) {
        return res.status(400).json({error: "Invalid value"})
    } 
    console.log("Received movieId");
    pool.query(queries.getMoviesById, [movieid], (error, results) => {
        if(error){
            console.error("Database error", error);
            return res.status(500).json({error: "Movie not found"});
        }
        res.status(200).json(results.rows);
    })
}
//Add New Data by Param
//Modify Data by Param

module.exports = {
    getMovies,
    getMoviesById,
};