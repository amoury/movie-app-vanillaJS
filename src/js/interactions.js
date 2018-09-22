import { renderCurrentMovie } from './view';
import { fetchMovieContainer } from './model';



/**
 * Function reponsible for Active Tabs Underline
 */
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

      changePage(movieDetails);
    })
  });
}


export const handleCastTab = () => {
  const castTab = document.getElementById("cast_tab");
  castTab.addEventListener('click', (e) => {
    // changeTab();
  })
}

// const changeTab = async () => {
//   const main = document.querySelector('main')
//   const wrapper = document.createElement('div');
//   const responseText = await fetchMovieContainer();
//   wrapper.innerHTML = responseText;

//   const oldContent = document.querySelector('#poster_gallery');
//   const newContent = document.querySelector('#poster_gallery');

//   main.appendChild(newContent);
//   animate(oldContent, newContent);
  
// }

const changePage = (movieDetails) => {
  renderCurrentMovie(movieDetails);
  history.pushState(null, null, `${window.location.origin}/${movieDetails.id}`);
}

// const animate = (oldContent, newContent) => {
//   const movieDetails = document.getElementById('movie_details');
//   oldContent.style.position = 'absolute';

//   const fadeOut = oldContent.animate({
//     opacity: [1, 0]
//   }, 1000);

//   const fadeIn = newContent.animate({
//     opacity: [0,1]
//   }, 1000);

//   fadeIn.onfinish = () => {
//     oldContent.parentNode.removeChild(movieDetails)
//   }
// }