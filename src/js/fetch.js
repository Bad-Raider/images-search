import axios from "axios";

const PERSONAL_KEY = "35015448-c7fa8b01ad4ad6351d3127809";
const API = "https://pixabay.com/api/";

// const optionsAPI = {
//     image_type: "photo",
//     orientation: "horizontal",
//     safesearch: true,
// };


export default async function fetchSearchPhoto(value, page, perPage) {
    const response = await axios.get(`${API}?key=${PERSONAL_KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&colors=grayscale&per_page=${perPage}&page=${page}`);
     
    const data = await response.data;
           
    return data;
};
