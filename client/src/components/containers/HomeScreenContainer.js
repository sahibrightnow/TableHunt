import React, { useState, useEffect, useRef } from 'react'
import GooglePlacesInput from '../forms/GooglePlacesInput'
import MapInput from '../forms/MapInput'
import RestaurantList from '../lists/RestaurantList'
import { getLocation, getNearbyPlaces, LocationAndPlacesNearby } from '../services/LocationAndPlacesNearby'
import axios from 'axios'
import { API_KEY } from 'react-native-dotenv'
import * as Location from 'expo-location'

// import AppLoading from 'expo-app-loading';

// import {
//   useFonts,
//   Poppins_400Regular,
//   Poppins_500Medium,
//   Poppins_600SemiBold,
//   Poppins_700Bold,
// } from '@expo-google-fonts/poppins';

const HomeScreenContainer = ({ navigation }) => {
  // let [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  // NEARBY PLACES
  const [nearbyPlaces, setNearbyPlaces] = useState([])
  const [location, setLocation] = useState()
  const [rating, setRating] = useState(4)
  const [priceFilter, setPriceFilter] = useState(2)
  const [mapRadius, setMapRadius] = useState(20000)
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

  const getNearbyPlaces = async () => {
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?radius=${mapRadius}&type=restaurant&keyword=${searchKeyword}&key=${API_KEY}&maxprice=${priceFilter}&minprice=${priceFilter}&location=${location ? location.latitude : null
      }%2C${location ? location.longitude : null}`

    try {
      const request = await axios.get(url)
      const sortedResults = request?.data?.results.sort((a, b) => b.rating - a.rating)
      setNearbyPlaces(sortedResults.filter(el => {
        return el.rating >= rating && el.rating <= rating + 1
      }))
      setIsLoaded(true)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getLocation()
  }, [])

  useEffect(() => {
    // get Nearby Places
    setIsLoaded(false)
    getNearbyPlaces()
  }, [location, rating, mapRadius, priceFilter])

  return (
    <>
      <GooglePlacesInput location={location} setLocation={setLocation} />
      <MapInput nearbyPlaces={nearbyPlaces} location={location} getLocation={getLocation} mapRef={mapRef} />
      <RestaurantList nearbyPlaces={nearbyPlaces} isLoaded={isLoaded} type={'homepage'} navigation={navigation}
        setMapRadius={setMapRadius} setRating={setRating} rating={rating} priceFilter={priceFilter} setPriceFilter={setPriceFilter} />
    </>
  )
}

export default HomeScreenContainer