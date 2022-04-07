import React, { useState } from 'react'
import { View, Button, useDisclose, Heading, Actionsheet, Box, Text, Slider } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'
import RadioButton from '../listitems/RadioButton'
import FilterListIcon from '../assets/iconComponents/FilterListIcon'


const FilterButtonsList = ({ totalMatchedRestaurants, isLoaded, setMapRadius, setRating, rating, setPriceFilter, priceFilter }) => {
    const [onChangeRadius, setOnChangeRadius] = useState(20);
    const [onChangeEndRadius, setOnChangeEndRadius] = useState(20);
    const [onChangeRating, setOnChangeRating] = useState(rating);
    const [onChangeEndRating, setOnChangeEndRating] = useState(rating)
    const { isOpen, onOpen, onClose } = useDisclose()

    const priceArray = [
        { value: "$5-$10" },
        { value: "$11-$20" },
        { value: "$21-$30" },
        { value: "$31+" },
    ]

    let message = 'Finding Restaurants...'
    // { totalMatchedRestaurants > 0 ? message = 'Finding Restaurants...' : message = 'No Restaurants Found' }

    return (
        <View display={'flex'} justifyContent="space-between" flexDirection={'row'}>
            <Heading size="md" pt={'3px'}> {isLoaded && totalMatchedRestaurants > 0 ? `${totalMatchedRestaurants} Restaurants found` : message}</Heading>
            <Button bgColor="danger.300" mr={1} h={'34px'} onPress={onOpen} w={12} pt={4} pl={5}>
                {/* <MaterialIcons name="filter-list" size={20} color="white" /> */}
                <FilterListIcon height="20" width="26" />
            </Button>

            <Actionsheet isOpen={isOpen} onClose={onClose} hideDragIndicator >
                <Actionsheet.Content borderTopRadius="0" p={4}>
                    <Box w="100%" h={60} px={0} justifyContent="center">
                        <Text bold fontSize="30" color="gray.600" _dark={{
                            color: "gray.300"
                        }}>
                            Filters
                        </Text>
                    </Box>

                    <Box w="100%" h={30} px={0} justifyContent="center">
                        <Text bold fontSize="15" color="gray.700" _dark={{
                            color: "gray.300"
                        }}>
                            Radius
                        </Text>
                    </Box>

                    <Slider defaultValue={20} colorScheme='green' mt="0" minValue={1} maxValue={50}
                        m={'5px'} ml={0} size="lg"
                        onChange={v => {
                            setOnChangeRadius(Math.floor(v));
                        }}
                        onChangeEnd={v => {
                            v && setOnChangeEndRadius(Math.floor(v));
                        }}>
                        <Slider.Track>
                            <Slider.FilledTrack />
                        </Slider.Track>
                        <Slider.Thumb />
                    </Slider>
                    <Text textAlign="center" mt="-1">{onChangeRadius} km</Text>


                    <Box w="100%" h={30} px={0} justifyContent="center">
                        <Text bold fontSize="15" color="gray.700" _dark={{
                            color: "gray.300"
                        }}>
                            Rating
                        </Text>
                    </Box>

                    <Slider defaultValue={rating} colorScheme="green" minValue={1} maxValue={5}
                        m={'20px'} mt={0} size="lg"
                        onChange={v => {
                            setOnChangeRating(Math.floor(v));
                        }}
                        onChangeEnd={v => {
                            v && setOnChangeEndRating(Math.floor(v));
                        }}>
                        <Slider.Track>
                            <Slider.FilledTrack />
                        </Slider.Track>
                        <Slider.Thumb />
                    </Slider>
                    <Text mt={-5} textAlign="center">{onChangeRating}</Text>

                    <Actionsheet.Item mt={-6}>
                        <Text ml={-4} bold fontSize="15" color="gray.700" _dark={{
                            color: "gray.300"
                        }}>
                            Price
                        </Text>
                        <RadioButton data={priceArray} type={'filterModal'} setPriceFilter={setPriceFilter} priceFilter={setPriceFilter} />
                    </Actionsheet.Item>

                    <Button w="100%"
                        bgColor={'danger.300'}
                        mt={0}
                        onPress={() => {
                            onClose();
                            setMapRadius(onChangeEndRadius * 1000);
                            setRating(onChangeEndRating - 1);
                        }}
                    >
                        <Text color="#FFFFFF" fontSize="16px" py="0.5">Save</Text>
                    </Button>

                    <Button w="100%" variant="outline" borderColor="danger.300"
                        colorScheme='rgba(188, 71, 73, 1)'
                        mt={2}
                        mb={-3}
                        onPress={onClose}
                    >
                        <Text color="danger.300" fontSize="14px" py="0">Cancel</Text>
                    </Button>
                </Actionsheet.Content>
            </Actionsheet>
        </View >
    )
}

export default FilterButtonsList