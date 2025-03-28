const getMovies = "SELECT * FROM classics";
const getMoviesById = "SELECT * FROM public.classics where id = $1";
const addNewMovie = "INSERT INTO classics(title,year,time,actor,actress) VALUES($1,$2,$3,$4,$5)";

module.exports = {
    getMovies,
    getMoviesById,
    addNewMovie,
};