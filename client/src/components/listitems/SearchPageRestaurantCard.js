import { REACT_APP_API_KEY } from 'react-native-dotenv'
import {
  VStack,
  HStack,
  Text,
  Heading,
  Image,
  Center,
  Button,
} from 'native-base'

const SearchPageRestaurantCard = (props) => {
  const restaurant = props.restaurant
  const navigation = props.navigation

  return (
    <Center w='100%'>
      <HStack
        w='95%'
        maxW='400'
        borderWidth='1'
        space={1}
        rounded='md'
        _dark={{
          borderColor: 'coolGray.500',
        }}
        _light={{
          borderColor: 'coolGray.200',
        }}
        p='2'
      >
        <Image
          source={{
            uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${props.photoRef}&key=${REACT_APP_API_KEY}`,
          }}
          alt='Res image'
          width={140}
          height={150}
          resizeMode='cover'
          rounded='sm'
        />
        <VStack ml='2' mt={2} space={1} m='auto'>
          <Heading size={'md'} noOfLines={1} maxW={200}>
            {props.restaurantName ? props.restaurantName : 'Name not Available'}
          </Heading>
          <Text fontSize='sm'>Rating: {props.restaurantRating} </Text>
          <Text fontSize='sm'>
            Reviews: {props.totalUserReviews} | {props.ratingDescription}
          </Text>
          <Text fontSize='sm'>{props.priceRating}</Text>
          <Button
            mt={2}
            w='100%'
            bgColor={'green.300'}
            onPress={() => {
              props.onClose()
              setTimeout(() => {
                navigation.navigate('Restaurant Page', { restaurant })
              }, 700)
            }}
          >
            View
          </Button>
        </VStack>
      </HStack>
    </Center>
  )
}

export default SearchPageRestaurantCard
