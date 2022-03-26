import React, { useState, useRef } from 'react'
import axios from 'axios'
import { API_KEY } from 'react-native-dotenv'
import * as Location from 'expo-location'


const LocationAndPlacesNearby = () => {
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

    const getNearbyPlaces = () => {
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
    }

}

export { LocationAndPlacesNearby }