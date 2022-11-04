import { REACT_APP_API_KEY } from 'react-native-dotenv'
import {
  Box,
  Stack,
  Text,
  Heading,
  Image,
  Button,
  ScrollView,
} from 'native-base'
import StarIcon from '../assets/iconComponents/StarIcon'

const HomepageRestaurantCard = (props) => {
  const navigation = props.navigation
  const restaurant = props.restaurant

  return (
    <Box bg='white' shadow={2} rounded='lg' width='300px' m={'10px'}>
      <Image
        source={{
          uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${props.photoRef}&key=${REACT_APP_API_KEY}`,
        }}
        alt='image base'
        resizeMode='cover'
        height={200}
        roundedTop='md'
      />
      <Button
        width='25%'
        bgColor={'green.300'}
        style={{
          position: 'absolute',
          bottom: 130,
          right: 12,
        }}
        onPress={() => navigation.navigate('Restaurant Page', { restaurant })}
      >
        View
      </Button>

      <Stack space={2} p={[3, 3, 6]}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Heading size={'md'} noOfLines={2}>
            {props.restaurantName ? props.restaurantName : 'Name not Available'}
          </Heading>
        </ScrollView>

        <Stack space={1} mt={'auto'}>
          <Text color='green.300'>
            <StarIcon color='#FFD600' />
            {props.restaurantRating} {props.ratingDescription}
            <Text color='gray.600'>({props.totalUserReviews})</Text>
          </Text>
          <Text color='danger.300' ml={1} mt={0.5}>
            {props.priceRating}
          </Text>
        </Stack>
      </Stack>
    </Box>
  )
}

export default HomepageRestaurantCard
