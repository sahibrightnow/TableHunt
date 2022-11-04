import { REACT_APP_API_KEY } from 'react-native-dotenv'
import React, { useState, useEffect, useRef } from 'react'
import GooglePlacesInput from '../forms/GooglePlacesInput'
import MapInput from '../forms/MapInput'
import RestaurantList from '../lists/RestaurantList'
import axios from 'axios'
import * as Location from 'expo-location'

const HomeScreenContainer = ({ navigation }) => {
  // NEARBY PLACES
  const [nearbyPlaces, setNearbyPlaces] = useState([])
  const [location, setLocation] = useState({})
  const [rating, setRating] = useState(4)
  const [priceFilter, setPriceFilter] = useState(2)
  const [mapRadius, setMapRadius] = useState(20000)
  const [searchKeyword] = useState('english')
  const [isLoaded, setIsLoaded] = useState(false)
  const mapRef = useRef()

  const getIntialLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== 'granted') {
      Alert.alert('Permission to access location was denied')
      return
    }
    const location = await Location.getCurrentPositionAsync({})
    return {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    }
  }

  const getLocation = async () => {
    try {
      setIsLoaded(false)
      setLocation(await getIntialLocation())
      setIsLoaded(true)

      mapRef.current.animateToRegion({
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      })
    } catch (error) {
      console.log(error)
    }
  }

  const getNearbyPlaces = async () => {
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?radius=${mapRadius}&type=restaurant&keyword=${searchKeyword}&key=${REACT_APP_API_KEY}&maxprice=${priceFilter}&minprice=${priceFilter}&location=${
      location ? location.latitude : null
    }%2C${location ? location.longitude : null}`

    try {
      const request = await axios.get(url)
      const sortedResults = request?.data?.results.sort(
        (a, b) => b.rating - a.rating
      )
      setNearbyPlaces(
        sortedResults.filter((el) => {
          return el.rating >= rating && el.rating <= rating + 1
        })
      )
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
      <MapInput
        nearbyPlaces={nearbyPlaces}
        location={location}
        getLocation={getLocation}
        mapRef={mapRef}
      />
      <RestaurantList
        nearbyPlaces={nearbyPlaces}
        isLoaded={isLoaded}
        type={'homepage'}
        navigation={navigation}
        setMapRadius={setMapRadius}
        setRating={setRating}
        rating={rating}
        priceFilter={priceFilter}
        setPriceFilter={setPriceFilter}
      />
    </>
  )
}

export default HomeScreenContainer
