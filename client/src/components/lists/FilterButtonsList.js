import React, { useState } from 'react'
import { View, Button, useDisclose, Heading, Actionsheet, Box, Text, Slider, Radio, Stack } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'

const FilterButtonsList = ({ totalMatchedRestaurants, isLoaded }) => {
    const [onChangeRadius, setOnChangeRadius] = useState(20);
    const [onChangeRating, setOnChangeRating] = useState(3);

    const { isOpen, onOpen, onClose } = useDisclose()
    // console.log("totalMatchedRestaurants", totalMatchedRestaurants)
    // { totalMatchedRestaurants > 0 ? setIsLoaded(true) : setIsLoaded(false) }
    // { console.log("TotalMatchedRestaurants in FilterBUttonsList Page", totalMatchedRestaurants) }
    return (
        // <ScrollView horizontal={true}>
        //     <FilterButtons />

        <View display={'flex'} justifyContent="space-between" flexDirection={'row'}>
            <Heading size="md" pt={'3px'}> {isLoaded && totalMatchedRestaurants ? `${totalMatchedRestaurants} Restaurants found` : `Finding Restaurants...`}</Heading>
            <Button bgColor="danger.300" mr={1} h={'34px'} onPress={onOpen} w={12} alignItems="flex-end">
                <MaterialIcons name="filter-list" size={20} color="white" />
            </Button>

            <Actionsheet isOpen={isOpen} onClose={onClose} hideDragIndicator>
                <Actionsheet.Content borderTopRadius="0">
                    <Box w="100%" h={60} px={4} justifyContent="center">
                        <Text fontSize="25" color="gray.900" _dark={{
                            color: "gray.300"
                        }}>
                            Filters
                        </Text>
                    </Box>

                    <Box w="100%" h={30} px={4} justifyContent="center">
                        <Text fontSize="15" color="gray.700" _dark={{
                            color: "gray.300"
                        }}>
                            Radius
                        </Text>
                    </Box>

                    <Text textAlign="center">{onChangeRadius} km</Text>
                    <Slider defaultValue={20} colorScheme="green" maxValue={50}
                        m={'20px'}
                        onChange={v => {
                            setOnChangeRadius(Math.floor(v));
                        }}
                    >
                        <Slider.Track>
                            <Slider.FilledTrack />
                        </Slider.Track>
                        <Slider.Thumb />
                    </Slider>

                    <Box w="100%" h={30} px={4} justifyContent="center">
                        <Text fontSize="15" color="gray.700" _dark={{
                            color: "gray.300"
                        }}>
                            Rating
                        </Text>
                    </Box>

                    <Text textAlign="center">{onChangeRating} ⭐️</Text>
                    <Slider defaultValue={3} colorScheme="green" maxValue={5}
                        m={'20px'}
                        onChange={v => {
                            setOnChangeRating(Math.floor(v));
                        }}
                    >
                        <Slider.Track>
                            <Slider.FilledTrack />
                        </Slider.Track>
                        <Slider.Thumb />
                    </Slider>

                    <Box w="100%" h={30} px={4} justifyContent="center">
                        <Text fontSize="15" color="gray.700" _dark={{
                            color: "gray.300"
                        }}>
                            Price
                        </Text>
                    </Box>
                    <Radio.Group name="exampleGroup" defaultValue="1" accessibilityLabel="pick a size">
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
                    </Radio.Group>
                </Actionsheet.Content>
            </Actionsheet>


        </View >
        // </ScrollView>
    )
}

export default FilterButtonsList