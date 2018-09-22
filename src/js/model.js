import { renderMovies, renderCurrentMovie } from './view';

const API_KEY = "863069699dead81459a0f4320dbbfe58";
const popularMoviesURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;


/**
 * Fetch all movies from the API when the App initiates
 */
export const fetchMovies = async () => {
  try {
    console.log(window.location.href === window.location.origin);
    const response = await fetch(popularMoviesURL);
    const json = await response.json();
    renderMovies(json.results);
  } catch (error) {
    console.log(error)
  }
}

// http://www.omdbapi.com/?t=Solo%3A%20A%20Star%20Wars%20Story&apikey=22dd030c

export const fetchSelectedMovie = async (movieTitle) => {
  try {
    const response = await fetch(`http://www.omdbapi.com/?t=${movieTitle}&apikey=22dd030c`);
    const movieDetails = await response.json()
    console.log(movieDetails);
    return movieDetails;
  } catch (error) {
    console.log(error)
  }
};

export const fetchMoviePosters = async (movieId) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${API_KEY}&language=en-US&include_image_language=en`);
    const moviePosters = await response.json()
    return moviePosters.posters;
  } catch (error) {
    console.log(error);
  }
};


export const loadPage = async (url) => {
  const response = await fetch(url);
  return response.text();
}

export const fetchMovieContainer = async () => {
  try {
    const response = await fetch('http://localhost:8080/home.html');
    const responseText = await response.text();
    return responseText;
  } catch (error) {
    console.log(error)
  }
}