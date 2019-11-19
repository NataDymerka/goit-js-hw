import './styles.css';
import "core-js/stable";
import "regenerator-runtime/runtime";
import cardTemplate from './templates/photo-card.hbs';
// const basicLightbox = require('basiclightbox');
// import basicLightbox from 'basiclightbox';
const debounce = require('lodash.debounce');

const form = document.createElement("form");
form.setAttribute("id", "search-form");
form.classList.add("search-form");
form.innerHTML = `<input type="text" name="query" autocomplete="off" placeholder="Search images..." />`;
document.querySelector(".intro").prepend(form);
const loadMoreBtn = document.querySelector("button");
const ul = document.createElement("ul");
ul.classList.add("gallery");
loadMoreBtn.after(ul);

const apiKey = '14233608-90ab9ce0666b48ad5cd16ce4e';
const base = 'https://pixabay.com/api/';
const type = 'image_type=photo';
const orient = 'orientation=horizontal';
let pageNumber = '1';
const perPage = '12';
const searchForm = document.querySelector("#search-form");
const gallery = document.querySelector(".gallery");
let input;
searchForm.addEventListener('input', debounce(inputHandler, 500));
loadMoreBtn.addEventListener('click', loadMoreHandler);

function inputHandler(e) {
   pageNumber = 1;
   gallery.innerHTML = '';
   input = e.target.value;
   renderPage(input);
}

function loadMoreHandler () {
    pageNumber += 1;
    renderPage(input);
    window.scrollTo(0, 0);}

const getImages = async(input) => {
    try{
    const url = `${base}?${type}&${orient}&q=${input}&page=${pageNumber}&per_page=${perPage}&key=${apiKey}`;
    const response = await fetch(url);
    const imagesData = response.json();
    return imagesData;
    } catch (error) {
        console.log (error);
    }
}
function renderPage(input) {
    getImages(input).then(results => markupCreate(results));
}
function markupCreate(results) {
    console.log(results.hits);
    const str = results.hits.map(imageData => cardTemplate(imageData)).join(' ');
gallery.insertAdjacentHTML('afterbegin', str);
// document.querySelector("img").addEventListener('click', modalHandler);
}

// function modalHandler(e) {
//     // e.preventDefault();
//     const modalSrc = e.target.getAttribute('srcset');
//     console.log(modalSrc);
//     basicLightbox.create(`<img width="1400" height="900" src="${modalSrc}">`).show()
// }




