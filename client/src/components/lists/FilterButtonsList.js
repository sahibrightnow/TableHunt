import React, { useState } from 'react'
import { View, Button, useDisclose, Heading, Actionsheet, Box, Text, Slider, Radio, Stack } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'
import RadioButton from '../listitems/RadioButton'


const FilterButtonsList = ({ totalMatchedRestaurants, isLoaded, setMapRadius, setRating, rating, setPriceFilter, priceFilter }) => {
    const [onChangeRadius, setOnChangeRadius] = useState(20);
    const [onChangeEndRadius, setOnChangeEndRadius] = useState();
    const [onChangeRating, setOnChangeRating] = useState(rating);
    const [onChangeEndRating, setOnChangeEndRating] = useState(rating)
    const { isOpen, onOpen, onClose } = useDisclose()

    const priceArray = [
        { value: "$5-$10" },
        { value: "$11-$20" },
        { value: "$21-$30" },
        { value: "$31+" },
    ]

    return (
        // <ScrollView horizontal={true}>
        //     <FilterButtons />

        <View display={'flex'} justifyContent="space-between" flexDirection={'row'}>
            <Heading size="md" pt={'3px'}> {isLoaded && totalMatchedRestaurants ? `${totalMatchedRestaurants} Restaurants found` : `Finding Restaurants...`}</Heading>
            <Button bgColor="danger.300" mr={1} h={'34px'} onPress={onOpen} w={12} alignItems="flex-end">
                <MaterialIcons name="filter-list" size={20} color="white" />
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

                    {/* <Box w="100%" h={30} px={0} justifyContent="center">
                        
                    </Box> */}

                    <Actionsheet.Item mt={-6}>
                        <Text ml={-4} bold fontSize="15" color="gray.700" _dark={{
                            color: "gray.300"
                        }}>
                            Price
                        </Text>
                        <RadioButton data={priceArray} type={'filterModal'} setPriceFilter={setPriceFilter} priceFilter={setPriceFilter} />
                    </Actionsheet.Item>

                    {/* <Radio.Group name="exampleGroup" defaultValue="1" accessibilityLabel="pick a size">
                        <Stack direction={{
                            base: "row",
                            md: "row"
                        }} alignItems="center" space={4} w="100%">
                            <Radio value="1" colorScheme="green" size="sm" my={1}>
                                $1-$10
                            </Radio>
                            <Radio value="2" colorScheme="green" size="sm" my={1}>
                                $11-$20
                            </Radio>
                            <Radio value="3" colorScheme="green" size="sm" my={1}>
                                $21-$30
                            </Radio>
                            <Radio value="4" colorScheme="green" size="sm" my={1}>
                                $31+
                            </Radio>
                        </Stack>
                    </Radio.Group> */}

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