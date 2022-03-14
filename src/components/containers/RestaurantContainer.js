import {
    Center,
    VStack,
    HStack,
    Stack,
    Heading,
    Text,
    Box,
    AspectRatio,
    Image,
} from "native-base";
import React from "react";

const RestaurantContainer = ({ data }) => {
    return (
        <VStack space={5} py={3} px={5}>
            <Stack p="6" space={2}>
                <Center>
                    <Stack pb={5}>
                        <Heading size="md" ml="-1">
                            {data.restaurantName}
                        </Heading>
                    </Stack>
                </Center>

                <Center>
                    <Stack p="2">
                        <Text
                            color="coolGray.600"
                            _dark={{
                                color: "warmGray.200",
                            }}
                            fontWeight="300"
                        >
                            SAMPLE
                        </Text>
                    </Stack>
                </Center>

                <HStack p="2" space={1}>
                    <Stack>
                        <Text
                            color="coolGray.600"
                            _dark={{
                                color: "warmGray.200",
                            }}
                            fontWeight="500"
                        >
                            SAMPLE TEXT

                        </Text>
                    </Stack>
                </HStack>
            </Stack>
        </VStack>
    );
};

export default RestaurantContainer;
