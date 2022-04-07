import { Box, Heading, Divider, Image, Text, Center, HStack, Stack, VStack, View, Pressable, ScrollView } from "native-base"
import SvgUri from 'react-native-svg-uri'
import DatePickerIcon from '../assets/iconComponents/DatePickerIcon'
import PersonIcon from '../assets/iconComponents/PersonIcon'
import VaccineCardIcon from '../assets/iconComponents/VaccineCardIcon'

const BookingCard = ({ data, navigation }) => {
    return (
        <Box alignItems="center" mt={15}>
            <Box rounded="lg" overflow="hidden" w="85%"
                borderColor="coolGray.200" borderWidth="1" >

                <Stack space={3}>
                    <Stack space={2} px="4" pt="4" pb="3" mb={-1}>
                        <View display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
                            <View display="flex" flexDirection="row" alignItems="center">
                                <Image source={require('../assets/vectorConfirmedIcon.png')} mr="3" />
                                <Text fontSize="15" color="green.300" fontWeight="500">
                                    Booking Confirmed
                                </Text>
                            </View>
                            {/* <Pressable>
                                <Text fontSize="15" color="danger.300" fontWeight="500" >Edit</Text>
                            </Pressable> */}
                        </View>
                        <Heading size="md" ml="-1" mt="3" mb="2">
                            {data.restaurantName}
                        </Heading>
                        <Text mt={-3} ml={-1} mb={2}>{data.vicinity}</Text>
                        <View display="flex" flexDirection="row" justifyContent="space-between" >
                            <View display="flex" flexDirection="row" alignItems="center">
                                {/* <SvgUri source={require('../assets/person.svg')} /> */}
                                <PersonIcon />
                                <Text fontSize="15" color="gray.500" fontWeight="500" ml="2">
                                    {data.numberOfPeople}
                                </Text>
                            </View>
                            <View display="flex" flexDirection="row" alignItems="center">
                                {/* <SvgUri source={require('../assets/DatePickerIcon.svg')} /> */}
                                <DatePickerIcon />
                                <VStack>
                                    <Text fontSize="15" color="gray.500" fontWeight="500" ml="2">
                                        {data.bookingDate || new Date().toDateString()}
                                    </Text>
                                    <Text fontSize="15" color="gray.500" fontWeight="500" ml="2">
                                        {data.bookingTime}
                                    </Text>
                                </VStack>
                            </View>
                        </View>
                    </Stack>
                    <Divider />
                    <Stack space={2} px="4" pt="3" pb="3">
                        <HStack display="flex" justifyContent="space-around" alignItems="center" >
                            <VStack display="flex" justifyContent="space-around" maxWidth="48%" >
                                <Heading size="sm" mb="-1">
                                    Requests
                                </Heading>
                                <Text fontWeight="400" height="50" mt="3">
                                    {data.specialRequests}

                                </Text>
                            </VStack>
                            <VStack maxWidth="50%" >
                                <Heading size="sm" mb="-1">
                                    Vaccine Proof
                                </Heading>
                                <ScrollView display="flex" flexDirection="row" horizontal={true} showsHorizontalScrollIndicator={false} >
                                    {[...Array(data.numberOfPeople)].map((_, index) => (
                                        <Pressable mr="5" key={index}>
                                            {/* {data.vaccineCardImg && data.vaccineCardImg[index]
                                                ? <SvgUri source={require('../assets/vaccineCardSubmitted.svg')} height="50" width="26" alt="vaccineCardSubmitted" />
                                                : <SvgUri source={require('../assets/vaccineCardNotSubmitted.svg')} height="50" width="26" alt="vaccineCardNotSubmitted" />} */}
                                            {data.vaccineCardImg && data.vaccineCardImg[index]
                                                ? <VaccineCardIcon height="50" width="26" color="#6A994E" />
                                                : <VaccineCardIcon height="50" width="26" color="#9CA3AF" />}
                                        </Pressable>
                                    )
                                    )}
                                </ScrollView>

                            </VStack>
                        </HStack>

                        <HStack display="flex" justifyContent="space-around" alignItems="center" mt={-3} mb={-5}>
                            <VStack display="flex" justifyContent="space-around" maxWidth="48%" >
                                <Heading size="sm" mb="-1">
                                    Extra notes
                                </Heading>
                                <Text fontWeight="400" height="50" mt="3">
                                    {data.extraNotes || 'none'}
                                </Text>
                            </VStack>
                            <VStack maxWidth="50%" mr={5}>
                                <Heading size="sm" mb="-1">
                                    Reserved Table
                                </Heading>
                                <Text fontWeight="400" height="50" mt="3">
                                    {data.tableNumber}
                                </Text>
                            </VStack>
                        </HStack>
                        {/* <VStack mt={-3}>
                            <Heading size="sm" mb="2">
                                Extra notes
                            </Heading>
                            <Text fontWeight="400">
                                {data.extraNotes}
                            </Text>
                        </VStack> */}
                    </Stack>
                </Stack>
            </Box>
        </Box>

    )
};

export default BookingCard;