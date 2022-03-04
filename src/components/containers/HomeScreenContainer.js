import { Center, VStack, Text, View } from "native-base";
import React from "react";
import GooglePlacesInput from "../forms/GooglePlacesInput";
// import { API_KEY } from "react-native-dotenv";

const HomeScreenContainer = ({ data }) => {
  return (
    <VStack space={5} py={10} px={5}>
      <Center>HOME SCREEN
        {/* <Text>{API_KEY}</Text> */}

      </Center>
      <GooglePlacesInput />

    </VStack>
  );
};

export default HomeScreenContainer;
