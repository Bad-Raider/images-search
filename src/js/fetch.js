import axios from "axios";

const PERSONAL_KEY = "35015448-c7fa8b01ad4ad6351d3127809";

const API = "https://pixabay.com/api/";

const optionsAPI = {
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
};

export default function fetchSearchPhoto(value) {
    return axios.get(`${API}?key=${PERSONAL_KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true`)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    
};

fetchSearchPhoto("ffffa")
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

if (response.data) {
    
}