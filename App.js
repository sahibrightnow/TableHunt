import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider } from 'native-base'
import AppStack from './src/components/stacks/AppStack'
import Authentication from './src/components/layout/authentication'

const App = () => {
  return (
    <NativeBaseProvider>
      <AppStack />
      <StatusBar style="light" />
      {/* <View style={styles.container}>
        <Authentication/>
        <StatusBar style="auto" />
      </View> */}
    </NativeBaseProvider>
  )
}

export default App
