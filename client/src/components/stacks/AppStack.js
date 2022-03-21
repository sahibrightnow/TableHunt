import React, { useState,  useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import BookingsScreen from '../screens/BookingsScreen'
import ProfileScreen from '../screens/ProfileScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SvgUri from 'react-native-svg-uri'
import Authentication from '../layout/authentication'
import RestaurantScreen from '../screens/RestaurantScreen'





const Tab = createBottomTabNavigator()

const TabStack = () => (
 

  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => (
          //   // <Image
          //   //   source={require("../assets/nav_icons/home_png.png")}
          //   //   alt="Home Nav Icon"
          //   //   style={{
          //   //     width: size,
          //   //     height: size,
          //   //   }}
          //   // />
          <SvgUri source={require('../assets/nav_icons/homeIcon.svg')} />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => (
          <SvgUri source={require('../assets/nav_icons/searchIcon.svg')} />
        ),
      }}
    />
    <Tab.Screen
      name="Bookings"
      component={BookingsScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => (
          <SvgUri source={require('../assets/nav_icons/bookingsIcon.svg')} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={()=> <ProfileScreen/>}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => (
          <SvgUri source={require('../assets/nav_icons/profileIcon.svg')} />
        ),
      }}
     

    />
  </Tab.Navigator >
)

const Stack = createNativeStackNavigator()

const AppStack = () => {
  // temporarily hides all warnings
  console.disableYellowBox = true;

  const [accessToken, setAccessToken] = useState();
  const [userInfo, setUserInfo] = useState();

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Authentication'>
        <Stack.Screen
          name="Authentication"
          options={{
            headerShown: false,
          }}
        >{() => <Authentication setAccessToken={setAccessToken} setUserInfo={setUserInfo} accessToken={accessToken} userInfo={userInfo} />}</Stack.Screen>

        <Stack.Screen
          name="HomePage"
          component={TabStack}
          options={{
            headerShown: false,
          }}
       />
        <Stack.Screen
          name="Restaurant Page"
          component={RestaurantScreen}
          options={() => ({
            headerBackTitle: "Back",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppStack
