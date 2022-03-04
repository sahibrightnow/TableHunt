import React from 'react';
import { API_KEY } from "react-native-dotenv";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import Geolocation from 'react-native-geolocation-service';
// navigator.geolocation = require('react-native-geolocation-service');



const GooglePlacesInput = () => {

    // if (hasLocationPermission) {
    //     Geolocation.getCurrentPosition(
    //         (position) => {
    //             console.log(position);
    //         },
    //         (error) => {
    //             // See error code charts below.
    //             console.log(error.code, error.message);
    //         },
    //         { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    //     );
    // }

    const homePlace = {
        description: 'Home',
        geometry: { location: { lat: 49.246292, lng: -123.116226 } },
    };

    return (
        <GooglePlacesAutocomplete
            placeholder='Search'
            minLength={0}
            autoFocus={false}
            predefinedPlaces={[homePlace]}
            returnKeyType={'search'}
            listViewDisplayed='auto'
            fetchDetails={true}
            renderDescription={row => row.description}
            keyboardAppearance={'light'}
            styles={{
                textInputContainer: {
                    backgroundColor: 'grey',
                    width: '100%'
                },
                textInput: {
                    height: 38,
                    color: '#5d5d5d',
                    fontSize: 16,
                },
                predefinedPlacesDescription: {
                    color: '#1faadb',
                },
                description: {
                    color: '#1faadb',
                    fontWeight: 'bold',
                },
            }}
            onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(data, details);
            }}
            onFail={(error) => console.error(error)}
            getDefaultValue={() => ''}
            query={{
                key: API_KEY,
                language: 'en',
                types: '(cities)'
            }}
            requestUrl={{
                useOnPlatform: 'all', // or "all"
                url:
                    'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api', // or any proxy server that hits https://maps.googleapis.com/maps/api

            }}

            GooglePlacesDetailsQuery={{
                fields: 'formatted_address',
            }}
            GooglePlacesSearchQuery={{
                rankby: 'distance',
                type: ['cafe', 'restaurant', 'food'] // https://developers.google.com/places/web-service/supported_types
            }}
            filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}
            debounce={200}
            // currentLocation={true}
            // currentLocationLabel='Current location'
            keyboardShouldPersistTaps='never'


        />
    );
};

export default GooglePlacesInput;