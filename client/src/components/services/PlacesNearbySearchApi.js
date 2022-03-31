// ================================================
// CURRENTLY NOT USED IN ANY OF THE COMPONENTS
// ================================================


// import axios from "axios";
// import { API_KEY } from "react-native-dotenv";

// export const getNearbyPlaces = async placesFilter => {
//     const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${placesFilter.latitude}%2C${placesFilter.longitude}&radius=${placesFilter.radius}&type=${placesFilter.type}&key=${API_KEY}`

//     try {
//         const params = {
//             api_key: APP_KEY,
//             language: "en",
//             location: `${placesFilter.latitude}${placesFilter.longitude}`,
//             radius: placesFilter.radius,
//             type: placesFilter.type,
//         };

//         const response = axios.get(url, { params })

//         const movies = response
//         return movies
//     } catch (error) {
//         throw error
//     }
// };
