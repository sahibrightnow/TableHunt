import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Center, VStack, Text } from "native-base";
import Constants from 'expo-constants';
import { API_KEY } from "react-native-dotenv";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import Geolocation from 'react-native-geolocation-service';
import * as Location from 'expo-location';
// navigator.geolocation = require('react-native-geolocation-service');
// import * as Permissions from 'expo-permissions';


const GooglePlacesInput = () => {

    // const homePlace = {
    //     description: 'Home',
    //     geometry: { location: { lat: 49.246292, lng: -123.116226 } },
    // };

    const [location, setLocation] = useState();

    const getLocation = async () => {
        try {
            const { granted } = await Location.requestPermissionsAsync();
            if (!granted) return;
            const {
                coords: { latitude, longitude },
            } = await Location.getCurrentPositionAsync();
            setLocation({ latitude, longitude });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getLocation();
    }, []);

    return (
        <VStack
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
            <GooglePlacesAutocomplete
                placeholder="Search"
                query={{
                    key: API_KEY,
                    language: 'en', // language of the results
                    components: 'country:ca', // only Canada
                    types: 'establishment',
                }}
                GooglePlacesSearchQuery={{
                    // rankby: 'distance',
                    types: ['restaurant', 'cafe'],
                }}
                onPress={(data, details = null) => console.log(data)}
                onFail={(error) => console.error(error)}
                requestUrl={{
                    url:
                        'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
                    useOnPlatform: 'web',
                }} // this in only required for use on the web. See https://git.io/JflFv more for details.
                enablePoweredByContainer={false}
            // currentLocation={true}
            // currentLocationLabel='Current location'
            // getAddressText={(data) => data.description}
            />
            {/* {location ? <Text>Lat: {location.latitude} and Long: {location.longitude}</Text> : null} */}
        </VStack>

    );
};

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 10,
//         paddingTop: Constants.statusBarHeight + 10,
//         backgroundColor: '#ecf0f1',
//         height: '100%',
//     },
// });

export default GooglePlacesInput;