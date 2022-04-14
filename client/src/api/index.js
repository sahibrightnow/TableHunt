import axios from 'axios';

const serverURL = 'http://localhost:4000';

export const fetchReservations = (userId, userToken) => {
    return axios.get(`${serverURL}/api/v1/reservations/list?userId=${userId}`, {
        headers: { 'Authorization': userToken }
    })
}

export const fetchRegisterUser = (payload) => {
    return axios.post(`${serverURL}/api/v1/consumers`, payload);
};

export const fetchCreateReservation = (payload, userToken) => {
    return axios.post(`${serverURL}/api/v1/reservations`, payload, {
        headers: { 'Authorization': userToken }
    })
}

export const fetchCreateRestaurant = (payload, userToken) => {
    return axios.post(`${serverURL}/api/v1/restaurants`, payload, {
        headers: { 'Authorization': userToken }
    })
}

export const fetchRemoveReservation = (payload, userToken) => {
    console.log("DATA of fetchRemoveReservation", userToken)

    return axios.patch(`${serverURL}/api/v1/reservations/remove-reservation`, payload)
    // , {
    //     headers: { 'Authorization': userToken }
    // })
};
