import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import { NativeBaseProvider } from 'native-base'
import AppStack from './src/components/stacks/AppStack'
import Authentication from './src/components/layout/authentication'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const App = () => {
  return (
    <NativeBaseProvider>
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
