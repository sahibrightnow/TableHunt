import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import {
  Center,
  HStack,
  Text,
  Actionsheet,
  useDisclose,
  Box,
  Button,
  ScrollView,
  View,
  FlatList,
  Image,
  Stack,
  Heading,
} from 'native-base'
import Constants from 'expo-constants'
import { API_KEY } from 'react-native-dotenv'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
// import Geolocation from 'react-native-geolocation-service';
import * as Location from 'expo-location'
import { MaterialIcons } from '@expo/vector-icons'
// import BottomList from '../lists/BottomList';

const GooglePlacesInput = () => {
  const { isOpen, onOpen, onClose } = useDisclose()

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
      <GooglePlacesAutocomplete
        placeholder="Search"
        query={{
          key: API_KEY,
          language: 'en', // language of the results
          location: location
            ? `${location.latitude},${location.longitude}`
            : '49.246292,-123.116226',
          radius: 1000,
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
          url: 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
          useOnPlatform: 'web',
        }} // this in only required for use on the web. See https://git.io/JflFv more for details.
        enablePoweredByContainer={false}
        // currentLocation={true}
        // currentLocationLabel='Current location'
        // getAddressText={(data) => data.description}
      />

      {/* <Button bgColor="danger.200" ml={2} onPress={onOpen} h={12}>
        <MaterialIcons name="filter-list" size={24} color="white" />
      </Button> */}

      {/* <Actionsheet
                isOpen={isOpen}
                onClose={onClose}
            >
                <Actionsheet.Content>

                    <ScrollView horizontal={true}>

                        <Actionsheet.Item maxWidth="270px">
                            <Box bg="white" shadow={2} rounded="lg" maxWidth="260px">
                                <Image source={{
                                    uri: "https://sample-example.nativebase.io/static/media/dawki-river.ebbf5434.png"
                                }} alt="image base" resizeMode="cover" height={150} roundedTop="md" />
                                <Stack space={4} p={[4, 4, 8]}>
                                    <Text color="gray.400">June 22, 2021</Text>
                                    <Heading size={["md", "lg", "md"]} noOfLines={2}>
                                        The Stunning Dawki River in Meghalaya is So Clear That Boats Appear
                                        Floating in Air
                                    </Heading>
                                    <Text lineHeight={[5, 5, 7]} noOfLines={[4, 4, 2]} color="gray.700" lineHeight={"22px"}>
                                        With lush green meadows, rivers clear as crystal, pine-covered
                                        hills, gorgeous waterfalls, lakes and majestic forests, the
                                        mesmerizing…
                                    </Text>
                                </Stack>
                            </Box>
                        </Actionsheet.Item>
                        <Actionsheet.Item maxWidth="270px">
                            <Box bg="white" shadow={2} rounded="lg" maxWidth="260px">
                                <Image source={{
                                    uri: "https://sample-example.nativebase.io/static/media/dawki-river.ebbf5434.png"
                                }} alt="image base" resizeMode="cover" height={150} roundedTop="md" />
                                <Stack space={4} p={[4, 4, 8]}>
                                    <Text color="gray.400">June 22, 2021</Text>
                                    <Heading size={["md", "lg", "md"]} noOfLines={2}>
                                        The Stunning Dawki River in Meghalaya is So Clear That Boats Appear
                                        Floating in Air
                                    </Heading>
                                    <Text lineHeight={[5, 5, 7]} noOfLines={[4, 4, 2]} color="gray.700" lineHeight={"22px"}>
                                        With lush green meadows, rivers clear as crystal, pine-covered
                                        hills, gorgeous waterfalls, lakes and majestic forests, the
                                        mesmerizing…
                                    </Text>
                                </Stack>
                            </Box>
                        </Actionsheet.Item> 
                        <Actionsheet.Item maxWidth="270px">
                            <Box bg="white" shadow={2} rounded="lg" maxWidth="260px">
                                <Image source={{
                                    uri: "https://sample-example.nativebase.io/static/media/dawki-river.ebbf5434.png"
                                }} alt="image base" resizeMode="cover" height={150} roundedTop="md" />
                                <Stack space={4} p={[4, 4, 8]}>
                                    <Text color="gray.400">June 22, 2021</Text>
                                    <Heading size={["md", "lg", "md"]} noOfLines={2}>
                                        The Stunning Dawki River in Meghalaya is So Clear That Boats Appear
                                        Floating in Air
                                    </Heading>
                                    <Text lineHeight={[5, 5, 7]} noOfLines={[4, 4, 2]} color="gray.700" lineHeight={"22px"}>
                                        With lush green meadows, rivers clear as crystal, pine-covered
                                        hills, gorgeous waterfalls, lakes and majestic forests, the
                                        mesmerizing…
                                    </Text>
                                </Stack>
                            </Box>
                        </Actionsheet.Item>
                        <Actionsheet.Item maxWidth="270px">
                            <Box bg="white" shadow={2} rounded="lg" maxWidth="260px">
                                <Image source={{
                                    uri: "https://sample-example.nativebase.io/static/media/dawki-river.ebbf5434.png"
                                }} alt="image base" resizeMode="cover" height={150} roundedTop="md" />
                                <Stack space={4} p={[4, 4, 8]}>
                                    <Text color="gray.400">June 22, 2021</Text>
                                    <Heading size={["md", "lg", "md"]} noOfLines={2}>
                                        The Stunning Dawki River in Meghalaya is So Clear That Boats Appear
                                        Floating in Air
                                    </Heading>
                                    <Text lineHeight={[5, 5, 7]} noOfLines={[4, 4, 2]} color="gray.700" lineHeight={"22px"}>
                                        With lush green meadows, rivers clear as crystal, pine-covered
                                        hills, gorgeous waterfalls, lakes and majestic forests, the
                                        mesmerizing…
                                    </Text>
                                </Stack>
                            </Box>
                        </Actionsheet.Item>
                        <Actionsheet.Item maxWidth="270px">Cancel</Actionsheet.Item>
                    </ScrollView>

                </Actionsheet.Content>
            </Actionsheet> */}
    </HStack>
  )
}

export default GooglePlacesInput
