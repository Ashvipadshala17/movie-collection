const movies = [

    { title: "Inception", genre: "Sci-Fi", rating: 8.8, releaseYear: 2010 },

    { title: "The Dark Knight", genre: "Action", rating: 9.0, releaseYear: 2008 },

    { title: "Interstellar", genre: "Sci-Fi", rating: 8.6, releaseYear: 2014 }

];


const addMovie = (collection, movie) => {

    collection.push(movie);

    displayMovies(); 

};

const displayMovies = () => {

    const movieList = document.getElementById("movieList");

    movieList.innerHTML = ""; 


    movies.forEach(movie => {

        const listItem = document.createElement("li");

        listItem.innerHTML = `

            <span>${movie.title} (${movie.releaseYear})</span>

            <span>Genre: ${movie.genre}</span>

            <span>Rating: ${movie.rating}</span>

            <button class="remove-btn" onclick="removeMovie('${movie.title}')">Remove</button>

        `;

        movieList.appendChild(listItem);

    });

};


const removeMovie = (title) => {

    const index = movies.findIndex(movie => movie.title === title);

    if (index !== -1) {

        movies.splice(index, 1); 

        displayMovies(); 

    }

};


document.getElementById("movieForm").addEventListener("submit", (e) => {

    e.preventDefault(); 


    const title = document.getElementById("title").value;

    const genre = document.getElementById("genre").value;

    const rating = parseFloat(document.getElementById("rating").value);

    const releaseYear = parseInt(document.getElementById("releaseYear").value);

    const newMovie = { title, genre, rating, releaseYear };

    addMovie(movies, newMovie);

    document.getElementById("movieForm").reset();

});


displayMovies();



