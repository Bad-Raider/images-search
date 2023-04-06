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

let page = 1;
let perPage = 40;
let inputValue = "";
let simpleLightBox; 


// const { height: cardHeight } = document
//   .querySelector(".gallery")
//   .firstElementChild.getBoundingClientRect();

// window.scrollBy({
//   top: cardHeight * 2,
//   behavior: "smooth",
// });

refs.btnLoadMoreEl.classList.add("is-hiden");

refs.formEL.addEventListener("submit", handleSearchPhotoBySubmitForm);


function handleSearchPhotoBySubmitForm(e) {
    e.preventDefault();
    page = 1;
    inputValue = refs.inputEl.value.trim();

    if (inputValue === "") {
        return photoSearchError();
    };
        
    fetchSearchPhoto(inputValue, page, perPage)
        .then(({ totalHits, hits }) => {
            const totalPages = Math.ceil(totalHits / perPage);

            if (hits.length === 0) {
                refs.btnLoadMoreEl.classList.add("is-hiden");
                destroyMarkup();
                return photoSearchError();
            };

            refs.btnLoadMoreEl.classList.remove("is-hiden");
            destroyMarkup();
            showMessageAboutAllPhoto(totalHits);           
            createMarkup(hits);
            createSimpleLightbox();
            
            if (page === totalPages) { 
                refs.btnLoadMoreEl.classList.add("is-hiden");
                showInfoMessageEndSearch()
            };

        })
        .catch(() => {
            photoSearchError();
        })
};

// Loade More photo

refs.btnLoadMoreEl.addEventListener("click", handleBtnClick);

    function handleBtnClick() {
        page += 1;
        simpleLightBox.destroy();

        fetchSearchPhoto(inputValue, page, perPage)
        .then(({totalHits, hits}) => {           
                
            const totalPages = Math.ceil(totalHits / perPage)

            if (page > totalPages) {
                refs.btnLoadMoreEl.classList.add("is-hiden");
                showInfoMessageEndSearch()
            }    
            createMarkup(hits);
            createSimpleLightbox();
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

function showMessageAboutAllPhoto(totalHits) {
    Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`)
}
function showInfoMessageEndSearch() {
    Notiflix.Notify.info("We're sorry, but you've reached the end of search results.")
}

function createSimpleLightbox () {
    simpleLightBox = new SimpleLightbox('.gallery a').refresh();
};

