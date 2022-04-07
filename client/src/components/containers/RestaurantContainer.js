import { Center, VStack, HStack, Heading, Text, Button, ScrollView, Divider, Image, Box, FlatList, Flex } from "native-base";
import React, { useEffect, useState, useRef, useContext } from "react";
import { API_KEY, REACT_APP_SERVER } from 'react-native-dotenv'
import SvgUri from 'react-native-svg-uri'
import axios from "axios";
import { StyleSheet, Dimensions, View, VirtualizedList } from "react-native";
import { Rating } from "react-native-ratings"
import { LoginContext } from '../context/LoginContext'
import CurrencyCircleDollar from '../assets/iconComponents/CurrencyCircleDollar'
import ForkKnife from '../assets/iconComponents/ForkKnifeIcon'
import LocationIcon from '../assets/iconComponents/LocationIcon'
import StarIcon from "../assets/iconComponents/StarIcon";
import { Linking } from 'react-native'


const RestaurantContainer = ({ data, navigation }) => {
    const [accessToken, setAccessToken, userInfo, setUserInfo, userToken, setUserToken, userId, setUserId] = useContext(LoginContext)

    const carouselRef = useRef(null);
    const { width: screenWidth } = Dimensions.get('window');
    const goForward = () => {
        carouselRef.current.snapToNext();
    };
    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.item}>
                <Image
                    source={{ uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${item.photo_reference}&key=${API_KEY}` }}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    alt="ok"


                />

            </View>
        );
    };

    // break

    // States for the info/reviews toggle
    const [info, setInfo] = useState(true);
    const [reviews, setReviews] = useState(false);
    const [details, setDetails] = useState();

    const [variant, setVariant] = useState("ghost");
    const [cVariant, setCVariant] = useState("ghost");
    // state for photos carousel 
    const [photos, setPhotos] = useState([]);
    const [restaurantDetails, setRestaurantDetails] = useState({})

    const createRestaurant = () => {
        axios.post(`https://tablehunt.herokuapp.com/api/v1/restaurants`, restaurantDetails, {
            headers: { 'Authorization': userToken }
        })
            .then((res) => {
                console.log('Restaurant created')
            })
            .catch((error) => {
                console.log('Error in creating restaurant', error);
            })
    }


    useEffect(() => {
        setRestaurantDetails({
            name: restaurant.name,
            vicinity: restaurant.vicinity,
            rating: restaurant.rating,
            place_id: restaurant.place_id,
            lat: restaurant.geometry.location.lat,
            lng: restaurant.geometry.location.lng,
        });
    }, [photos])

    const restaurant = data.restaurant
    const photoRef = restaurant?.photos[0]?.photo_reference
    const priceLevel = restaurant?.price_level
    let priceRating

    const placeID = restaurant?.place_id

    const placeDetailsURL = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&key=${API_KEY}`

    // Call the place details API
    const getPlaceDetails = () => {
        axios
            .get(placeDetailsURL)
            .then((result) => {
                setDetails(result?.data?.result)
                setPhotos(result?.data?.result?.photos)

            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getPlaceDetails();

    }, []);
    switch (priceLevel) {
        case 1:
            priceRating = `$5-$10`
            break
        case 2:
            priceRating = `$11-$20`
            break
        case 3:
            priceRating = `$21-$30`
            break
        case 4:
            priceRating = `$31+`
            break
        default:
            priceRating = 'Not Available'
    }


    // Show todays opening_hours 
    const dayOfWeekName = new Date().toLocaleString(
        'default', { weekday: 'long' }
    );

    return (
        <View>

            <ScrollView >
                {photos != [] && <FlatList
                    data={photos}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    onSnapToItem={(index) => setActiveSlide(index)}
                />}

                <VStack space={0} py={1} px={1}>
                    {/* <Image
                        source={{
                            uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRef}&key=${API_KEY}`
            }}
            alt={restaurant.name}
            resizeMode="contain"
            height={250}
            roundedTop="lg"
        /> */}
                    <HStack p={6} pb={3}>
                        <Heading size="lg" mr="60px">
                            {restaurant.name}
                        </Heading>
                        <Heading size="sm" mr="0" ml="auto"  >
                            {/* <SvgUri source={require('../assets/star.svg')} /> */}
                            <StarIcon />
                            {restaurant.rating}
                        </Heading>
                    </HStack>
                    <Divider />
                    <HStack space={20} pt={5} pl={8}>
                        <HStack >
                            {/* <SvgUri source={require('../assets/ForkKnife.svg')} /> */}
                            <ForkKnife />
                            <Text>
                                Multiple
                            </Text>
                        </HStack>
                        <HStack >
                            {/* <SvgUri source={require('../assets/CurrencyCircleDollar.svg')} /> */}
                            <CurrencyCircleDollar />
                            <Text>
                                {priceRating}
                            </Text>
                        </HStack>
                    </HStack>
                    <HStack pt={2} pl={8} mb={2}>
                        {/* <SvgUri source={require('../assets/Location.svg')} /> */}
                        <LocationIcon />
                        <Text>
                            {restaurant.vicinity}
                        </Text>
                    </HStack>
                    <Divider />


                    {/* <Button.Group  size="md" m='auto' mb={2} mt={4} colorScheme='rgba(188, 71, 73, 1)'> */}
                    {/* <HStack  m='auto' mt={2}><Button size="lg" mr={50} colorScheme='rgba(188, 71, 73, 1)' variant={variant} onPress={() => { setInfo(true); setReviews(false);  }}>Info</Button><Button size="lg" colorScheme='rgba(188, 71, 73, 1)'variant={cVariant} onPress={() => { setInfo(false); setReviews(true);  }} >Reviews</Button></HStack> */}
                    {/* </Button.Group> */}
                    <HStack mt={4}>
                        <Text style={info ? styles.selected : styles.unselected} onPress={() => { setInfo(true); setReviews(false); }} fontSize="2xl" ml={20}>Info</Text>
                        <Text style={reviews ? styles.selected : styles.unselected} fontSize="2xl" ml='auto' mr={20} onPress={() => { setInfo(false); setReviews(true); }}>Reviews</Text>
                    </HStack>

                    {info && <VStack ml={5} mr={5} mt={5}>

                        <Text style={styles.heading}>Opening hours</Text>
                        {details?.opening_hours.weekday_text.map((el, index) => <Text
                            style={el.includes(dayOfWeekName) ? styles.highlighted : styles.unselected}
                            fontSize={14} key={index}>{el}</Text>)}
                        <Text onPress={() => Linking.openURL(`tel:${details?.formatted_phone_number}`)} mt={6} mb={16} fontSize={16}><Text style={styles.heading}>Phone: </Text><Text fontWeight='bold' color="rgba(188, 71, 73, 1)">{details?.formatted_phone_number || 'Not Available'}</Text></Text>
                    </VStack>}
                    <Center pt={10}>

                    </Center>
                    {reviews && <VStack ml={5} mr={5} mt={-2} mb={20} >
                        <Text style={styles.heading}>{restaurant?.user_ratings_total} Reviews </Text>
                        {details?.reviews.sort((a, b) => b.time - a.time).map((el, index) => <Box mt={5} key={index}>
                            <HStack>
                                <Image
                                    source={{
                                        uri: el.profile_photo_url
                                    }}
                                    alt={el.author_name}
                                    height={50}
                                    width={50}
                                />
                                <VStack>
                                    <Text style={styles.name} key={index}>{el.author_name}</Text>
                                    <HStack>
                                        <Rating
                                            style={{ marginLeft: 10, marginTop: 2 }}
                                            type='star'
                                            ratingCount={5}
                                            imageSize={15}
                                            startingValue={el.rating}
                                            readonly="true"
                                            ratingBackgroundColor='black'
                                        />
                                        <Text style={styles.time}>{el.relative_time_description}</Text>
                                    </HStack>
                                </VStack>
                            </HStack>
                            <Text mb={2} mt={4} fontSize={14}>{el.text}</Text>
                            <Divider />
                        </Box>)}
                    </VStack>}
                </VStack>
            </ScrollView >

            <Button
                position="absolute"
                bottom={5}
                left={5}
                mt={5}
                mb={2}
                m='auto'
                width="90%"
                zIndex={1}
                bgColor={'rgba(188, 71, 73, 1)'}
                onPress={() => {
                    navigation.navigate("Booking Page", { restaurantDetails })
                    createRestaurant();
                }}
                size="12"
            >
                Book
            </Button>
        </View >
    );
};

export default RestaurantContainer;

const styles = StyleSheet.create({
    heading: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 10,
        marginTop: 4
    },
    time: {
        marginLeft: 120,
        fontSize: 12
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 10,
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 1
    },
    selected: {
        fontWeight: 'bold',
        borderColor: 'black',
        // borderWidth: 2,


    },
    unselected: {
        fontWeight: '300'
    },
    highlighted: {
        fontWeight: 'bold',
        color: 'rgba(188, 71, 73, 1)',
        fontSize: 15
    }
})
