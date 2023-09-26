import Notiflix from 'notiflix';

export function photoSearchError() {
    Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");    
};
export function showMessageAboutAllPhoto(totalHits) {
    Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`)
}
export function showInfoMessageEndSearch() {
    Notiflix.Notify.info("We're sorry, but you've reached the end of search results.")
}

