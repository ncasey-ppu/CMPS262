const formEl = document.querySelector('.form');

formEl.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData);

    if(data.title == "" || data.year == "" || data.time == ""){
        $.toaster({priority : 'danger', title : 'Error', message : 'Incomplete data'});
    }
    else {
        fetch('https://classicmovies.onrender.com/api/v1/movies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
          .then(data => console.log(data))
          .then(error => console.log(error))
          $.toaster({priority : 'success', title : 'Movie Add', message : 'New movie added to library'});
    }
})