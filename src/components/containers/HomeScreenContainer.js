import { Center, VStack, Text, ScrollView, View } from 'native-base'
import React, { useState, useEffect } from 'react'
import GooglePlacesInput from '../forms/GooglePlacesInput'
import MapInput from '../forms/MapInput'
import axios from 'axios'
import { API_KEY } from 'react-native-dotenv'
import * as Location from 'expo-location'
import RestaurantList from '../lists/RestaurantList'
// import AppLoading from 'expo-app-loading';

// import {
//   useFonts,
//   Poppins_400Regular,
//   Poppins_500Medium,
//   Poppins_600SemiBold,
//   Poppins_700Bold,
// } from '@expo-google-fonts/poppins';

const HomeScreenContainer = ({ data }) => {
  // let [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  // NEARBY PLACES
  const [nearbyPlaces, setNearbyPlaces] = useState([])
  const [location, setLocation] = useState()

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestPermissionsAsync()
      if (!granted) return
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync()
      setLocation({ latitude, longitude })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getLocation()
  }, [])

  useEffect(() => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?radius=50000&type=restaurant&keyword=italian&key=${API_KEY}&maxprice=4&minprice=2&location=${location ? location.latitude : null
        }%2C${location ? location.longitude : null}`
      )
      .then((result) => {
        setNearbyPlaces(result.data.results)
        console.log('setNearbyPlaces', result.data.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [location])

  return (
    <>
      <GooglePlacesInput />
      <MapInput />
      <RestaurantList nearbyPlaces={nearbyPlaces} />
    </>
  )
}

export default HomeScreenContainer
