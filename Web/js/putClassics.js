const API_URL2 = "https://classicmovies.onrender.com/api/v1/movies"

//fetch movie data and populate dropdown
async function fetchMovies() { 
    try {
        const response = await fetch(API_URL2);
        const data2 = await response.json();

        const movieTitle = data2.map(classics => classics.title);
        console.log(movieTitle);

        //call updateUI to populate dropdown
        updateUI(movieTitle);
    } catch (error) {
        console.error('Error fetching data', error);
    }
}

fetchMovies();

//populate dropdown with movie titles
function updateUI(titles, movies) {
    //checking that it pulls titles
    console.log("Movie Titles inside another function:", titles);
    
    const dropdown = document.getElementById('movieDropdown');
    
    //clear existing options before adding new ones
    dropdown.innerHTML = '<option value="">Select a Movie</option>';
  
    //loop through titles array and create an option element for each movie
    titles.forEach(title => {
      const option = document.createElement('option');
      option.value = title; 
      option.textContent = title; 
      
      //append the option to the dropdown
      dropdown.appendChild(option);
    });

    dropdown.dataset.movies = JSON.stringify(movies);
  }

//form submission
const formEl2 = document.querySelector('.form');

formEl2.addEventListener('submit', event => {
    event.preventDefault();
    const formData2 = new FormData(formEl2);
    const data3 = Object.fromEntries(formData2);

    //get movie selected from dropdown
    const dropdown = document.getElementById('movieDropdown');
    const selectedTitle = dropdown.value;

    if (!selectedTitle) {
        $.toaster({ priority: 'danger', title: 'Error', message: 'Please select a movie to update'});
        return;
    }

    if (!dropdown.dataset.movies) {
        $.toaster({ priority: 'danger', title: 'Error', message: 'Movie data not loaded'});
        return;
    }

    try {
        const movies = JSON.parse(dropdown.dataset.movies);
        const selectedMovie = movies.find(movie => movie.title === selectedTitle);

        if (!selectedMovie) {
            $.toaster({ priority: 'danger', title: 'Error', message: 'Selected movie not found'});
        }
    } catch (e) {
        console.error('Error parsing movie data:', e);
        $.toaster({ priority: 'danger', title: 'Error', message: 'Invalide movie data format'});
    }

    //add movie's id to data object for put request
    data3.id = selectedMovie.id;

    console.log('Data to be sent to server: ', data3);

    //validate form data
    if (data3.title == "" || data3.year == "" || data3.time == ""){
        $.toaster({priority : 'danger', title : 'Error', message : 'Incomplete data'});
    }
    else {
        fetch(`https://classicmovies.onrender.com/api/v1/movies/${data3.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data3)
        }).then(res => {
            if (!res.ok) {
                throw new Error('Failed to update movie');
            }
            return res.json();
        })
          .then(updatedMovie => {
            console.log(updatedMovie);
            $.toaster({priority : 'success', title : 'Movie Change', message : 'Movie updated in library'});
        })
          .catch(error => {
            console.log('Error updating movie: ', error);
            $.toaster({ priority: 'danger', title: 'Error', message: 'Failed to update movie' });
          });
    }
});