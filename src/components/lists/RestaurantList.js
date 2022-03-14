// import { Actionsheet } from 'native-base';

// const BottomList = () => {

//     return (
//         <>
//             <Actionsheet>
//                 <Actionsheet.Content>
//                     <Box w="100%" h={60} px={4} justifyContent="center">
//                         <Text fontSize="16" color="gray.500" _dark={{
//                             color: "gray.300"
//                         }}>
//                             Albums
//                         </Text>
//                     </Box>
//                     <Actionsheet.Item>Delete</Actionsheet.Item>
//                     <Actionsheet.Item>Share</Actionsheet.Item>
//                     <Actionsheet.Item>Play</Actionsheet.Item>
//                     <Actionsheet.Item>Favourite</Actionsheet.Item>
//                     <Actionsheet.Item>Cancel</Actionsheet.Item>
//                 </Actionsheet.Content>
//             </Actionsheet>
//         </>
//     );
// }

// export default BottomList;

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
          <RestaurantCard restaurant={el} key={index} />
        ))}
      </ScrollView>
    </View>
  )
}

export default RestaurantList
