// import Notiflix from 'notiflix';
// import markupCountryList from './templates/markupCountryList.hbs';
// import markupCountryInfo from './templates/markupCountryInfo.hbs';
 

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



export { deleteMarkup, alertInfo, alertWrong, creatorFullMarkup, creatorMarkup };