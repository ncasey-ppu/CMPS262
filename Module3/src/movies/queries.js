const getMovies = "SELECT * FROM classics";
const getMoviesById = "SELECT * FROM public.classics where id = $1";

module.exports = {
    getMovies,
    getMoviesById,
};