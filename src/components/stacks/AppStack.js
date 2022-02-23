import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import BookingsScreen from "../screens/BookingsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SvgUri from "react-native-svg-uri";
import { LogBox } from "react-native-web";

const Tab = createBottomTabNavigator();

const TabStack = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => (
          // <Image
          //   source={require("../assets/nav_icons/home_png.png")}
          //   alt="Home Nav Icon"
          //   style={{
          //     width: size,
          //     height: size,
          //   }}
          // />
          <SvgUri source={require("../assets/nav_icons/homeIcon.svg")} />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => (
          <SvgUri source={require("../assets/nav_icons/searchIcon.svg")} />
        ),
      }}
    />
    <Tab.Screen
      name="Bookings"
      component={BookingsScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => (
          <SvgUri source={require("../assets/nav_icons/bookingsIcon.svg")} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => (
          <SvgUri source={require("../assets/nav_icons/profileIcon.svg")} />
        ),
      }}
    />
  </Tab.Navigator>
);

const Stack = createNativeStackNavigator();

const AppStack = () => {
  // temporarily hides all warnings
  console.disableYellowBox = true;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomePage"
          component={TabStack}
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen
          name="Details Page"
          component={DetailScreen}
          options={({ route }) => ({
            title: route.params.title,
            headerBackTitle: "Back to List",
          })}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
