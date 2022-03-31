import { Center, VStack, HStack, Heading, Text, Button, ScrollView, Divider, Image, Box } from "native-base";
import React, { useEffect, useState, useRef } from "react";
import { API_KEY } from 'react-native-dotenv'
import SvgUri from 'react-native-svg-uri'
import axios from "axios";
import { StyleSheet, Dimensions, View } from "react-native";
import { Rating } from "react-native-ratings"
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';

const RestaurantContainer = ({ data, navigation }) => {
    // carousel stuff

    const carouselRef = useRef(null);
    const { width: screenWidth } = Dimensions.get('window');
    const goForward = () => {
        carouselRef.current.snapToNext();
    };
    const renderItem = ({ item, index }, parallaxProps) => {
        return (
            <View style={styles.item}>
                <ParallaxImage
                    source={{ uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${item.photo_reference}&key=${API_KEY}` }}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />

            </View>
        );
    };


    // break
    const [details, setDetails] = useState();

    const restaurant = data.restaurant
    console.log("restContainer", restaurant)

    const photoRef = restaurant?.photos[0]?.photo_reference
    const priceLevel = restaurant?.price_level
    let priceRating

    // console.log("restContainer", restaurant)

    const placeID = restaurant?.place_id

    const placeDetailsURL = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&key=${API_KEY}`

    const getPlaceDetails = () => {
        axios
            .get(placeDetailsURL)
            .then((result) => {
                // console.log("placeDetailsRESULTS", result?.data?.result?.opening_hours?.weekday_text)
                setDetails(result?.data?.result)

            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getPlaceDetails();

    }, []);
    console.log("details", details?.reviews)
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


    return (
        <ScrollView>
            <VStack space={0} py={1} px={1}>
                <Image
                    source={{
                        uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRef}&key=${API_KEY}`
                    }}
                    alt={restaurant.name}
                    resizeMode="contain"
                    height={250}
                    roundedTop="lg"
                />

                <HStack p={6} pb={3}>
                    <Heading size="md" mr="60px">
                        {restaurant.name}
                    </Heading>
                    <Heading size="sm" mr="0" ml="auto">
                        <SvgUri source={require('../assets/star.svg')} />
                        {restaurant.rating}
                    </Heading>
                </HStack>
                <Divider />

                <HStack space={20} pt={5} pl={8}>
                    <HStack >
                        <SvgUri source={require('../assets/ForkKnife.svg')} />
                        <Text>
                            Multiple
                        </Text>
                    </HStack>
                    <HStack >
                        <SvgUri source={require('../assets/CurrencyCircleDollar.svg')} />
                        <Text>
                            {priceRating}
                        </Text>
                    </HStack>
                </HStack>

                <HStack pt={2} pl={8} mb={2}>
                    <SvgUri source={require('../assets/Location.svg')} />
                    <Text>
                        {restaurant.vicinity}
                    </Text>
                </HStack>
                <Divider />
                <VStack ml={5} mr={5} mt={5}>

                    {details && <Carousel
                        ref={carouselRef}
                        sliderWidth={screenWidth}
                        sliderHeight={screenWidth}
                        itemWidth={screenWidth - 60}
                        data={details?.photos}
                        renderItem={renderItem}
                        hasParallaxImages={true}
                    />}


                    <Text style={styles.heading}>Opening hours</Text>
                    {details?.opening_hours.weekday_text.map((el, index) => <Text fontSize={14} key={index}>{el}</Text>)}
                    <Text mt={6} fontSize={14}><Text style={styles.heading}>Phone:</Text> {details?.formatted_phone_number}</Text>
                </VStack>

                <Center pt={10}>
                    <Button
                        // position="absolute"
                        top={-10}
                        mb={10}
                        width="90%"
                        bgColor={'green.300'}
                        onPress={() =>
                            navigation.navigate("Booking Page")
                        }
                    >
                        Book
                    </Button>
                </Center>
                <VStack ml={5} mr={5} mt={-2}>
                    <Text style={styles.heading}>{restaurant?.user_ratings_total} Reviews </Text>
                    {details?.reviews.map((el, index) => <Box mt={5} key={index}>

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
                </VStack>

            </VStack>
        </ScrollView>
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
    }
})


{/* <Image
                    source={{
                        uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${el.photo_reference}&key=${API_KEY}`
                    }}
                    alt={restaurant.name}
                    resizeMode="contain"
                    height={250}
                    roundedTop="lg"
                /> */}