import './css/styles.css';
// import { deleteMarkup, alertInfo, alertWrong, creatorFullMarkup, creatorMarkup } from './js/functions';

import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import fetchCountries from './js/fetchCountries';
import markupCountryList from './templates/markupCountryList.hbs';
import markupCountryInfo from './templates/markupCountryInfo.hbs';



const DEBOUNCE_DELAY = 300;
// DOM elements
const refs = {
  inputEl: document.querySelector("#search-box"),
  countryListEl: document.querySelector(".country-list"),
  contryInfoEl: document.querySelector(".country-info"),
};

refs.inputEl.addEventListener("input", debounce(handleInputValue, DEBOUNCE_DELAY));
// handler
function handleInputValue(e) {
  const nameCountry = e.target.value.trim();

  if (nameCountry === "") {
   return deleteMarkup();
  };

  fetchCountries(nameCountry)
    .then(countyObj => {

      deleteMarkup();

      if (countyObj.length === 1) {
        creatorFullMarkup(countyObj)
      }
      else if (countyObj.length > 10) {
        alertInfo();        
      }
      else {
        creatorMarkup(countyObj);
      }
    })
    .catch(() => {
      alertWrong();
      deleteMarkup();
    })
};


function deleteMarkup() {
  refs.contryInfoEl.innerHTML = "";
  refs.countryListEl.innerHTML = "";
};

function alertInfo() {
  Notiflix.Notify.info("Too many matches found. Please enter a more specific name.")
};

function alertWrong() {
  Notiflix.Notify.failure("Oops, there is no country with that name.")
};

function creatorFullMarkup(countyObj) {
  refs.countryListEl.insertAdjacentHTML("beforeend", markupCountryList(countyObj));
        refs.contryInfoEl.insertAdjacentHTML("beforeend", markupCountryInfo(countyObj));
};

function creatorMarkup(countyObj) {
          refs.countryListEl.insertAdjacentHTML("beforeend", markupCountryList(countyObj));

};