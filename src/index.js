import './css/styles.css';
import './js/fetch';
import markupGallery from './templates/markupGallary.hbs';
import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from 'axios';
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
    fetchSearchPhoto(inputValue);
    // console.log
};
