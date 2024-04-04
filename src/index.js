import './style.css';
import loadHomepage from './homepage';
import loadMenu from './menu';
import loadAbout from './about';


loadHomepage();

document.querySelector('.home').addEventListener('click', () => loadHomepage());

document.querySelector('.menu').addEventListener('click', () => loadMenu());

document.querySelector('.about').addEventListener('click', () => loadAbout());