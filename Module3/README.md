# Classic Movie API
The API uses PostgreSQL to create a server and database to track my favorite classic movies. This project is for learning purposes. 

## Installation & Setup
This project required Node.js, Express, PostrgreSQL, Postman, and was finally deployed to Render as the last step. 
PostgreSQL and Postman were downloaded off the internet. We used Node.js in a previouse assignment, so this was already installed. 
Express, nodemon and cors needed to be installed with the below code
```
npm i express
npm i nodemon
npm install cors
```

## API Documentation
### GET /movies
Returns a list of all movies
![Get](https://github.com/ncasey-ppu/CMPS262/blob/dev/Module3/images/get%20movies.png)

### GET /movies/id
Returns a specific movie based on the movieid number listed
![GetID](https://github.com/ncasey-ppu/CMPS262/blob/dev/Module3/images/get%20movies%20by%20id.png)

### POST /movies
Adds a new movie to the database
![Post](https://github.com/ncasey-ppu/CMPS262/blob/dev/Module3/images/post%20movie.png)

### PUT /movies/id
Updates movie based on movieid listed
![Put](https://github.com/ncasey-ppu/CMPS262/blob/dev/Module3/images/put%20movie.png)

## Database Setup
When creating the database in PostgreSQL, you will create a new database under your chosen server. Once your database is set up, you will navigate to schema under that database and create a new table. This is where you name your columns and assign properties such as primary key. When all of this is completed, you can enter data in your table through SQL commands or you can import an Excel file. 

## Authentication & Security
API keys/authentication not needed for this project.

## Deployment Guide
Pushed from dev to main 
```
git push origin main
```
From main, the API was deployed to Render along with the database.

## License and Contribution Guidelines
This falls under the license for CMPS262.

If you wish to contribute, send a pull request to the dev branch for review and approval.
