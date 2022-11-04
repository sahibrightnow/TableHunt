import { REACT_APP_API_KEY } from 'react-native-dotenv'
import React, { useState, useEffect } from 'react'
import { HStack } from 'native-base'
import axios from 'axios'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

const GooglePlacesInput = ({
  location,
  setLocation,
  searchRestaurant,
  navigation,
}) => {
  const [placeID, setPlaceID] = useState()

  const placeDetailsAPI = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&key=${REACT_APP_API_KEY}`

  useEffect(() => {
    axios
      .get(placeDetailsAPI)
      .then((result) => {
        setLocation({
          latitude: result?.data?.result?.geometry?.location?.lat,
          longitude: result?.data?.result?.geometry?.location?.lng,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }, [placeID])

  const getRestaurantDetail = (place_id) => {
    const resDetailsURL = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&key=${REACT_APP_API_KEY}`
    axios
      .get(resDetailsURL)
      .then((result) => {
        navigation.navigate('Restaurant Page', {
          restaurant: result.data.result,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <HStack zIndex={2} position='absolute' top={20} left={10} right={10}>
      {searchRestaurant ? (
        <GooglePlacesAutocomplete
          placeholder='Search for Restaurants'
          query={{
            key: `${REACT_APP_API_KEY}`,
            language: 'en', // language of the results
            location: location
              ? `${location.latitude},${location.longitude}`
              : '49.246292,-123.116226',
            radius: 100000,
            components: 'country:ca', // only Canada
            types: 'establishment',
          }}
          GooglePlacesSearchQuery={{
            // rankby: 'distance',
            types: ['restaurant', 'cafe'],
          }}
          onPress={(data) => {
            console.log('PLACE ID', data.place_id)
            getRestaurantDetail(data.place_id)
          }}
          onFail={(error) => console.error(error)}
          requestUrl={{
            url: 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
            useOnPlatform: 'web',
          }} // this in only required for use on the web. See https://git.io/JflFv more for details.
          enablePoweredByContainer={false}
        />
      ) : (
        <GooglePlacesAutocomplete
          placeholder='Search a location'
          query={{
            key: `${REACT_APP_API_KEY}`,
            language: 'en', // language of the results
            location: location
              ? `${location.latitude},${location.longitude}`
              : '49.246292,-123.116226',
            radius: 1000,
            components: 'country:ca', // only Canada
            types: 'address',
          }}
          GooglePlacesSearchQuery={{
            // rankby: 'distance',
            types: ['restaurant', 'cafe'],
          }}
          onPress={(data) => {
            setPlaceID(data.place_id)
          }}
          onFail={(error) => console.error(error)}
          requestUrl={{
            url: 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
            useOnPlatform: 'web',
          }} // this in only required for use on the web. See https://git.io/JflFv more for details.
          enablePoweredByContainer={false}
        />
      )}
    </HStack>
  )
}

export default GooglePlacesInput
