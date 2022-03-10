import { Center, VStack, Text, ScrollView, View } from "native-base";
import React from "react";
import GooglePlacesInput from "../forms/GooglePlacesInput";
// import { API_KEY } from "react-native-dotenv";
// import AppLoading from 'expo-app-loading';

// import {
//   useFonts,
//   Poppins_400Regular,
//   Poppins_500Medium,
//   Poppins_600SemiBold,
//   Poppins_700Bold,
// } from '@expo-google-fonts/poppins';

const HomeScreenContainer = ({ data }) => {
  // let [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }
  return (
    <GooglePlacesInput />
  );
};

export default HomeScreenContainer;
