import { Center, VStack, Text, ScrollView, View } from 'native-base'
import React, { useState, useEffect, useRef } from 'react'
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
  const [mapRadius, setMapRadius] = useState(30000)
  const [searchKeyword, setSearchKeyword] = useState('english')
  const [isLoaded, setIsLoaded] = useState(false)
  const mapRef = useRef()


  const getLocation = async () => {
    try {
      setIsLoaded(false)
      const { granted } = await Location.requestForegroundPermissionsAsync()
      if (!granted) return
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync()
      setLocation({ latitude, longitude })
      setIsLoaded(true)

      mapRef.current.animateToRegion({
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    // show results based on users current location
    getLocation()
  }, [])

  useEffect(() => {
    // get Nearby Places
    setIsLoaded(false)

    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?radius=${mapRadius}&type=restaurant&keyword=${searchKeyword}&key=${API_KEY}&maxprice=4&minprice=2&location=${location ? location.latitude : null
        }%2C${location ? location.longitude : null}`
      )
      .then((result) => {
        setNearbyPlaces(result?.data?.results)
        setIsLoaded(true)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [location])

  return (
    <>
      <GooglePlacesInput location={location} setLocation={setLocation} />
      <MapInput nearbyPlaces={nearbyPlaces} location={location} getLocation={getLocation} mapRef={mapRef} />
      <RestaurantList nearbyPlaces={nearbyPlaces} isLoaded={isLoaded} setIsLoaded={setIsLoaded} />
    </>
  )
}

export default HomeScreenContainer
