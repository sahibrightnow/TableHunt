import RestaurantCard from '../listitems/RestaurantCard'
import FilterButtonsList from '../lists/FilterButtonsList'
import { HStack, ScrollView, View, VStack, Skeleton } from 'native-base'
import SkeletonCard from '../listitems/SkeletonCard'
import React from 'react'

const RestaurantList = ({ nearbyPlaces, isLoaded, setIsLoaded }) => {


  return (
    <View flex={1} p={'6px'}>
      <FilterButtonsList
        totalMatchedRestaurants={nearbyPlaces.length} isLoaded={isLoaded} />
      {/* {nearbyPlaces.length > 0 ? setIsLoaded(true) : setIsLoaded(false)} */}

      {isLoaded
        ?
        <ScrollView horizontal={true}
          showsHorizontalScrollIndicator={false}>
          {nearbyPlaces.map((el, index) => (
            <RestaurantCard key={index} restaurant={el} />
          ))}
        </ScrollView>
        :
        <HStack space={5} ml={2}>
          <SkeletonCard />
          <SkeletonCard />
        </HStack>
      }
    </View>
  )
}

export default RestaurantList
