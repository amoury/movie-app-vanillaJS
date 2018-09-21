import style from './main.css';
import { toggleMenu, tabsTransition } from './js/interactions';
import { fetchMovies } from './js/model';

toggleMenu();
tabsTransition();


window.addEventListener('load', fetchMovies());
