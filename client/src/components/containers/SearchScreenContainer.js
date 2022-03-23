import { ScrollView, VStack, Heading, Image, HStack } from "native-base";
import React, { useEffect, useState } from "react";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { API_KEY } from 'react-native-dotenv'
import SvgUri from 'react-native-svg-uri'
import GooglePlacesInput from '../forms/GooglePlacesInput'
import { TouchableOpacity } from 'react-native'
import { Button, Actionsheet, useDisclose, Text, Box, Center, NativeBaseProvider } from "native-base";
import SearchPageSkeletonCard from '../listitems/SearchPageSkeletonCard'
import SearchPageRestaurantCard from '../listitems/SearchPageRestaurantCard'

const SearchScreenContainer = ({ data }) => {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclose();

  const [restaurantType, setRestaurantType] = useState()

  return (
    <VStack space={10} py={20} px={5}>
      <GooglePlacesInput searchRestuarant={"searchRestuarant"} />
      <Heading size="lg" mt="12" ml="5">
        Cuisines
      </Heading>

      <VStack space={4} px={5} mt="-6">

        <HStack space={3}>
          <TouchableOpacity onPress={onOpen} activeOpacity={0.8}>
            <Image
              source={require('../assets/searchPage/cuisine_Punjabi.png')}
              alt="Punjabi"
              width={150}
              rounded="lg"
            // onPress={setRestaurantType("punjabi")}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={onOpen} activeOpacity={0.8}>
            <Image
              source={require('../assets/searchPage/cuisine_Korean.png')}
              alt="image base"
              width={150}
              rounded="lg"
            />
          </TouchableOpacity>
        </HStack >
        <HStack space={3}>
          <TouchableOpacity onPress={onOpen} activeOpacity={0.8}>
            <Image //chinese img has a shadow
              source={require('../assets/searchPage/cuisine_Chinese.png')}
              alt="image base"
              width={150}
              rounded="lg"
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={onOpen} activeOpacity={0.8}>
            <Image
              source={require('../assets/searchPage/cuisine_Italian.png')}
              alt="image base"
              width={150}
              rounded="lg"
            />
          </TouchableOpacity>
        </HStack>
        <HStack space={3}>
          <TouchableOpacity onPress={onOpen} activeOpacity={0.8}>
            <Image
              source={require('../assets/searchPage/cuisine_Vietnamese.png')}
              alt="image base"
              width={150}
              rounded="lg"
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={onOpen} activeOpacity={0.8}>
            <Image
              source={require('../assets/searchPage/cuisine_Lebanese.png')}
              alt="image base"
              width={150}
              rounded="lg"
            />
          </TouchableOpacity>
        </HStack>
        <HStack space={3}>
          <TouchableOpacity onPress={onOpen} activeOpacity={0.8}>
            <Image
              source={require('../assets/searchPage/cuisine_Greek.png')}
              alt="image base"
              width={150}
              rounded="lg"
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={onOpen} activeOpacity={0.8}>
            <Image
              source={require('../assets/searchPage/cuisine_Japanese.png')}
              alt="image base"
              width={150}
              rounded="lg"
            />
          </TouchableOpacity>
        </HStack>
        <HStack space={3}>
          <TouchableOpacity onPress={onOpen} activeOpacity={0.8}>
            <Image
              source={require('../assets/searchPage/cuisine_French.png')}
              alt="image base"
              width={150}
              rounded="lg"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onOpen} activeOpacity={0.8}>
            <Image
              source={require('../assets/searchPage/cuisine_Cantonese.png')}
              alt="image base"
              width={150}
              rounded="lg"
            />
          </TouchableOpacity>
        </HStack>

      </VStack >

      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Text fontSize="18" color="gray.600" _dark={{
              color: "gray.300"
            }}>
              {restaurantType} Restaurants
            </Text>
          </Box>
          <ScrollView vertical={true} w={380}
            showsVerticalScrollIndicator={false}>
            <VStack space={2}>
              <SearchPageRestaurantCard />
              <SearchPageSkeletonCard />
              <SearchPageSkeletonCard />
              <SearchPageSkeletonCard />
              <SearchPageSkeletonCard />
            </VStack>
          </ScrollView>

        </Actionsheet.Content>
      </Actionsheet>

    </VStack >
  )
};

export default SearchScreenContainer;
