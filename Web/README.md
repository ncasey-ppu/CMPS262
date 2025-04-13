# Favorite Classic Movies Web App
This is to create a website to link to API. One page is used to view date, one is used to add new data, and one is used to modify data. 

## Installation & Setup
Node.JS is used for the back end. Live Server is used to test the website locally. Installation of new applications was not needed. Website was deployed through Render as a static site when complete.

## Usage Instructions
Users can access the site through the Render link below. The homepage shows the database and is searchable.
[Movie site on Render](https://movies-web-31qf.onrender.com/index.html)
![Homepage](https://github.com/ncasey-ppu/CMPS262/blob/dev/Web/images/homepage.png)

From the homepage, users can search for movies or sort them in the database. 
![Search](https://github.com/ncasey-ppu/CMPS262/blob/dev/Web/images/search.png)

The Add Movie page allows users to add a new movie to the database. The movie id field is not required, as it is set to auto-increment.
![Add](https://github.com/ncasey-ppu/CMPS262/blob/dev/Web/images/add.png)

The Modify A Movie page lets users update a movie in the database. They can select a movie from the dropdown list and update the information using the form. 
![Modify](https://github.com/ncasey-ppu/CMPS262/blob/dev/Web/images/modify.png)

## API Integration 
The homepage and Add Movie page use similar functions to connect to the API:
```
fetch('https://classicmovies.onrender.com/api/v1/movies')
```

For the Modify A Movie page, I created a new query to find a movieId based on the title. This used the below function to connnect to the API:
```
fetch('https://classicmovies.onrender.com/api/v1/movies/titles')
```

## Contributing Guidelines
If you wish to contribute, send a pull request to the dev branch for review and approval.
### Coding Standards
The front end uses HTML, CSS, and JavaScript. 

## Licensing
This is covered under the license for CMPS262.
