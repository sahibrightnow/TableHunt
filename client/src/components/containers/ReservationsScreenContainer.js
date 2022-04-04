import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BookingCard from '../listitems/BookingCard'
import { Box, Heading, Divider, Image, Text, HStack, ScrollView, Stack, VStack, View, Spinner } from "native-base"
import { SERVER } from 'react-native-dotenv'

const ReservationsScreenContainer = ({ navigation, data }) => {

    const [bookings, setBookings] = useState()
    const [isLoaded, setIsLoaded] = useState(false)

    const getAllReservations = () => {
        axios.get(`${SERVER}/api/v1/reservations/list`)
            .then(res => {
                // console.log("GETTING ALL RESERVATIONS FROM DB", res.data.data);
                setBookings(res.data.data);
                setIsLoaded(true)
            })
            .catch(err => console.log("error in fetching reservations"))
    }


    useEffect(() => {
        navigation.addListener('focus', () => {
            setIsLoaded(false);
            getAllReservations();
        });
    }, [navigation])

    return (
        <VStack bgColor="white" height="100%" >
            <Heading size="xl" mt="20" ml="6" color="danger.300" bold>
                Your Reservations
            </Heading>
            <Text fontSize={16} fontWeight="bold" color="gray.500" ml="6" mt="5" mb={2}>Upcoming</Text>

            {isLoaded ?
                <ScrollView vertical={true} w={380}
                    showsVerticalScrollIndicator={false}>
                    <VStack space={2} mb={4}>
                        {bookings && bookings.map((el, index) => (
                            <BookingCard data={el} key={index} />
                        ))}
                    </VStack>
                </ScrollView>
                :
                <HStack space={2} justifyContent="center">
                    <Spinner color="danger.300" accessibilityLabel="Loading cards" />
                    <Heading color="danger.300" fontSize="md">
                        Refreshing
                    </Heading>
                </HStack>
            }

            {/* 
            {data
                ? <BookingCard data={data} />
                : <HStack space={2} justifyContent="center">
                    <Spinner color="danger.300" accessibilityLabel="Loading cards" key="secondary" />
                    <Heading color="danger.300" fontSize="md">
                        Refreshing
                    </Heading>
                </HStack>
            } */}

        </VStack >
    );
};

export default ReservationsScreenContainer;
