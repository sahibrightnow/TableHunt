import { Box, Stack, Text, Heading, Image, Center, Button } from 'native-base'
import { API_KEY } from 'react-native-dotenv'
import SvgUri from 'react-native-svg-uri'

const HomepageRestaurantCard = (props) => {
    const navigation = props.navigation
    const restaurant = props.restaurant

    return (
        <Box bg="white" shadow={2} rounded="lg" width="300px" m={'10px'}>
            <Image
                source={{
                    uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${props.photoRef}&key=${API_KEY}`
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
                    position: "absolute", bottom: 127, right: 8
                }}
                onPress={() =>
                    navigation.navigate("Restaurant Page", { restaurant })
                }
            >
                View Menu
            </Button>


            <Stack space={2} p={[3, 3, 6]}>
                <Heading size={'md'} noOfLines={2}>
                    {props.restaurantName ? props.restaurantName : "Name not Available"}
                </Heading>
                <Stack space={1} mt={'auto'}>
                    <Text color="green.300">
                        <SvgUri source={require('../assets/star.svg')} />
                        {props.restaurantRating} {props.ratingDescription}

                        <Text color="gray.600">
                            ({props.totalUserReviews}) | Change later
                        </Text>
                    </Text>
                    <Text color="danger.300" ml={1}>
                        {props.priceRating}
                    </Text>
                </Stack>
            </Stack>
        </Box>
    )
}

export default HomepageRestaurantCard