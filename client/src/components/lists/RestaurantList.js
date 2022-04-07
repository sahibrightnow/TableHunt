import RestaurantCard from '../listitems/RestaurantCard'
import FilterButtonsList from '../lists/FilterButtonsList'
import { HStack, ScrollView, View } from 'native-base'
import SkeletonCard from '../listitems/SkeletonCard'
import React from 'react'

const RestaurantList = ({ nearbyPlaces, isLoaded, type, navigation, setMapRadius, setRating, rating, setPriceFilter, priceFilter }) => {
  return (
    < View flex={1} p={'10px'} >
      <FilterButtonsList
        totalMatchedRestaurants={nearbyPlaces.length} isLoaded={isLoaded} setMapRadius={setMapRadius} setRating={setRating} rating={rating} setPriceFilter={setPriceFilter} priceFilter={priceFilter} />

      {
        isLoaded
          ?
          <ScrollView horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <HStack ml="-1">
              {nearbyPlaces.map((el, index) => (
                <RestaurantCard key={index} restaurant={el} type={type} navigation={navigation} />
              ))}
            </HStack>
          </ScrollView>
          :
          <HStack space={5} ml="1">
            <SkeletonCard />
            <SkeletonCard />
          </HStack>
      }
    </View >
  )
}

export default RestaurantList
