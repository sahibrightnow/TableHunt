import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Center, VStack, Text, Actionsheet, useDisclose, Box, NativeBaseProvider } from "native-base";
import Constants from 'expo-constants';
import { API_KEY } from "react-native-dotenv";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import Geolocation from 'react-native-geolocation-service';
import * as Location from 'expo-location';

const GooglePlacesInput = () => {
    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();

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
                // onPress={(data, details = null) => {
                //     console.log("DATA", data)
                //     console.log("DETAILS", details)
                // }}
                onPress={onOpen}
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
            <Actionsheet isOpen={isOpen} onClose={onClose}>
                <Actionsheet.Content>
                    <Box w="100%" h={60} px={4} justifyContent="center">
                        <Text fontSize="16" color="gray.500" _dark={{
                            color: "gray.300"
                        }}>
                            Albums
                        </Text>
                    </Box>
                    <Actionsheet.Item>Delete</Actionsheet.Item>
                    <Actionsheet.Item>Share</Actionsheet.Item>
                    <Actionsheet.Item>Play</Actionsheet.Item>
                    <Actionsheet.Item>Favourite</Actionsheet.Item>
                    <Actionsheet.Item>Cancel</Actionsheet.Item>
                </Actionsheet.Content>
            </Actionsheet>
        </VStack>

    );
};

export default GooglePlacesInput;