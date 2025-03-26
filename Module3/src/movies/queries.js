const getMovies = "SELECT * FROM classics";
const getMoviesById = "SELECT* FROM public.classics where movieId = 4";

module.exports = {
    getMovies,
    getMoviesById,
};