const API_URL = "https://classicmovies.onrender.com/api/v1/movies"

fetch(API_URL)
.then(response => response.json())
.then(data => {
    const formattedData = data.map(classics => [
        classics.id,
        classics.title,
        classics.year,
        classics.time,
        classics.actor,
        classics.actress
    ]);

    new gridjs.Grid({
        columns: ["Id","Title","Year","Time","Actor","Actress"],
        data: formattedData, 
        search: true,
        sort: true,
        pagination: {
            enabled: true,
            limit: 5
        },
        resizable: true,
        style: {
            table: {
                border: "1px solid #ccc"
            },
            th: {
                "background-color": "#f4f4f4",
                "text-align": "left"
            },
            td: {
                "padding": "8px",
                "border-bottom": "1px solid #ddd"
            }
        }
    }).render(document.getElementById("grid-container"));
})
.catch(error => console.error('Error fetching data', error));