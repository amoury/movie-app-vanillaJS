import { handleMovieClick } from './interactions';
import { fetchSelectedMovie } from './model';

export const renderMovies = (results) => {
  const mainHome = document.querySelector('main');
  const imgURL = "https://image.tmdb.org/t/p/w500";
  mainHome.innerHTML = `<div id="popular_movies" class="popular_movies"></div>`
  const popularMovies = document.getElementById('popular_movies');

  results.map( movie => {
    let img = `${imgURL}${movie.poster_path}`;
    popularMovies.innerHTML += `
      <div class="movie">
          <img src=${img} alt="${movie.id}" data-title="${movie.title}" class="img-responsive"/>
        </div>
    `;

    handleMovieClick();
  })
}

/**
 * Responsible for all the logic to display Single Movie Details
 * @param {Object} movieDetails
 */
export const renderSingleMovie = movieDetails => {
  console.log(movieDetails.title)
  updateMovieTitle(movieDetails.title);
  fetchSelectedMovie(movieDetails.id);
};


/**
 * Updates Movie Title in the Header
 * @param {String} movieTitle 
 */
export const updateMovieTitle = movieTitle => {
  document.getElementById("movie_title").innerText = movieTitle;
};