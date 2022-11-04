import { REACT_APP_SERVER } from 'react-native-dotenv'
import axios from 'axios'

export const fetchReservations = (userId, userToken) => {
  return axios.get(
    `${REACT_APP_SERVER}/api/v1/reservations/list?userId=${userId}`,
    {
      headers: { Authorization: userToken },
    }
  )
}

export const fetchRegisterUser = (payload) => {
  return axios.post(`${REACT_APP_SERVER}/api/v1/consumers`, payload)
}

export const fetchCreateReservation = (payload, userToken) => {
  return axios.post(`${REACT_APP_SERVER}/api/v1/reservations`, payload, {
    headers: { Authorization: userToken },
  })
}

export const fetchCreateRestaurant = (payload, userToken) => {
  return axios.post(`${REACT_APP_SERVER}/api/v1/restaurants`, payload, {
    headers: { Authorization: userToken },
  })
}

export const fetchCancelReservation = (payload, userToken) => {
  return axios.patch(
    `${REACT_APP_SERVER}/api/v1/reservations/remove-reservation`,
    payload,
    {
      headers: { Authorization: userToken },
    }
  )
}
