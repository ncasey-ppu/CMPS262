const getMovies = "SELECT * FROM classics";
const getMoviesById = "SELECT* FROM classics where movieId = $1";

module.exports = {
    getMovies,
    getMoviesById,
};