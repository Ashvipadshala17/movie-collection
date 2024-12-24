// Movie collection array

const movies = [

    { title: "Inception", genre: "Sci-Fi", rating: 8.8, releaseYear: 2010 },

    { title: "The Dark Knight", genre: "Action", rating: 9.0, releaseYear: 2008 },

    { title: "Interstellar", genre: "Sci-Fi", rating: 8.6, releaseYear: 2014 }

];


// Add movie function

const addMovie = (collection, movie) => {

    collection.push(movie);

    displayMovies(); // Display the updated list of movies

};


// Function to display the list of movies

const displayMovies = () => {

    const movieList = document.getElementById("movieList");

    movieList.innerHTML = ""; // Clear the list before displaying it


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


// Remove movie function

const removeMovie = (title) => {

    const index = movies.findIndex(movie => movie.title === title);

    if (index !== -1) {

        movies.splice(index, 1); // Remove the movie from the array

        displayMovies(); // Update the movie list

    }

};


// Event listener for the form submission

document.getElementById("movieForm").addEventListener("submit", (e) => {

    e.preventDefault(); // Prevent page reload


    // Get movie details from the form

    const title = document.getElementById("title").value;

    const genre = document.getElementById("genre").value;

    const rating = parseFloat(document.getElementById("rating").value);

    const releaseYear = parseInt(document.getElementById("releaseYear").value);


    // Create a new movie object

    const newMovie = { title, genre, rating, releaseYear };


    // Add the new movie to the collection

    addMovie(movies, newMovie);


    // Reset the form

    document.getElementById("movieForm").reset();

});


// Display the movies initially

displayMovies();



