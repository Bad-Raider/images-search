import axios from "axios";
import Notiflix from 'notiflix';


const PERSONAL_KEY = "35015448-c7fa8b01ad4ad6351d3127809";
const API = "https://pixabay.com/api/";

const options = new URLSearchParams({
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
}).toString();

export default async function fetchSearchPhoto(value, page, perPage) {
    Notiflix.Loading.dots('Please wait');

    const response = await axios.get(`${API}?key=${PERSONAL_KEY}&q=${value}&${options}&per_page=${perPage}&page=${page}`);
    Notiflix.Loading.remove();
     
    return await response.data;;
};

