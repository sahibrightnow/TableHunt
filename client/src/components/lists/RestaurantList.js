import RestaurantCard from '../listitems/RestaurantCard'
import FilterButtonsList from '../lists/FilterButtonsList'
import { Container, ScrollView, View, Text } from 'native-base'
import React from 'react'


const RestaurantList = ({ nearbyPlaces }) => {
  return (
    <View flex={1} p={'10px'}>
      <FilterButtonsList totalMatchedRestaurants={nearbyPlaces.length} />
      <ScrollView horizontal={true}>
        {nearbyPlaces && nearbyPlaces.map((el, index) => (
          // console.log(el.photos[0].photo_reference)
          <RestaurantCard key={index} restaurant={el} />
        ))}
      </ScrollView>
    </View>
  )
}

export default RestaurantList
