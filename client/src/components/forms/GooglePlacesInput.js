import React, { useState, useEffect } from 'react'
import { HStack, useDisclose, Button } from 'native-base'
import Constants from 'expo-constants'
import { API_KEY } from 'react-native-dotenv'
import axios from 'axios'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
// import Geolocation from 'react-native-geolocation-service';
import * as Location from 'expo-location'
import { MaterialIcons } from '@expo/vector-icons'
// import BottomList from '../lists/BottomList';

const GooglePlacesInput = ({ location, setLocation, searchRestuarant }) => {
  const { isOpen, onOpen, onClose } = useDisclose()
  const [placeID, setPlaceID] = useState()


  const placeDetailsAPI = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&key=${API_KEY}`

  useEffect(() => {
    axios
      .get(placeDetailsAPI)
      .then((result) => {
        setLocation(
          {
            latitude: result?.data?.result?.geometry?.location?.lat,
            longitude: result?.data?.result?.geometry?.location?.lng
          })
      })
      .catch((error) => {
        console.log(error)
      })
  }, [placeID])

  return (
    <HStack
      // pt={20}
      // px={10}
      zIndex={2}
      position="absolute"
      top={20}
      left={10}
      right={10}
    // bg="green.200"
    // flex={1}
    >
      {searchRestuarant
        ?
        <GooglePlacesAutocomplete

          placeholder='Search Restaurants'
          query={{
            key: API_KEY,
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
          onPress={(data = null) => {
            setPlaceID(data.place_id)
            console.log("Place id", data.place_id)
          }}
          // onPress={onOpen}
          onFail={(error) => console.error(error)}
          requestUrl={{
            url: 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
            useOnPlatform: 'web',
          }} // this in only required for use on the web. See https://git.io/JflFv more for details.
          enablePoweredByContainer={false}
        // currentLocation={true}
        // currentLocationLabel='Current location'
        // getAddressText={(data) => data.description}
        />

        :

        <GooglePlacesAutocomplete

          placeholder='Search location'
          query={{
            key: API_KEY,
            language: 'en', // language of the results
            location: location
              ? `${location.latitude},${location.longitude}`
              : '49.246292,-123.116226',
            radius: 1000,
            components: 'country:ca', // only Canada
            // types: 'establishment',
          }}
          GooglePlacesSearchQuery={{
            // rankby: 'distance',
            types: ['restaurant', 'cafe'],
          }}
          onPress={(data = null) => {
            setPlaceID(data.place_id)
            console.log("Place id", data.place_id)
          }}
          // onPress={onOpen}
          onFail={(error) => console.error(error)}
          requestUrl={{
            url: 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
            useOnPlatform: 'web',
          }} // this in only required for use on the web. See https://git.io/JflFv more for details.
          enablePoweredByContainer={false}
        // currentLocation={true}
        // currentLocationLabel='Current location'
        // getAddressText={(data) => data.description}
        />
      }


    </HStack>
  )
}

export default GooglePlacesInput
