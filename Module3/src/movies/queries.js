const getMovies = "SELECT * FROM classics";
const getMoviesById = "SELECT * FROM public.classics where id = $1";
const addNewMovie = "INSERT INTO classics(title,year,time,actor,actress) VALUES($1,$2,$3,$4,$5)";
const updateMovie = "UPDATE classics SET title = $1, year = $2, time = $3, actor = $4, actress = $5 WHERE id = $6";
const getMovieByTitle = "SELECT DISTINCT title FROM movies";
const getMovieDetails = "SELECT * FROM movies WHERE title = $1";

module.exports = {
    getMovies,
    getMoviesById,
    addNewMovie,
    updateMovie,
    getMovieByTitle,
    getMovieDetails,
};