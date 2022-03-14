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
import { Container, ScrollView, Text} from 'native-base'
import React from 'react'

const RestaurantList = ({ nearbyPlaces }) => {
  return (
    <Container flex={1}>
      <ScrollView horizontal={true}>
        {nearbyPlaces && nearbyPlaces.map((el, index) => (
          <RestaurantCard restaurantName={el.name} key={index}/>
        ))} 
      </ScrollView>
     </Container>
  )
}

export default RestaurantList
