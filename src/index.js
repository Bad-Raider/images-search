import './css/styles.css';
import './css/gallery.css';
import './css/form.css';
import './css/btnBackToTop.css';
import './js/spinner.js';
import "simplelightbox/dist/simple-lightbox.min.css";
import comeBackToTopPage from './js/btnUpTop';
import fetchSearchPhoto from './js/fetch';
import markupGallery from './templates/markupGallary.hbs';
import SimpleLightbox from "simplelightbox";
import refs from './js/refsElement';
import * as Notiflix from './js/notify';

const {
    photoSearchError,
    showMessageAboutAllPhoto,
    showInfoMessageEndSearch,
} = Notiflix;

let page = 1;
let perPage = 40;
let inputValue = "";
let simpleLightBox; 


refs.formEL.addEventListener("submit", handleSearchPhotoBySubmitForm);

function handleSearchPhotoBySubmitForm(e) {
    e.preventDefault();
    page = 1;
    inputValue = refs.inputEl.value.trim();

    comeBackToTopPage();
    if (inputValue === "") {
        return photoSearchError();
    };
     fetchSearchPhoto(inputValue, page, perPage)
         .then(({ totalHits, hits }) => {
            const totalPages = Math.ceil(totalHits / perPage);
            if (hits.length === 0) {
                destroyMarkup();
                return photoSearchError();
            };
            destroyMarkup();
            showMessageAboutAllPhoto(totalHits);           
            createMarkup(hits);
            createSimpleLightbox();
            if (page >= totalPages) { 
                showInfoMessageEndSearch()
            };
        })
        .catch(() => {
            photoSearchError();
        })
};

// =============== infinity scroll =================
const options = {    
    rootMargin: '500px',
};
const callback = (entries) => {
    entries.forEach(entrie => {
        if (entrie.isIntersecting && inputValue !== "")  {
            page += 1;
            console.log(page);
            fetchSearchPhoto(inputValue, page, perPage)
            .then(({totalHits, hits}) => {           
            const totalPages = Math.ceil(totalHits / perPage)
            if (page > totalPages) {
                showInfoMessageEndSearch();
            }    
                createMarkup(hits);
                simpleLightBox.destroy();
                createSimpleLightbox();
        })
        .catch((error) => {
            console.log(error)
        })
        }
    });
};
const observer = new IntersectionObserver(callback, options);
observer.observe(refs.scroll);

//!================ All functions ========================= 
function createMarkup(data) {
    refs.gallaryEl.insertAdjacentHTML("beforeend", markupGallery(data));
};
function destroyMarkup() {
    refs.gallaryEl.innerHTML = "";
}
function createSimpleLightbox () {
    simpleLightBox = new SimpleLightbox('.gallery a').refresh();
};


