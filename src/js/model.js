import { renderMovies } from './view';

const API_KEY = "863069699dead81459a0f4320dbbfe58";
const popularMoviesURL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;


export const fetchMovies = async () => {
  const response = await fetch(popularMoviesURL);
  const json = await response.json();
  renderMovies(json.results);
}

// http://www.omdbapi.com/?t=Solo%3A%20A%20Star%20Wars%20Story&apikey=22dd030c

export const fetchSelectedMovie = async movieId => {
  console.log("fetching single movie ", encodeURIComponent(movieId));
};