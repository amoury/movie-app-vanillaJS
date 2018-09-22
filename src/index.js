import style from './main.css';
import { toggleMenu, tabsTransition } from './js/interactions';
import { fetchMovies } from './js/model';
import { cleanURL } from './js/utils';

toggleMenu();

const checkLocation = () => {
  // console.log(window.location.href === window.location.origin)
  if(cleanURL(window.location.href) === window.location.origin) {
    fetchMovies();
  } else {
    console.log ("false");
  }
}

window.addEventListener('load', checkLocation());
window.addEventListener('popstate', () => {
  console.log('state popped');
  window.location.reload();
});
