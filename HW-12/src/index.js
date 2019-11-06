import './styles.css';
import countryTemplate from './templates/countryDescription.hbs';
import PNotify from '../node_modules/pnotify/dist/es/PNotify.js';

const debounce = require('lodash.debounce');

const countryInput = document.querySelector('#country-input');
const countryList = document.querySelector('#countryList');
const countryDescr = document.querySelector('#country-description');

countryInput.addEventListener('input', debounce(inputHandler, 500));

function inputHandler(e) {
    let input = e.target.value;
    fetchCounties(input);
}

function fetchCounties(input) {
    const baseUrl = 'https://restcountries.eu/rest/v2/name/';

    fetch(baseUrl + input).then(response => {
        return response.json()

    }).then(data => {
        clear();
        if (data.length > 10) {
            message();
            return;
        }
        if (data.length == 1) {
            console.log(data);
            renderCountryDescr(data[0]);
            return;
        }
        if (data.length > 1) {
            console.log(data);
            renderCountryList(data);
        }

    }).catch(error => console.log(error));
}

function clear() {
    countryList.innerHTML = '';
    countryDescr.innerHTML = '';
}

function message() {
    PNotify.alert('There are too many variants! Please, specify your search!');
}

function renderCountryList(countries) {
    const markup = countries.map(country => `<li class="country-name_item">${country.name}</li>`).join('');
    countryList.insertAdjacentHTML('beforeend', markup);
}

function renderCountryDescr(obj) {
    countryDescr.insertAdjacentHTML('beforeend', countryTemplate(obj));
}