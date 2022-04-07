import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import ReservationsScreen from '../screens/ReservationsScreen'
import BookingsScreen from '../screens/BookingsScreen'
import ProfileScreen from '../screens/ProfileScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Authentication from '../layout/authentication'
import RestaurantScreen from '../screens/RestaurantScreen'
import { LogBox } from 'react-native'
import BookingsIcon from '../assets/iconComponents/BookingsIcon'
import HomeIcon from '../assets/iconComponents/HomeIcon'
import SearchIcon from '../assets/iconComponents/SearchIcon'
import ProfileIcon from '../assets/iconComponents/ProfileIcon'
import RestaurantOwnerScreen from '../screens/RestaurantOwnerScreen'
import OwnerAuthentication from '../layout/OwnerAuthentication'
import SvgUri from 'react-native-svg-uri'
import RestuarantBookings from '../screens/RestuarantBookings'
const Tab = createBottomTabNavigator()

const navColors = {
  primary: '#924344',
  secondary: '#9CA3AF'
}

const tabScreenOptions = {
  headerShown: false,
  tabBarLabelStyle: { fontSize: 10.5, fontWeight: 'bold' },
}

const TabStack = () => (

  < Tab.Navigator
    screenOptions={() => ({
      tabBarActiveTintColor: navColors.primary,
      tabBarInactiveTintColor: navColors.secondary,
    })}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        ...tabScreenOptions,
        tabBarIcon: ({ focused, color, size }) => (
          // <SvgUri source={require('../assets/nav_icons/homeIcon.svg')}
          //   fill={focused ? navColors.primary : navColors.secondary} />
          <HomeIcon color={focused ? navColors.primary : navColors.secondary} />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchScreen}
      options={{
        ...tabScreenOptions,
        tabBarIcon: ({ focused, color, size }) => (
          // <SvgUri source={require('../assets/nav_icons/searchIcon.svg')}
          //   fill={focused ? navColors.primary : navColors.secondary} />
          <SearchIcon color={focused ? navColors.primary : navColors.secondary} />
        ),
      }}
    />
    <Tab.Screen
      name="Reservations"
      component={ReservationsScreen}
      options={{
        ...tabScreenOptions,
        tabBarIcon: ({ focused, color, size }) => (
          // <SvgUri source={require('../assets/nav_icons/bookingsIcon.svg')}
          //   fill={focused ? navColors.primary : navColors.secondary} />
          <BookingsIcon color={focused ? navColors.primary : navColors.secondary} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        ...tabScreenOptions,
        tabBarIcon: ({ focused, color, size }) => (
          // <SvgUri
          //   source={require('../assets/nav_icons/profileIcon.svg')}
          //   fill={focused ? navColors.primary : navColors.secondary} />
          <ProfileIcon color={focused ? navColors.primary : navColors.secondary} />
        ),
      }}
    />
  </Tab.Navigator>
)

// const OwnerScreen = () => (
//   <Tab.Navigator>
//     <Tab.Screen
//       name="Bookings"
//       component={RestuarantBookings}
//       options={{
//         headerShown: false,
//         tabBarIcon: ({ focused, color, size }) => (
//           <SvgUri source={require('../assets/nav_icons/bookingsIcon.svg')} />
//         ),
//       }}
//     />
//     <Tab.Screen
//       name="Profile"
//       component={RestaurantOwnerScreen}
//       options={{
//         headerShown: false,
//         tabBarIcon: ({ focused, color, size }) => (
//           <SvgUri source={require('../assets/nav_icons/profileIcon.svg')} />
//         ),
//       }}
//     />
//   </Tab.Navigator>
// )

const Stack = createNativeStackNavigator()

const AppStack = () => {
  // temporarily hides all warnings
  // console.disableYellowBox = true;
  LogBox.ignoreAllLogs()

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Authentication'>
        <Stack.Screen
          name="Authentication"
          options={{
            headerShown: false,
          }}
        >{() => <Authentication />}</Stack.Screen>

        <Stack.Screen
          name="HomePage"
          component={TabStack}
          options={{
            headerShown: false,
            headerBackTitleVisible: false
          }}
        />

        <Stack.Screen
          name="Restaurant Page"
          component={RestaurantScreen}
          options={() => ({
            headerTitle: "Restaurant Details",
            headerBackTitleVisible: false
          })}
        />

        <Stack.Screen
          name="Booking Page"
          component={BookingsScreen}
          options={() => ({
            headerBackTitle: "Back",
            headerTitle: "Choose your table",
            headerBackTitleVisible: false
          })}
        />

        {/* <Stack.Screen
          name="OwnerAuthentication"
          component={OwnerAuthentication}
          options={{
            headerShown: false,
            headerBackTitleVisible: false
          }}
        />

        <Stack.Screen
          name="Restaurant Owner"
          component={RestaurantOwnerScreen}
        />

        <Stack.Screen
          name="OwnerHomepage"
          component={OwnerScreen}
          options={{
            headerShown: false,
            headerBackTitleVisible: false
          }}
        /> */}

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppStack
