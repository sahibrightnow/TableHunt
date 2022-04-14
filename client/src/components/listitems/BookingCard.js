import { Box, Heading, Divider, Image, Text, HStack, Stack, VStack, View, Pressable, ScrollView, Button } from "native-base"
import DatePickerIcon from '../assets/iconComponents/DatePickerIcon'
import React, { useContext } from 'react'
import PersonIcon from '../assets/iconComponents/PersonIcon'
import VaccineCardIcon from '../assets/iconComponents/VaccineCardIcon'
import LocationIcon from '../assets/iconComponents/LocationIcon'
import { Alert } from 'react-native';
import { LoginContext } from "../context/LoginContext";
import { fetchRemoveReservation } from '../../api'

const BookingCard = ({ data, navigation, getAllReservations }) => {
    const [accessToken, setAccessToken, userToken, setUserToken, userId, setUserId] = useContext(LoginContext)

    const removeReservation = async () => {
        try {
            const res = await fetchRemoveReservation({ reservationId: data._id });
            if (res?.data?.status == 'AUTH FAILED')
                logoutUser()
            else {
                console.log(res.data.message)
                getAllReservations()
            }
        }
        catch (error) {
            console.log("error in cancelling the reservation", error)
        }
    }

    return (
        <Box alignItems="center" mt={15} rounded="lg" bg="white" >
            <View overflow="hidden" w="100%"
                borderColor="coolGray.200" borderWidth="1" rounded="lg" >

                <Stack space={3}>
                    <Stack space={2} px="4" pt="4" pb="3" mb={-1}>
                        <View display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
                            <View display="flex" flexDirection="row" alignItems="center">
                                <Image source={require('../assets/vectorConfirmedIcon.png')} mr="3" />
                                <Text fontSize="15" color="green.300" fontWeight="500" >
                                    Booking Confirmed
                                </Text>
                            </View>
                            <Pressable>
                                <Text fontSize="16" color="danger.300" fontWeight="500" >Edit</Text>
                            </Pressable>
                        </View>
                        <Heading size="md" ml="1" mt="3" mb="2">
                            {data.restaurantName}
                        </Heading>
                        <View display="flex" flexDirection="row" alignItems="center" >
                            <LocationIcon />
                            <ScrollView horizontal={true}
                                showsHorizontalScrollIndicator={false} ml="2">
                                <Text fontSize="15" color="gray.500" fontWeight="500" >{data.vicinity}</Text>
                            </ScrollView>

                        </View>

                        <View display="flex" flexDirection="row" justifyContent="space-between" ml="1">
                            <View display="flex" flexDirection="row" alignItems="center">
                                <PersonIcon />
                                <Text fontSize="15" color="gray.500" fontWeight="500" ml="2">
                                    {data.numberOfPeople}
                                </Text>
                            </View>
                            <View display="flex" flexDirection="row" alignItems="center">
                                <DatePickerIcon />
                                <VStack>
                                    <Text fontSize="15" color="gray.500" fontWeight="500" ml="2">
                                        {data.bookingDate || new Date().toDateString()}, {data.bookingTime}
                                    </Text>
                                </VStack>
                            </View>
                        </View>
                    </Stack>
                    <Divider bg="light.300" />
                    <Stack space={2} px="4" pt="3" pb="3">
                        <HStack display="flex" justifyContent="space-around" alignItems="center" ml="-2" >
                            <VStack display="flex" justifyContent="space-around"  >
                                <Heading size="sm" mb="-1" >
                                    Requests
                                </Heading>
                                <Text height="50" mt="3" color="gray.500">
                                    {data.specialRequests}

                                </Text>
                            </VStack>
                            <VStack width="137px" mr="-2" >
                                <Heading size="sm" mb="2">
                                    Vaccine Proof
                                </Heading>
                                <ScrollView display="flex" flexDirection="row" horizontal={true} showsHorizontalScrollIndicator={false}  >
                                    {data.vaccineProof.length ? (data.vaccineProof).map((_, index) => (
                                        <Pressable mr="5" key={index}>
                                            <VaccineCardIcon height="50" width="26" color="#6A994E" />
                                        </Pressable>
                                    )
                                    ) : <Text color="gray.500" >none</Text>}
                                </ScrollView>

                            </VStack>
                        </HStack>

                        <HStack display="flex" justifyContent="space-around" alignItems="center" mt={-3} mb={-5}>
                            <VStack display="flex" justifyContent="space-around"  >
                                <Heading size="sm" mb="-1">
                                    Extra notes
                                </Heading>
                                <ScrollView horizontal={true}
                                    showsHorizontalScrollIndicator={false} width="100px" >
                                    <Text fontWeight="400" height="50" mt="3" color="gray.500">
                                        {data.extraNotes || 'none'}
                                    </Text>
                                </ScrollView>

                            </VStack>
                            <VStack maxWidth="50%" mr={3} >
                                <Heading size="sm" mb="-1">
                                    Reserved Table
                                </Heading>
                                <Text fontWeight="400" height="50" mt="3" color="gray.500">
                                    {data.tableNumber}
                                </Text>
                            </VStack>
                        </HStack>
                        <HStack display="flex" justifyContent="space-around" alignItems="center" mb="1">
                            <Button bgColor={'green.300'} px="3">
                                Call Restaurant
                            </Button>
                            <Button w="120" variant="outline" colorScheme='rgba(188, 71, 73, 1)' style={
                                {
                                    borderColor: '#ef233c',
                                }} onPress={() => Alert.alert("Cancel Reservation", "Would you like to cancel your reservation?", [{
                                    text: "Yes", onPress: () => {
                                        removeReservation()
                                    }
                                }, {
                                    text: "No",
                                }])}
                            >
                                <Text style={{ color: '#ef233c' }}>Cancel </Text>

                            </Button>
                        </HStack>
                    </Stack>
                </Stack>
            </View>
        </Box>

    )
};

export default BookingCard;