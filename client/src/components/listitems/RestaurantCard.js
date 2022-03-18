import { Box, Stack, Text, Heading, Image, Center, Button } from 'native-base'
import { API_KEY } from 'react-native-dotenv'
import { useNavigation } from '@react-navigation/native'
import SvgUri from 'react-native-svg-uri'


const RestaurantCard = ({ restaurant }) => {
  const navigation = useNavigation()

  const restaurantName = restaurant?.name
  const photoRef = restaurant?.photos[0]?.photo_reference
  const restaurantRating = restaurant?.rating
  const totalUserReviews = restaurant?.user_ratings_total
  const priceLevel = restaurant?.price_level
  let priceRating
  let ratingDescription

  switch (priceLevel) {
    case 1:
      priceRating = `$5-$10 Per Person`
      break
    case 2:
      priceRating = `$11-$20 Per Person`
      break
    case 3:
      priceRating = `$21-$30 Per Person`
      break
    case 4:
      priceRating = `$31+ Per Person`
      break
    default:
      priceRating = 'Not Available'
  }

  switch (Math.round(restaurantRating)) {
    case 1:
      ratingDescription = `Very Bad`
      break
    case 2:
      ratingDescription = `Bad`
      break
    case 3:
      ratingDescription = `Average`
      break
    case 4:
      ratingDescription = `Good`
      break
    default:
      ratingDescription = 'Excellent'
  }

  return (
    <Box bg="white" shadow={2} rounded="lg" width="300px" m={'10px'}>
      <Image
        source={{
          uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRef}&key=${API_KEY}`
        }}
        alt="image base"
        resizeMode="cover"
        height={200}
        roundedTop="md"
      />
      <Button
        width="33%"
        bgColor={'green.300'}
        style={{
          position: "absolute", bottom: 125, right: 8
        }}
        onPress={() =>
          navigation.navigate("Restaurant Page", { restaurant })
        }
      >
        View Menu
      </Button>


      <Stack space={2} p={[3, 3, 6]}>
        <Heading size={'md'} noOfLines={2}>
          {restaurantName ? restaurantName : "Name not Available"}
        </Heading>
        <Stack space={1} mt={'auto'}>
          <Text color="green.300">
            <SvgUri source={require('../assets/star.svg')} />
            {restaurantRating} {ratingDescription}

            <Text color="gray.600">
              ({totalUserReviews}) | Change later
            </Text>
          </Text>
          <Text color="danger.300" ml={1}>
            {priceRating}
          </Text>
        </Stack>
      </Stack>
    </Box>
  )
}

export default RestaurantCard
