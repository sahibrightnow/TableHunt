import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider, extendTheme } from 'native-base'
import AppStack from './src/components/stacks/AppStack'
import AppLoading from 'expo-app-loading'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import Authentication from './src/components/layout/authentication'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const App = () => {
  // Color Palette
  // black = #14110F
  // singletons.white = #FFFFFF

  // Rename Primary.50 in Color pallette to light.50
  // Primary.50 = #f4f2f0

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  const theme = extendTheme({
    colors: {
      singletons: {
        black: '#14110F',
        // white: "#FFFFFF",
      },
      gray: {
        100: '#9CA3AF',
      },
      light: {
        50: '#f4f2f0',
        100: '#d6dfd9',
      },
      green: {
        50: '#ecf2ee',
        100: '#edf8e6',
        200: '#d4e6c8',
        300: '#6a994e',
      },
      danger: {
        100: '#ffd7dc',
        200: '#ef233c',
      },
      warning: {
        100: '#fff7db',
        200: '#fabc2a',
        300: '#ecf2ee',
      },
    },

    // Fonts
    // fontConfig: {
    //   Poppins: {
    //     100: {
    //       normal: Poppins_400Regular,
    //     },
    //     200: {
    //       normal: Poppins_500Medium,
    //     },
    //     300: {
    //       normal: Poppins_600SemiBold,
    //     },
    //     400: {
    //       normal: Poppins_700Bold,
    //     },
    //   },
    // },
    // fonts: {
    //   body: 'Poppins'
    // },
  })

  return (
    <NativeBaseProvider theme={theme}>
      {/* <AppStack />
      <StatusBar style="light" /> */}
      <View style={styles.container}>
        <Authentication />
        <StatusBar style="auto" />
      </View>
    </NativeBaseProvider>
  )
}

export default App
