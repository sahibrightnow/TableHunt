import {
    Center,
    VStack,
    HStack,
    Stack,
    Heading,
    Text,
    Button,
    Box,
    AspectRatio,
    ScrollView,
    Divider,
    Image,
} from "native-base";
import React from "react";
import { API_KEY } from 'react-native-dotenv'
import { MaterialIcons } from '@expo/vector-icons'
import SvgUri from 'react-native-svg-uri'
import { useNavigation } from '@react-navigation/native';


const RestaurantContainer = ({ data }) => {
    const navigation = useNavigation()
    const restaurant = data.restaurant
    console.log("restContainer", restaurant)

    const photoRef = restaurant?.photos[0]?.photo_reference
    const priceLevel = restaurant?.price_level
    let priceRating

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

                {/* <VStack p="6" space={1}> */}
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

                <HStack pt={2} pl={8}>
                    <SvgUri source={require('../assets/Location.svg')} />
                    <Text>
                        {restaurant.vicinity}
                    </Text>
                </HStack>

                <Center pt={10}>
                    <Button
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
            </VStack>
            {/* </VStack> */}
        </ScrollView >
    );
};

export default RestaurantContainer;
