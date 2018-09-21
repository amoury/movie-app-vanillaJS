import { renderSingleMovie } from './view';

export const toggleMenu = () => {
  const menuBtn = document.getElementById('dots_menu');
  const menu = document.querySelector('.dropdown_menu');

  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('open');
  });
}


/**
 * Function reponsible for Active Tabs Underline
 */
export const tabsTransition = () => {
  const TabItem = document.querySelectorAll('.tabs_item');

  const setActiveClass = event => {
    for (let item of TabItem) {
      item.classList.remove('active');
    }
    event.currentTarget.classList.add('active');
  }

  for (let item of TabItem) {
    item.addEventListener('click', setActiveClass);
  }
}


export const handleMovieClick = () => {
  const moviePoster = document.querySelectorAll('.movie');
  moviePoster.forEach(movie => {
    movie.addEventListener('click', e => {
      const movieDetails = {};
      movieDetails.title = e.target.dataset.title;
      movieDetails.id = e.target.alt;

      renderSingleMovie(movieDetails);
    })
  });
}




