import { VStack, HStack, Text, Heading, Image, Center, Button } from 'native-base'
import { API_KEY } from 'react-native-dotenv'
import { useNavigation } from '@react-navigation/native'
import SvgUri from 'react-native-svg-uri'


const SearchPageRestaurantCard = ({ restaurant }) => {
    // const navigation = useNavigation()

    // const restaurantName = restaurant?.name
    // const photoRef = restaurant?.photos[0]?.photo_reference
    // const restaurantRating = restaurant?.rating
    // const totalUserReviews = restaurant?.user_ratings_total
    // const priceLevel = restaurant?.price_level
    // let priceRating
    // let ratingDescription

    // switch (priceLevel) {
    //     case 1:
    //         priceRating = `$5-$10 Per Person`
    //         break
    //     case 2:
    //         priceRating = `$11-$20 Per Person`
    //         break
    //     case 3:
    //         priceRating = `$21-$30 Per Person`
    //         break
    //     case 4:
    //         priceRating = `$31+ Per Person`
    //         break
    //     default:
    //         priceRating = 'Not Available'
    // }

    // switch (Math.round(restaurantRating)) {
    //     case 1:
    //         ratingDescription = `Very Bad`
    //         break
    //     case 2:
    //         ratingDescription = `Bad`
    //         break
    //     case 3:
    //         ratingDescription = `Average`
    //         break
    //     case 4:
    //         ratingDescription = `Good`
    //         break
    //     default:
    //         ratingDescription = 'Excellent'
    // }

    return (
        <Center w="100%">
            <HStack w="95%" maxW="400" borderWidth="1" space={1} rounded="md" _dark={{
                borderColor: "coolGray.500"
            }} _light={{
                borderColor: "coolGray.200"
            }} p="2">
                {/* <Image source={require('../assets/searchPage/cuisine_Cantonese.png')}
                    alt={"alt"} size={'lg'} /> */}

                <Image
                    source={require('../assets/searchPage/cuisine_Cantonese.png')}
                    alt="image base"
                    width={110} height={145} resizeMode="cover" rounded="sm"
                />
                <VStack ml="2" mt={0} space={1} m="auto">
                    {/* <Text bold="true" fontSize="lg">
                        Heading

                    </Text> */}
                    <Heading size={'md'} noOfLines={1}>
                        Restaurant Name
                    </Heading>
                    <Text fontSize="sm" >Rating: 4.5 </Text>
                    <Text fontSize="sm" >Reviews: Good</Text>
                    <Text fontSize="sm" >$11-$20 per peson</Text>
                    <Button w="100%"
                        bgColor={'green.300'}
                    // onPress={() =>
                    //     navigation.navigate("Restaurant Page", { restaurant })
                    // }
                    > View Menu</Button>
                </VStack>
            </HStack>
        </Center>
    )
}

export default SearchPageRestaurantCard
