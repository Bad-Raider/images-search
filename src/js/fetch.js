import axios from "axios";

const PERSONAL_KEY = "35015448-c7fa8b01ad4ad6351d3127809";

const API = "https://pixabay.com/api/";

// const optionsAPI = {
//     image_type: "photo",
//     orientation: "horizontal",
//     safesearch: true,
// };


export default async function fetchSearchPhoto(value) {
    const response = await axios.get(`${API}?key=${PERSONAL_KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&colors=grayscale`);
     
    const data = await response.data.hits;
    console.log(data);
           
    return data;
};


// export default async function fetchSearchPhoto(value) {
//     return axios.get(`${API}?key=${PERSONAL_KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true`)
//         .then(function (response) {
//             console.log(response.data.hits);
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
    
// };

// export function fetchSearchPhoto(value) {
//     return fetch(`${API}?key=${PERSONAL_KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true`)
//     .then(response => {
//       if (!response.ok) {
        
//         throw new Error(response.status)
//         }
//     return response.json();
//     }).then(data => {
//         console.log(data)
//     })
// };

// fetchSearchPhoto("cat")

// if (response.data) {
    
// }