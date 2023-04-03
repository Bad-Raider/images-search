import './css/styles.css';
import './css/gallery.css';
import './css/form.css';
import './css/btnLoadMore.css';
import './js/fetch';
import markupGallery from './templates/markupGallary.hbs';
import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import fetchSearchPhoto from './js/fetch';



const refs = {
    formEL: document.querySelector(".search-form"),
    inputEl: document.querySelector("input[name='searchQuery']"),
    btnSubmit: document.querySelector("button[type='submit']"),
    gallaryEl: document.querySelector(".gallery"),
    btnLoadMoreEl: document.querySelector(".load-more"),
};

refs.formEL.addEventListener("submit", handleSearchPhotoBySubmitForm);

function handleSearchPhotoBySubmitForm(e) {
    e.preventDefault();
    const inputValue = refs.inputEl.value;
    if (inputValue === "") {
        destroyMarkup();
    }
        
    fetchSearchPhoto(inputValue)
        .then((data) => {
                if (data.length === 0) {
                photoSearchError();
            };
            createMarkup(data);
            // simple light box
            const lightbox = new SimpleLightbox('.gallery a');
            lightbox.on('show.simplelightbox');
            
        })
        .catch((error) => {
            console.log(error)
        })
};





function createMarkup(data) {
    refs.gallaryEl.insertAdjacentHTML("beforeend", markupGallery(data));
};

function destroyMarkup() {
    refs.gallaryEl.innerHTML = "";
}


function photoSearchError() {
    Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");    
};