// import { MapView } from 'expo'
import MapView from 'react-native-maps'
import { Dimensions } from 'react-native'
import * as Location from 'expo-location';
import React, { useState, useEffect } from 'react';

const MapInput = ({ naviagtion }) => {
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
        <MapView
            // flex={1}
            height={Dimensions.get('window').height}
            loadingEnabled={true}
            region={{
                latitude: location ? location.latitude : 49.246292,
                longitude: location ? location.longitude : -123.116226,
                // latitudeDelta: 0.0922,
                latitudeDelta: 0.015,
                // longitudeDelta: 0.0421,
                longitudeDelta: 0.0121,
            }}>
            {location ? <MapView.Marker
                coordinate={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                }}
                title={"Location"}
                description={`This is my Location description. ${location.latitude}, ${location.longitude}`}
            /> : null}
        </MapView>
    )
}

export default MapInput;