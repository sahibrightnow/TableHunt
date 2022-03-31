import { Box, Heading, Divider, Image, Text, Center, HStack, Stack, VStack, View, Pressable, ScrollView } from "native-base"
import SvgUri from 'react-native-svg-uri'

const BookingCard = ({ data, navigation }) => {
    return (
        <Box alignItems="center" mt={15}>
            <Box rounded="lg" overflow="hidden" w="85%"
                borderColor="coolGray.200" borderWidth="1" >

                <Stack space={3}>
                    <Stack space={2} px="4" pt="4" pb="3">
                        <View display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
                            <View display="flex" flexDirection="row" alignItems="center">
                                <Image source={require('../assets/vectorConfirmedIcon.png')} mr="3" />
                                <Text fontSize="15" color="green.300" fontWeight="500">
                                    Booking Confirmed
                                </Text>
                            </View>
                            <Pressable>
                                <Text fontSize="15" color="danger.300" fontWeight="500" >Edit</Text>
                            </Pressable>
                        </View>
                        <Heading size="md" ml="-1" mt="3" mb="2">
                            Whitespot Kingsway
                        </Heading>
                        <View display="flex" flexDirection="row" justifyContent="space-between" >
                            <View display="flex" flexDirection="row" alignItems="center">
                                <SvgUri source={require('../assets/person.svg')} />
                                <Text fontSize="15" color="gray.500" fontWeight="500" ml="2">
                                    {data.selectedNumOfPeople}
                                </Text>
                            </View>
                            <View display="flex" flexDirection="row" alignItems="center">
                                <SvgUri source={require('../assets/DatePickerIcon.svg')} />
                                <VStack>
                                    <Text fontSize="15" color="gray.500" fontWeight="500" ml="2">
                                        {/* {new Date().toDateString()}, Monday */}
                                        {data.selectedDate || new Date().toDateString()}
                                    </Text>
                                    <Text fontSize="15" color="gray.500" fontWeight="500" ml="2">
                                        {data.timing}
                                    </Text>
                                </VStack>
                            </View>
                        </View>
                    </Stack>
                    <Divider />
                    <Stack space={2} px="4" pt="2" pb="3">
                        <HStack display="flex" justifyContent="space-between" alignItems="center">
                            <VStack display="flex" justifyContent="space-between" alignItems="center">
                                <Heading size="sm" mb="2" >
                                    Requests
                                </Heading>
                                <Text fontWeight="400" height="50" mt="3">
                                    {data.request || 'No request'}

                                </Text>
                            </VStack>
                            <VStack maxWidth="50%" >
                                <Heading size="sm" mb="2">
                                    Vaccine Proof
                                </Heading>
                                <ScrollView display="flex" flexDirection="row" horizontal={true} showsHorizontalScrollIndicator={false} >
                                    {[...Array(data.selectedNumOfPeople)].map((_, index) => (
                                        <Pressable mr="5" key={index}>
                                            <SvgUri source={require('../assets/vaccineCardSubmitted.svg')} height="50" width="26" />
                                        </Pressable>
                                    )
                                    )}
                                </ScrollView>

                            </VStack>
                        </HStack>
                        <VStack>
                            <Heading size="sm" mb="2">
                                Extra notes
                            </Heading>
                            <Text fontWeight="400">
                                {data.notes}
                            </Text>
                        </VStack>

                    </Stack>


                </Stack>
            </Box>
        </Box>

    )
};

export default BookingCard;