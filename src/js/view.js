import { handleMovieClick, tabsTransition, handleCastTab } from './interactions';
import { fetchSelectedMovie, fetchMovieContainer, fetchMoviePosters } from './model';

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
 * Responsible for the logic to fetch & render Single Movie Details
 * @param {Object} movieInfo
 */
export const renderCurrentMovie = async (movieInfo) => {
  const movieDetails = await fetchSelectedMovie(encodeURIComponent(movieInfo.title));
  const moviePosters = await fetchMoviePosters(movieInfo.id);
  const containerHTML = await fetchMovieContainer();
  updateMovieHeader(movieDetails);
  updateNavBar();
  updateMovieContainer(containerHTML, movieDetails, moviePosters);
}



const updateMovieContainer = (containerHTML, movieDetails, moviePosters) => {
  document.querySelector('main').innerHTML = containerHTML;

  document.getElementById('poster_gallery').innerHTML = renderPosters(moviePosters)

  document.getElementById("movie_details").innerHTML = `
    <div class="movie_details_card">
      <div class="movie_ratings">
        ${ renderRating(movieDetails.Ratings) }
      </div>


      <div class="movie_description">
        <p>${movieDetails.Plot}</p>
        <p>Director - ${movieDetails.Director}</p>
      </div>
      <div class="movie_additional_details_switch">
        <p class="additional_details_toggle">More about this movie</p>
      </div>
    </div>
  `;
}

/**
 * Updates Movie Title in the Header
 * @param {Object} movieTitle 
 */
const updateMovieHeader = movieDetails => {
  const { Title, Released, Runtime, Genre, Rated } = movieDetails;

  document.getElementById("movie_title").innerText = Title;
  document.querySelector(".movie_details_box").innerHTML += `
      <span class="movie_metadata">
        <span class="movie_metadata_type">
          Rated ${Rated}
        </span>
        ${Released} | ${Genre} | ${Runtime}
      </span>
  `;
};

const updateNavBar = () => {
  document.querySelector("nav").innerHTML = `
    <ul class="tabs">
      <li class="tabs_item active">Overview</li>
      <li class="tabs_item" id="cast_tab">Cast</li>
      <li class="underline"></li>
    </ul>
  `;

  tabsTransition();
  handleCastTab();
}



/**
 * Takes Array of Ratings as input and returns HTML
 * @param {Array} Ratings 
 */
const renderRating = (Ratings) => {
  if (!Ratings) return "No Details available";
  let ratingCards = ``;
  
  Ratings.forEach( card => {
    ratingCards += `
      <div class="rating">
        <h2 class="rating_score">${card.Value}</h2>
        <p class="rating_source">
          <a href="http://rotten.com">${card.Source}</a>
        </p>
      </div>
    `;
  });

  return ratingCards;
}

const renderPosters = moviePosters => {
  let posters = "";

  moviePosters.forEach(poster => {
    
    posters += `<div class="poster">
      <img src="https://image.tmdb.org/t/p/w500${poster.file_path}" class="img-responsive" />
    </div> `
  });

  return posters;
}