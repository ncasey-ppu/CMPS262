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
    const id =parseInt(req.params.id, 10);
    if(isNaN(id)) {
        return res.status(400).json({error: "Invalid value"})
    } 
    console.log("Received id:", id);
    pool.query(queries.getMoviesById, [id], (error, results) => {
        if(error){
            console.error("Database error:", error);
            return res.status(500).json({error: "Movie not found"});
        }
        res.status(200).json(results.rows);
    })
}
//Add New Data by Param
const addNewMovie = (req, res) => {
    const {title,year,time,actor,actress} = req.body;
    pool.query(queries.addNewMovie, [title,year,time,actor,actress], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
        console.log('New movie added');
    });
};

//Modify Data by Param

module.exports = {
    getMovies,
    getMoviesById,
    addNewMovie,
};