import axios from 'axios';
import { SERVER } from 'react-native-dotenv'

export const fetchReservations = (userId, userToken) => {
    return axios.get(`${SERVER}/api/v1/reservations/list?userId=${userId}`, {
        headers: { 'Authorization': userToken }
    })
}

export const fetchRegisterUser = (payload) => {
    return axios.post(`${SERVER}/api/v1/consumers`, payload);
};

export const fetchCreateReservation = (payload, userToken) => {
    return axios.post(`${SERVER}/api/v1/reservations`, payload, {
        headers: { 'Authorization': userToken }
    })
}

export const fetchCreateRestaurant = (payload, userToken) => {
    return axios.post(`${SERVER}/api/v1/restaurants`, payload, {
        headers: { 'Authorization': userToken }
    })
}

export const fetchCancelReservation = (payload, userToken) => {
    return axios.patch(`${SERVER}/api/v1/reservations/remove-reservation`, payload, {
        headers: { 'Authorization': userToken }
    })
};
