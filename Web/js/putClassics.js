fetch('https://classicmovies.onrender.com/api/v1/movies/titles')
  .then(response => response.json())
  .then(data => {
    const selectElement = document.getElementById('movieSelect');
    
    // Populate the dropdown with movie titles
    data.forEach(movie => {
      const option = document.createElement('option');
      option.value = movie.title;
      option.textContent = movie.title;
      selectElement.appendChild(option);
    });
  })
  .catch(error => console.error('Error fetching movie titles:', error));

// Auto-fill form fields when a movie is selected
document.getElementById('movieSelect').addEventListener('change', function () {
  const selectedTitle = this.value;

  if (selectedTitle) {
    // Fetch the movie details based on the selected title
    fetch(`https://classicmovies.onrender.com/api/v1/movies/${encodeURIComponent(selectedTitle)}`) // Adjust to your endpoint
      .then(response => response.json())
      .then(data => {
        // Auto-fill form fields with movie data
        document.getElementById('title').value = data.title;
        document.getElementById('year').value = data.year;
        document.getElementById('time').value = data.time;
        document.getElementById('actor').value = data.actor;
        document.getElementById('actress').value = data.actress;
      })
      .catch(error => console.error('Error fetching movie details:', error));
  } else {
    // Clear the form if no movie is selected
    document.getElementById('title').value = '';
    document.getElementById('year').value = '';
    document.getElementById('time').value = '';
    document.getElementById('actor').value = '';
    document.getElementById('actress').value = '';
  }
});

// Handle form submission for updating movie data
document.getElementById('updateForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const title = document.getElementById('title').value;
    const year = document.getElementById('year').value;
    const time = document.getElementById('time').value;
    const actor = document.getElementById('actor').value;
    const actress = document.getElementById('actress').value;
  
    if (!title || !year || !time) {
      alert('Please fill out all fields.');
      return;
    }
  
    const updatedMovie = {
      title: title,
      year: year,
      time: time,
      actor: actor,
      actress: actress
    };
  
    fetch('https://classicmovies.onrender.com/api/v1/movies/titles', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedMovie)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to update movie');
        }
        return response.json();
      })
      .then(updatedData => {
        alert('Movie updated successfully!');
        console.log(updatedData);
      })
      .catch(error => {
        console.error('Error updating movie:', error);
        alert('Error updating movie.');
      });
  });