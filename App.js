// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Image, Button } from 'react-native';
// import React from 'react';

// export default function App() {

//   return (
//     <View style={styles.container}>
//       <Text>TableHunt</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import AppStack from "./src/components/stacks/AppStack";

const App = () => {
  return (
    <NativeBaseProvider>
      <AppStack />
      <StatusBar style="light" />
    </NativeBaseProvider>
  );
};

export default App;
